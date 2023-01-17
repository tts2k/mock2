/*
  Warnings:

  - You are about to drop the column `orderDetailId` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `paymentsId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `paymentId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Made the column `userId` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_paymentsId_fkey";

-- DropIndex
DROP INDEX "Order_orderDetailId_key";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "orderDetailId",
DROP COLUMN "paymentsId",
ADD COLUMN     "paymentId" INTEGER NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "Payment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
