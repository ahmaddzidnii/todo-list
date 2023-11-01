import prisma from "@/lib/db/prismaClient";
import { NextRequest, NextResponse as res } from "next/server";
export const getTodoHandler = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    let completed: string | boolean | undefined | null = searchParams.get("completed");
    if (!id) {
      return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
    }

    if (completed == "1") {
      completed = true;
    } else if (completed == "0") {
      completed = false;
    } else {
      completed = undefined;
    }

    const todoById = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        todoListId: id,
        completed,
      },
    });

    if (todoById.length == 0) {
      return res.json({ message: "Todo tidak ditemukan!" }, { status: 404 });
    }

    return res.json({ message: "Todo berhasil ditampilkan!", todoById });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
