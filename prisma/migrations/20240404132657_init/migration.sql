-- CreateEnum
CREATE TYPE "role" AS ENUM ('MEMBER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "role" NOT NULL DEFAULT 'MEMBER',

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workdays" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    "hours" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "workdays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "os" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "os_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "oSId" TEXT,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "oSId" TEXT,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OSToWorkDay" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_OSToWorkDay_AB_unique" ON "_OSToWorkDay"("A", "B");

-- CreateIndex
CREATE INDEX "_OSToWorkDay_B_index" ON "_OSToWorkDay"("B");

-- AddForeignKey
ALTER TABLE "workdays" ADD CONSTRAINT "workdays_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_oSId_fkey" FOREIGN KEY ("oSId") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_oSId_fkey" FOREIGN KEY ("oSId") REFERENCES "os"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OSToWorkDay" ADD CONSTRAINT "_OSToWorkDay_A_fkey" FOREIGN KEY ("A") REFERENCES "os"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OSToWorkDay" ADD CONSTRAINT "_OSToWorkDay_B_fkey" FOREIGN KEY ("B") REFERENCES "workdays"("id") ON DELETE CASCADE ON UPDATE CASCADE;
