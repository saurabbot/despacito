/*
  Warnings:

  - Made the column `verification_token` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "verification_token" SET NOT NULL;
