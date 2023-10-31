import prisma from "@/lib/db/prismaClient";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const todo = await prisma.todoInfo.findMany();
    return NextResponse.json({
      todo,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error!",
      },
      { status: 500 }
    );
  }
};
