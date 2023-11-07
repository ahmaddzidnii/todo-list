import { CardTodos } from "./components/card-todos";

const Page = async ({ params }: { params: { idTodo: string } }) => {
  const { idTodo } = params;

  return (
    <div className="p-5">
      <CardTodos />
    </div>
  );
};

export default Page;
