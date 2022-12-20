import { Prisma } from "@prisma/client";
import { productListItemParams } from "./product.helpers";

export type ProductListItem = Prisma.ProductGetPayload<ReturnType<typeof productListItemParams>>
