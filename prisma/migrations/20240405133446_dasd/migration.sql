/*
  Warnings:

  - Made the column `workDayId` on table `works` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_workDayId_fkey";

-- AlterTable
ALTER TABLE "works" ALTER COLUMN "workDayId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "workdays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
