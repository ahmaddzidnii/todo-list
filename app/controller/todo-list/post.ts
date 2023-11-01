import prisma from "@/lib/db/prismaClient";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse as res } from "next/server";
export const postTodoListHandler = async (req: Request) => {
  const { name, description } = await req.json();

  if (!name) {
    return res.json(
      {
        message: "Mohon masukkan nama yang valid!",
      },
      { status: 400 }
    );
  }

  const data: Prisma.TodoListCreateInput = {
    name,
    description,
  };

  try {
    const createTodoList = await prisma.todoList.create({
      data,
    });

    return res.json(
      {
        message: "Todolist berhasil di tambahkan!",
        data: createTodoList,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return res.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};