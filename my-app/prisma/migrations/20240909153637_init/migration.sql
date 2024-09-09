-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "zipCode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "zipCode" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "zipCode" DROP NOT NULL;
