/*
  Warnings:

  - You are about to drop the column `oSId` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `workdays` table. All the data in the column will be lost.
  - You are about to drop the `allos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workhours` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `day` to the `workdays` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "allos" DROP CONSTRAINT "allos_clientName_fkey";

-- DropForeignKey
ALTER TABLE "allos" DROP CONSTRAINT "allos_workHourId_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_oSId_fkey";

-- DropForeignKey
ALTER TABLE "workhours" DROP CONSTRAINT "workhours_workDayId_fkey";

-- DropIndex
DROP INDEX "clients_name_key";

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "items" DROP COLUMN "oSId";

-- AlterTable
ALTER TABLE "workdays" DROP COLUMN "date",
ADD COLUMN     "day" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "allos";

-- DropTable
DROP TABLE "workhours";

-- CreateTable
CREATE TABLE "tasks" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "workingHours" INTEGER NOT NULL,
    "itemId" TEXT NOT NULL,
    "workDayId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "workdays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
