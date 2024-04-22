-- CreateTable
CREATE TABLE "rewards" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "rewards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rewards_name_key" ON "rewards"("name");
