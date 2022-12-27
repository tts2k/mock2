import { Prisma } from "@prisma/client";
import { productListItemParams } from "./product.helpers";

export type ProductListItem = Prisma.ProductGetPayload<typeof productListItemParams>

export interface SplittedCUDArrays {
  create: Prisma.ProductCreateInput[],
  update: Prisma.ProductUpdateInput[],
  delete: number[]
}
