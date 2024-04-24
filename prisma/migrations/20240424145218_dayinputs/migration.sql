/*
  Warnings:

  - Made the column `userId` on table `workdays` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "workdays" DROP CONSTRAINT "workdays_userId_fkey";

-- AlterTable
ALTER TABLE "workdays" ADD COLUMN     "dayId" TEXT,
ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "DayInputs" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "extraStart" TIMESTAMP(3) NOT NULL,
    "extraEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DayInputs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workdays" ADD CONSTRAINT "workdays_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "DayInputs"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workdays" ADD CONSTRAINT "workdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
