/*
  Warnings:

  - Changed the type of `rating` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Review" DROP COLUMN "rating",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;

-- DropEnum
DROP TYPE "Rating";

-- Check constraint for rating
ALTER TABLE "Review"
ADD CONSTRAINT rating_check
CHECK (
  rating >= 1
  AND rating <= 5
)
