import { Injectable } from '@nestjs/common';
import { Prisma, ProductColor } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateColorDto } from 'src/product/dto/update-product.dto';

@Injectable()
export class ColorService {
  constructor(private readonly prisma: PrismaService) { }

  async updateColors(data: UpdateColorDto[], tx: Prisma.TransactionClient): Promise<void> {
    const colorIds: number[] = [];

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
              id: d.productId
            },
          }
        },
        update: {
          color: d.color,
          name: d.name
        }
      })
    });

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
