import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import moment from "moment";
import { CreateTodoList } from "@/app/(frontend)/create-todo-list";
import Link from "next/link";

const getTodoList = async () => {
  const response = await axios.get("http://localhost:3000/api/todolist");
  const todoList = response.data.todoList;
  return todoList;
};

type todoList = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export default async function Home() {
  const todoList: todoList[] = await getTodoList();
  moment.locale("id");

  return (
    <div className="p-5">
      <CreateTodoList />

      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">CreatedAt</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Descriptions</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList.map((todo) => {
            const databaseTime = new Date(todo.createdAt);

            const date = moment(databaseTime).format("ll");
            return (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{date}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell className="flex justify-end gap-x-3">
                  <Button variant="default" size="sm" asChild>
                    <Link href={`/todos/${todo.id}`}>Pilih</Link>
                  </Button>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}