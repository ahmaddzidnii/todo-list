-- CreateTable
CREATE TABLE "todo" (
    "id" TEXT NOT NULL,
    "name_todo" TEXT NOT NULL,
    "create_at" INTEGER NOT NULL,
    "update_at" INTEGER NOT NULL,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "todo_list" (
    "list_id" TEXT NOT NULL,
    "fill_text" TEXT NOT NULL,
    "create_at" INTEGER NOT NULL,
    "update_at" INTEGER NOT NULL,
    "title_todo" TEXT NOT NULL,

    CONSTRAINT "todo_list_pkey" PRIMARY KEY ("list_id")
);

-- AddForeignKey
ALTER TABLE "todo_list" ADD CONSTRAINT "todo_list_title_todo_fkey" FOREIGN KEY ("title_todo") REFERENCES "todo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
