import { Prisma } from "@prisma/client";

export const productListItemParams = (categoryId?: number) => Prisma.validator<Prisma.ProductArgs>()({
  select: {
    id: true,
    name: true,
    price: true,
    categories: {
      where:{
        categoryId
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

