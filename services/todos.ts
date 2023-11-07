import { axiosInstance } from "@/lib/axiosInstance";

export const getTodos = async (idTodoList: string) => {
  try {
    const response = await axiosInstance.get(`/todos?id=${idTodoList}`);
    const data = response.data;
    return data;
  } catch (error) {
    return null;
  }
};
