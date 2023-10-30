/*
  Warnings:

  - Added the required column `updateAt` to the `Todo` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `createdAt` on the `Todo` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `updateAt` to the `TodoList` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `createdAt` on the `TodoList` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Todo" ADD COLUMN     "updateAt" INTEGER NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "TodoList" ADD COLUMN     "updateAt" INTEGER NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" INTEGER NOT NULL;
