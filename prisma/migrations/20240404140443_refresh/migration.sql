/*
  Warnings:

  - The primary key for the `clients` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `oSId` on the `clients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "clients" DROP CONSTRAINT "clients_oSId_fkey";

-- AlterTable
ALTER TABLE "clients" DROP CONSTRAINT "clients_pkey",
DROP COLUMN "oSId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "clients_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "clients_id_seq";

-- AlterTable
ALTER TABLE "os" ADD COLUMN     "clientId" TEXT;

-- AddForeignKey
ALTER TABLE "os" ADD CONSTRAINT "os_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
