"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getTodos } from "@/services/todos";

export const CardTodos = ({ id }: { id: string }) => {
  const [data, setData] = useState<{ todoById: any[] }>({ todoById: [] });
  // console.log(data);

  const getdataTodos = async () => {
    const dataTodos: any = await getTodos(id);
    setData(dataTodos);
  };

  useEffect(() => {
    getdataTodos();
  }, []);

  return (
    <div>
      <Button className="my-5" variant="default" size="sm">
        <AiOutlinePlus className=" text-lg mr-2" />
        New
      </Button>
      <div>
        {data?.todoById.map((data) => {
          return (
            <Card key={data.id} className="my-5">
              <div className="flex items-center">
                <div className="pe-5">
                  <h1 className="text-lg  p-5 ">{data.todo}</h1>
                </div>

                <div className="flex items-center justify-center ms-auto me-5 gap-3">
                  <Checkbox onClick={() => console.log("hello")} />
                  <FiEdit className="text-lg" />
                  <BsTrash3 className="text-lg" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
