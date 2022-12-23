-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "sold" INTEGER NOT NULL DEFAULT 0;

ALTER TABLE "ProductColor"
ADD CONSTRAINT color_hex_check
CHECK (color is null or color ~* '^#[a-f0-9]{6}$')
