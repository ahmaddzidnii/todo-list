import prisma from "@/lib/db/prismaClient";
import { NextResponse as res } from "next/server";

export const GET = async (req: Request) => {
  try {
    const todoList = await prisma.todoList.findMany();

    return res.json({ todoList });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error!" }, { status: 500 });
  }
};
