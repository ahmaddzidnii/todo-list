/*
  Warnings:

  - The `createdAt` column on the `Todo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `createdAt` column on the `TodoList` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `updateAt` on the `Todo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `updateAt` on the `TodoList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "updateAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "TodoList" DROP COLUMN "updateAt",
ADD COLUMN     "updateAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
