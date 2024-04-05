/*
  Warnings:

  - You are about to drop the column `itemId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `workDayId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `workingHours` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `taskId` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_clientId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_itemId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_workDayId_fkey";

-- AlterTable
ALTER TABLE "items" ADD COLUMN     "taskId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "itemId",
DROP COLUMN "workDayId",
DROP COLUMN "workingHours",
ALTER COLUMN "clientId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "works" (
    "id" TEXT NOT NULL,
    "taskId" TEXT NOT NULL,
    "itemId" TEXT NOT NULL,
    "hours" INTEGER NOT NULL,
    "workDayId" TEXT,

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "tasks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "workdays"("id") ON DELETE SET NULL ON UPDATE CASCADE;
