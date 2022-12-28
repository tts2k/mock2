import { Injectable } from '@nestjs/common';
import { Prisma, ProductColor } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateColorDto } from 'src/product/dto/update-product.dto';
import * as _ from 'lodash';

@Injectable()
export class ColorService {
  constructor(private readonly prisma: PrismaService) { }

  async updateColors(data: UpdateColorDto[], productId: number, tx: Prisma.TransactionClient): Promise<void> {
    let colorIds: number[] = [];

    const upsertPromises = data.map(d => {
      // Extract color id to a separate array
      colorIds.push(d.id);

      // Continue mapping
      return tx.productColor.upsert({
        where: {
          id: d.id
        },
        create: {
          color: d.color,
          name: d.name,
          product: {
            connect: {
              id: productId
            },
          }
        },
        update: {
          color: d.color,
          name: d.name
        }
      })
    });

    // Cleansing undefined values
    colorIds = _.compact(colorIds);

    // Find colors to delete
    const colorsToDelete: { id: number }[] = await tx.productColor.findMany({
      where: {
        NOT: {
          id: {
            in: colorIds
          }
        }
      },
      select: {
        id: true
      }
    })

    const deletePromise = tx.productColor.deleteMany({
      where: {
        id: {
          in: colorsToDelete.map(c => c.id)
        }
      }
    })

    await Promise.all([upsertPromises, deletePromise]);
  }
}
