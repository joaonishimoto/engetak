/*
  Warnings:

  - You are about to drop the column `clientId` on the `allos` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `clients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientName` to the `allos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "allos" DROP CONSTRAINT "allos_clientId_fkey";

-- AlterTable
ALTER TABLE "allos" DROP COLUMN "clientId",
ADD COLUMN     "clientName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- AddForeignKey
ALTER TABLE "allos" ADD CONSTRAINT "allos_clientName_fkey" FOREIGN KEY ("clientName") REFERENCES "clients"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
