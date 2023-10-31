import prisma from "@/lib/db/prismaClient";
import { Prisma } from "@prisma/client";
import { NextResponse as res } from "next/server";

export const POST = async (req: Request) => {
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
    const createTodoList = await prisma.todoList.create({
      data,
    });

    return res.json(
      {
        message: "Todolist berhasil di tambahkan!",
        data: createTodoList,
      },
      { status: 201 }
    );
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

// import prisma from "@/lib/db/prismaClient";
// import { Prisma } from "@prisma/client";
// import { NextResponse } from "next/server";

// export const POST = async (req: Request) => {
//   const { title } = await req.json();

//   if (!title) {
//     return NextResponse.json(
//       {
//         message: "Mohon masukkan nama yang valid!",
//       },
//       { status: 400 }
//     );
//   }

//   try {
//     const todoList = await prisma.todoList.findUnique({
//       where: {
//         id: "clocz068l0002as3skdmkztp2",
//       },
//     });

//     const data: any = {
//       title,
//       listId: todoList?.id,
//     };

//     const create = await prisma.todoInfo.create({
//       data: data,
//     });
//     return NextResponse.json({
//       create,
//     });
//   } catch (error) {
//     console.log(error);

//     return NextResponse.json(
//       {
//         message: "Internal server error",
//       },
//       { status: 500 }
//     );
//   }
// };
