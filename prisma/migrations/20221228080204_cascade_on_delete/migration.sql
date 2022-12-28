-- DropForeignKey
ALTER TABLE "CategoriesOnProducts" DROP CONSTRAINT "CategoriesOnProducts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnProducts" DROP CONSTRAINT "CategoriesOnProducts_productId_fkey";

-- DropForeignKey
ALTER TABLE "Coupon" DROP CONSTRAINT "Coupon_productId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationSent" DROP CONSTRAINT "NotificationSent_notificationId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationSent" DROP CONSTRAINT "NotificationSent_recipentId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionsOnRole" DROP CONSTRAINT "PermissionsOnRole_permissionId_fkey";

-- DropForeignKey
ALTER TABLE "PermissionsOnRole" DROP CONSTRAINT "PermissionsOnRole_roleId_fkey";

-- DropForeignKey
ALTER TABLE "ProductColor" DROP CONSTRAINT "ProductColor_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSnapshot" DROP CONSTRAINT "ProductSnapshot_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductSnapshot" DROP CONSTRAINT "ProductSnapshot_productId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnCart" DROP CONSTRAINT "ProductsOnCart_cardId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsOnCart" DROP CONSTRAINT "ProductsOnCart_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_productId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AddForeignKey
ALTER TABLE "PermissionsOnRole" ADD CONSTRAINT "PermissionsOnRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PermissionsOnRole" ADD CONSTRAINT "PermissionsOnRole_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "Permission"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductColor" ADD CONSTRAINT "ProductColor_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupon" ADD CONSTRAINT "Coupon_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSnapshot" ADD CONSTRAINT "ProductSnapshot_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSnapshot" ADD CONSTRAINT "ProductSnapshot_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnProducts" ADD CONSTRAINT "CategoriesOnProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnProducts" ADD CONSTRAINT "CategoriesOnProducts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnCart" ADD CONSTRAINT "ProductsOnCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnCart" ADD CONSTRAINT "ProductsOnCart_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationSent" ADD CONSTRAINT "NotificationSent_notificationId_fkey" FOREIGN KEY ("notificationId") REFERENCES "Notification"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationSent" ADD CONSTRAINT "NotificationSent_recipentId_fkey" FOREIGN KEY ("recipentId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
