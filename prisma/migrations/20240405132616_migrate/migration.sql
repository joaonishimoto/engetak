-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_workDayId_fkey";

-- AlterTable
ALTER TABLE "works" ALTER COLUMN "workDayId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "workdays"("id") ON DELETE SET NULL ON UPDATE CASCADE;
