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
    return res.json({ todoListbyId });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error!" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
