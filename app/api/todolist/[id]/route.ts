import { deleteTodoListHandler } from "@/app/controller/todo-list/delete";
import { putTodoListHandler } from "@/app/controller/todo-list/put";
import prisma from "@/lib/db/prismaClient";
import { NextResponse as res } from "next/server";

export const GET = async (req: Request, { params }: { params: { slug: string; id: string } }) => {
  const { id } = params;

  try {
    const todoListbyId = await prisma.todoList.findUnique({
      where: {
        id,
      },
    });
    if (!todoListbyId) {
      return res.json({ message: "Todolist tidak ditemukan!" }, { status: 404 });
    }

    return res.json({ todoListbyId });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error!" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = putTodoListHandler;

export const DELETE = deleteTodoListHandler;
