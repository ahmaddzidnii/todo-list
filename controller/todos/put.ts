import prisma from "@/lib/db/prismaClient";
import { NextRequest, NextResponse as res } from "next/server";
export const putTodoHandler = async (req: NextRequest) => {
  try {
    const { todo, completed, description }: { todo: string; completed: boolean; description: string } = await req.json();
    if (!todo) {
      return res.json({ message: "Todo tidak boleh kosong!" }, { status: 400 });
    }
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
    }

    const todoById = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        todo,
        completed,
        description,
      },
    });
    return res.json({ message: "Todo berhasil diupdate!", todoById });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
