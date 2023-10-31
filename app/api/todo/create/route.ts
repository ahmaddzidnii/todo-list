import prisma from "@/lib/db/prismaClient";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json(
      {
        message: "Mohon masukkan nama yang valid!",
      },
      { status: 400 }
    );
  }

  try {
    const data: any = {
      name,
    };

    const create = await prisma.todoInfo.create({
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
