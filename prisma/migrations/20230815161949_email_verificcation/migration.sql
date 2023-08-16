/*
  Warnings:

  - A unique constraint covering the columns `[verification_token]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `verification_token` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_emailVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verification_token" TEXT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_verification_token_key" ON "User"("verification_token");
