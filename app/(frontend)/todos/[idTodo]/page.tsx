import { getTodoListById } from "@/services/todolist";
import { CardTodos } from "./components/card-todos";

type todoList = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};
const Page = async ({ params }: { params: { idTodo: string } }) => {
  const { idTodo } = params;

  const dataTodoList: todoList = await getTodoListById(idTodo);

  return (
    <div className="p-5">
      <div>
        <h1 className="text-3xl font-bold ">{dataTodoList.name}</h1>
        <p className="text-justify">{dataTodoList.description ? dataTodoList.description : "Tidak ada deskripsi"}</p>
      </div>
      <CardTodos id={idTodo} />
    </div>
  );
};

export default Page;
