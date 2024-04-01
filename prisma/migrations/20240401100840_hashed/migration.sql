/*
  Warnings:

  - You are about to drop the column `hashadPassword` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "hashadPassword",
ADD COLUMN     "hashedPassword" TEXT;
