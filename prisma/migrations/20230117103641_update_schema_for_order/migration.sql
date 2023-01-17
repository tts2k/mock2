/*
  Warnings:

  - Added the required column `type` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalDiscount` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userSnapshotId` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorCode` to the `ProductSnapshot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `colorName` to the `ProductSnapshot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discount` to the `ProductSnapshot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `ProductSnapshot` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `ProductSnapshot` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CouponType" AS ENUM ('PERCENTAGE', 'FIXED');

-- AlterTable
ALTER TABLE "Coupon" ADD COLUMN     "discountAmount" DECIMAL(65,30),
ADD COLUMN     "discountPercentage" DOUBLE PRECISION,
ADD COLUMN     "limit" DECIMAL(65,30),
ADD COLUMN     "minimum" DECIMAL(65,30),
ADD COLUMN     "type" "CouponType" NOT NULL;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "totalDiscount" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "totalPrice" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "userSnapshotId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductSnapshot" ADD COLUMN     "colorCode" TEXT NOT NULL,
ADD COLUMN     "colorImage" TEXT[],
ADD COLUMN     "colorName" TEXT NOT NULL,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "discount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "specification" TEXT;

-- CreateTable
CREATE TABLE "UserSnapshot" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "userId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSnapshot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSnapshot" ADD CONSTRAINT "UserSnapshot_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userSnapshotId_fkey" FOREIGN KEY ("userSnapshotId") REFERENCES "UserSnapshot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
