import prisma from "@/lib/db/prismaClient";
import { NextRequest, NextResponse as res } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const orderBy = searchParams.get("orderBy");
  const query = searchParams.get("query");
  try {
    if (orderBy === "asc" || orderBy === "desc") {
      const todoListbyDate = await prisma.todoList.findMany({
        orderBy: {
          name: orderBy,
        },
        where: {
          name: {
            contains: query?.toLowerCase(),
            mode: "insensitive",
          },
        },
      });
      if (todoListbyDate.length == 0) {
        return res.json({ message: `Todolist tidak ditemukan untuk katakunci ${query}` }, { status: 404 });
      }
      return res.json({ todoListbyDate });
    }

    const todoListNoFilter = await prisma.todoList.findMany();
    return res.json({ todoList: todoListNoFilter });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal server error!" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
