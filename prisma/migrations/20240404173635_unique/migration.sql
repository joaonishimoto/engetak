/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `tasks` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "tasks_name_key" ON "tasks"("name");
