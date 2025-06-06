-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('retirada', 'encomenda');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "type" "ProductType" NOT NULL DEFAULT 'retirada';
