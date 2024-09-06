/*
  Warnings:

  - Added the required column `zipCode` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `Group` table without a default value. This is not possible if the table is not empty.
  - Added the required column `zipCode` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "zipCode" CHAR(5) NOT NULL;

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "zipCode" CHAR(5) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "zipCode" CHAR(5) NOT NULL;
