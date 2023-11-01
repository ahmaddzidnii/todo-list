import { deleteTodoHandler } from "@/app/controller/todos/delete";
import { getTodoHandler } from "@/app/controller/todos/get";
import { postTodoHandler } from "@/app/controller/todos/post";
import { putTodoHandler } from "@/app/controller/todos/put";

export const GET = getTodoHandler;
export const POST = postTodoHandler;
export const PUT = putTodoHandler;
export const DELETE = deleteTodoHandler;
