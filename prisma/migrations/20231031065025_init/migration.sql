/*
  Warnings:

  - You are about to drop the column `completed` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the column `listId` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `TodoList` table. All the data in the column will be lost.
  - You are about to drop the `TodoInfo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `name` to the `TodoList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TodoList` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TodoList" DROP CONSTRAINT "TodoList_listId_fkey";

-- AlterTable
ALTER TABLE "TodoList" DROP COLUMN "completed",
DROP COLUMN "listId",
DROP COLUMN "title",
DROP COLUMN "updateAt",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "TodoInfo";

-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "dueDate" TIMESTAMP(3),
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "todoListId" TEXT,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Todo" ADD CONSTRAINT "Todo_todoListId_fkey" FOREIGN KEY ("todoListId") REFERENCES "TodoList"("id") ON DELETE SET NULL ON UPDATE CASCADE;
