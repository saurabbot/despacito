/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "is_candidate" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "is_employer" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "username" TEXT;
