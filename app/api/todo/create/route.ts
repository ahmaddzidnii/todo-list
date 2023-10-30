import prisma from "@/lib/db/prismaClient";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { title } = await req.json();

  if (!title) {
    return NextResponse.json(
      {
        message: "Mohon masukkan nama yang valid!",
      },
      { status: 400 }
    );
  }

  try {
    const todoList = await prisma.todoList.findUnique({
      where: {
        id: "clocz068l0002as3skdmkztp2",
      },
    });

    const data: any = {
      title,
      listId: todoList?.id,
    };

    const create = await prisma.todo.create({
      data: data,
    });
    return NextResponse.json({
      create,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
