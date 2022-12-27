import { Prisma } from "@prisma/client";
import * as _ from "lodash"

export const productListItemParams = (categoryIds?: number[]) => Prisma.validator<Prisma.ProductArgs>()({
  select: {
    id: true,
    name: true,
    price: true,
    categories: {
      where: {
        categoryId: {
          in: categoryIds
        }
      },
      select: {
        category: {
          select: {
            id: true,
            name: true
          },
        }
      },
    }
  }
})
