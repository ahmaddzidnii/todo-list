import { getTodoListHandler } from "@/app/controller/todo-list/get";
import { postTodoListHandler } from "@/app/controller/todo-list/post";

export const GET = getTodoListHandler;
export const POST = postTodoListHandler;
