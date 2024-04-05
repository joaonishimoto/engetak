/*
  Warnings:

  - You are about to drop the column `oSId` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_oSId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "oSId",
ADD COLUMN     "osId" TEXT;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_osId_fkey" FOREIGN KEY ("osId") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;
