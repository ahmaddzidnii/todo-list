import prisma from "@/lib/db/prismaClient";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse as res } from "next/server";
export const postTodoHandler = async (req: NextRequest) => {
  const { todo }: { todo: string } = await req.json();
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get("id");
  if (!id) {
    return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
  }
  try {
    const idTodoList = await prisma.todoList.findUnique({
      where: {
        id,
      },
    });
    if (!idTodoList) {
      return res.json({ message: "Todolist tidak ditemukan!" }, { status: 404 });
    }
    const data = {
      todo,
      todoListId: idTodoList?.id,
    };
    const cerateTodo = await prisma.todo.create({
      data,
    });
    return res.json({ message: "Todo berhasil ditambahkan", cerateTodo }, { status: 201 });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error!" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
