"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Trash2, Pencil, Plus } from "lucide-react";

interface FormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

export default function FormModal({ table, type, data, id }: FormModalProps) {
  const size =
    type === "create"
      ? "w-10 h-10"
      : type === "update"
      ? "w-9 h-9"
      : "w-10 h-10";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const Icon = type === "create" ? Plus : type === "update" ? Pencil : Trash2;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`flex items-center justify-center rounded-full ${bgColor} `}>
        {" "}
        {/*${size} kullanildiginda icn gozukmuyor */}
        <Icon size={16} />
      </Button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md">merhaba</div>
        </div>
      )}
    </>
  );
}
