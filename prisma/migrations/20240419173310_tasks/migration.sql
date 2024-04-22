/*
  Warnings:

  - You are about to drop the column `taskId` on the `items` table. All the data in the column will be lost.
  - The primary key for the `tasks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `clientId` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `tasks` table. All the data in the column will be lost.
  - The `id` column on the `tasks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `taskId` on the `works` table. All the data in the column will be lost.
  - Added the required column `osId` to the `items` table without a default value. This is not possible if the table is not empty.
  - Added the required column `osId` to the `works` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_taskId_fkey";

-- DropForeignKey
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_clientId_fkey";

-- DropForeignKey
ALTER TABLE "works" DROP CONSTRAINT "works_taskId_fkey";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "taskId",
ADD COLUMN     "osId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "tasks" DROP CONSTRAINT "tasks_pkey",
DROP COLUMN "clientId",
DROP COLUMN "description",
ADD COLUMN     "points" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "works" DROP COLUMN "taskId",
ADD COLUMN     "osId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "oses" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "clientId" INTEGER,

    CONSTRAINT "oses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "oses_name_key" ON "oses"("name");

-- AddForeignKey
ALTER TABLE "oses" ADD CONSTRAINT "oses_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_osId_fkey" FOREIGN KEY ("osId") REFERENCES "oses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "works" ADD CONSTRAINT "works_osId_fkey" FOREIGN KEY ("osId") REFERENCES "oses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
