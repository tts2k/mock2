import { Prisma } from "@prisma/client";
import * as _ from "lodash"

export const productListItemParams = (categoryIds?: number[]) => Prisma.validator<Prisma.ProductFindManyArgs>()({
  select: {
    id: true,
    name: true,
    price: true,
    categories: {
      select: {
        category: {
          select: {
            id: true,
            name: true
          },
        },
      },
    }
  },
  where: {
    categories: {
      some: {
        categoryId: {
          in: categoryIds
        }
      }
    }
  }
})
