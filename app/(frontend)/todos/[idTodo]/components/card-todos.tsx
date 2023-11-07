"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export const CardTodos = () => {
  return (
    <div>
      <Button variant="default" size="sm">
        <AiOutlinePlus className=" text-lg mr-2" />
        New
      </Button>
      <Card>
        <div className="flex items-center">
          <div className="flex items-center">
            <CardHeader>
              <CardTitle>#1</CardTitle>
            </CardHeader>
            <div className="pe-5">
              <h1 className="text-lg line-through ">akan pergi memancing</h1>
            </div>
          </div>

          <div className="flex items-center justify-center ms-auto me-5 gap-3">
            <Checkbox onClick={() => console.log("hello")} />
            <FiEdit className="text-lg" />
            <BsTrash3 className="text-lg" />
          </div>
        </div>
      </Card>
    </div>
  );
};
