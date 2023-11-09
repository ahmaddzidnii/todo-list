import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import moment from "moment";
import { CreateTodoList } from "@/app/(frontend)/create-todo-list";
import { DeleteTodoList } from "@/app/(frontend)/delete-todo-list";
import Link from "next/link";

import { UpdateTodoList } from "./update-todo-list";
import { OptionsFilter } from "./opsi-filter";
import { getTodoList } from "@/services/todolist";

type todoList = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export default async function Home(searchParams: { [key: string]: string | string[] | undefined }) {
  const todoList: todoList[] = await getTodoList();
  moment.locale("id");
  console.log(searchParams);

  return (
    <div className="p-5">
      <div className="flex justify-between items-center py-5">
        <CreateTodoList />
        <OptionsFilter />
      </div>

      <Table>
        <TableCaption>A list of your todolist.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">CreatedAt</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Descriptions</TableHead>
            <TableHead className="text-end">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todoList?.map((todo) => {
            const databaseTime = new Date(todo.createdAt);

            const date = moment(databaseTime).format("lll");
            return (
              <TableRow key={todo.id}>
                <TableCell className="font-medium">{date}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell className="flex justify-end gap-x-3">
                  <Button variant="default" size="sm" asChild>
                    <Link href={`/todos/${todo.id}`}>Pilih</Link>
                  </Button>
                  <UpdateTodoList name={todo.name} description={todo.description} idTodoList={todo.id} />

                  <DeleteTodoList idTodoList={todo.id} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
