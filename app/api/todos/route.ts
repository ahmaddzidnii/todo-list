import { deleteTodoHandler } from "@/controller/todos/delete";
import { getTodoHandler } from "@/controller/todos/get";
import { postTodoHandler } from "@/controller/todos/post";
import { putTodoHandler } from "@/controller/todos/put";

export const GET = getTodoHandler;
export const POST = postTodoHandler;
export const PUT = putTodoHandler;
export const DELETE = deleteTodoHandler;
