/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `os` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description]` on the table `os` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "os_name_key" ON "os"("name");

-- CreateIndex
CREATE UNIQUE INDEX "os_description_key" ON "os"("description");
