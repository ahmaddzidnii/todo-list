/*
  Warnings:

  - You are about to drop the column `name` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `TodoList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_listId_fkey";

-- AlterTable
ALTER TABLE "TodoList" DROP COLUMN "name",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "listId" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "Todo";

-- CreateTable
CREATE TABLE "TodoInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TodoInfo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TodoList" ADD CONSTRAINT "TodoList_listId_fkey" FOREIGN KEY ("listId") REFERENCES "TodoInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
