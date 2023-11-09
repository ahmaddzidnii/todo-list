import { axiosInstance } from "@/lib/axiosInstance";

export const getTodoList = async () => {
  try {
    const response = await axiosInstance.get("/todolist?orderBy=desc");
    const todoList = response.data.todoList;
    return todoList;
  } catch (error) {
    return [];
  }
};
export const getTodoListById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/todolist/${id}`);
    return response.data.todoListbyId;
  } catch (error) {
    console.log(error);

    return [];
  }
};
