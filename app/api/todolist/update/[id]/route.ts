import prisma from "@/lib/db/prismaClient";
import { Prisma } from "@prisma/client";
import { NextResponse as res } from "next/server";

export const PUT = async (req: Request, { params }: { params: { slug: string; id: string } }) => {
  // Mengecek isi header request body
  const contentLength = req.headers.get("content-length");
  if (contentLength === "0") {
    return res.json({ message: "Pastikan ada mengirimkan request payload body!" }, { status: 400 });
  }

  const { id } = params;

  if (!id) {
    return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
  }

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
    const updateTodoList = await prisma.todoList.update({
      where: {
        id,
      },
      data,
    });
    return res.json({message:"Todolist berhasil di update!"});
  } catch (error) {
    console.log(error);

    return res.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
};
