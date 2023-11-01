import { getTodoHandler } from "@/controller/todos/get";
import { postTodoHandler } from "@/controller/todos/post";
import { NextResponse as res } from "next/server";

export const GET = getTodoHandler;
export const POST = postTodoHandler;
export const PUT = async (req: Request) => {
  return res.json({ message: "PUT" });
};
export const DELETE = async (req: Request) => {
  return res.json({ message: "DELETE" });
};
