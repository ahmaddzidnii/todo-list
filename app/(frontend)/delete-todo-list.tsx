"use client";

import { BsTrash3 } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { useState } from "react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import axios from "axios";

import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";

type Props = {
  idTodoList: string;
};
export const DeleteTodoList: React.FC<Props> = ({ idTodoList }) => {
  const [hiddenModal, setHiddenModal] = useState(false);
  const router = useRouter();
  const { toast }: any = useToast();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/todolist/${idTodoList}`);
      setHiddenModal(false);
      router.refresh();
      toast({
        title: "Berhasil",
        description: "Todolist Berhasil Dihapus",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={hiddenModal} onOpenChange={setHiddenModal}>
        <DialogTrigger asChild>
          <Button variant="destructive" size="sm">
            <BsTrash3 className="text-lg" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apakah kamu yakin?</DialogTitle>
            <DialogDescription>Tindakan ini tidak bisa dibatalkan. Tindakan ini akan menghapus akun Anda secara permanen dan menghapus data Anda dari server kami.</DialogDescription>
          </DialogHeader>
          <Button onClick={handleDelete} variant="destructive" size="sm">
            Delete
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
