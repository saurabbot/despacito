/*
  Warnings:

  - Added the required column `phone_number` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Candidate" ADD COLUMN     "phone_number" TEXT NOT NULL;
