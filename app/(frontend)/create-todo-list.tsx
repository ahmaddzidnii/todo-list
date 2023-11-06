"use client";
import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

import { AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

export const CreateTodoList = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const [hiddenModal, setHiddenModal] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/todolist", data);
      setHiddenModal(false);
      router.refresh();
      toast.success("Todolist created successfully");
    } catch (error) {
      toast.error("Terjadi Kesalahan saat menambahkan todolist");
    }
  };
  return (
    <>
      <Dialog open={hiddenModal} onOpenChange={setHiddenModal}>
        <DialogTrigger asChild>
          <Button variant="default">
            <AiOutlinePlus className=" text-lg mr-2" />
            New
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create new todolist</DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="">
                <Label htmlFor="Name">Name</Label>
                <Input onChange={(e) => setData({ ...data, name: e.target.value })} required className="w-full my-2" type="text" id="Name" placeholder="Name" />
                <Label htmlFor="Description">Description</Label>
                <Input onChange={(e) => setData({ ...data, description: e.target.value })} className="w-full my-2" type="text" id="Description" placeholder="Description" />
                <Button className="w-full my-2" variant="default" type="submit">
                  Create
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
