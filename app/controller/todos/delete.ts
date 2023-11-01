import prisma from "@/lib/db/prismaClient";
import { NextRequest, NextResponse as res } from "next/server";
export const deleteTodoHandler = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const id = searchParams.get("id");
    if (!id) {
      return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
    }

    const todoById = await prisma.todo.delete({
      where: {
        id,
      },
    });

    if (!todoById) {
      return res.json({ message: "Todo gagal dihapus!" }, { status: 500 });
    }
    return res.json({ message: "Todo berhasil dihapus!" });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
};
