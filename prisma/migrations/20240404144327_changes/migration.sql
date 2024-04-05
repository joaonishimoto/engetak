/*
  Warnings:

  - You are about to drop the column `osId` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `hours` on the `workdays` table. All the data in the column will be lost.
  - You are about to drop the `_OSToWorkDay` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `os` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `userId` on table `workdays` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "_OSToWorkDay" DROP CONSTRAINT "_OSToWorkDay_A_fkey";

-- DropForeignKey
ALTER TABLE "_OSToWorkDay" DROP CONSTRAINT "_OSToWorkDay_B_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_osId_fkey";

-- DropForeignKey
ALTER TABLE "os" DROP CONSTRAINT "os_clientId_fkey";

-- DropForeignKey
ALTER TABLE "workdays" DROP CONSTRAINT "workdays_userId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "osId",
ADD COLUMN     "oSId" TEXT;

-- AlterTable
ALTER TABLE "workdays" DROP COLUMN "hours",
ALTER COLUMN "userId" SET NOT NULL;

-- DropTable
DROP TABLE "_OSToWorkDay";

-- DropTable
DROP TABLE "os";

-- CreateTable
CREATE TABLE "workhours" (
    "id" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "workDayId" TEXT NOT NULL,

    CONSTRAINT "workhours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "allos" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "workHourId" TEXT,

    CONSTRAINT "allos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "workdays" ADD CONSTRAINT "workdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workhours" ADD CONSTRAINT "workhours_workDayId_fkey" FOREIGN KEY ("workDayId") REFERENCES "workdays"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allos" ADD CONSTRAINT "allos_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allos" ADD CONSTRAINT "allos_workHourId_fkey" FOREIGN KEY ("workHourId") REFERENCES "workhours"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_oSId_fkey" FOREIGN KEY ("oSId") REFERENCES "allos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
