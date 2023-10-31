import prisma from "@/lib/db/prismaClient";
import { NextResponse as res } from "next/server";

export const DELETE = async (req: Request, { params }: { params: { slug: string; id: string } }) => {
  // Mengecek isi header request body
  const contentLength = req.headers.get("content-length");
  if (contentLength === "0") {
    return res.json({ message: "Pastikan ada mengirimkan request payload body!" }, { status: 400 });
  }

  const { id } = params;

  if (!id) {
    return res.json({ message: "Id tidak boleh kosong!" }, { status: 400 });
  }

  try {
    await prisma.todoList.delete({
      where: {
        id,
      },
    });
    return res.json({ message: "Todolist berhasil di hapus!" });
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
