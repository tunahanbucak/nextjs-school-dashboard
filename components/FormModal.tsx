"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash2, Pencil, Plus, X } from "lucide-react";
import dynamic from "next/dynamic";
// import TeacherForm from "./forms/TeacherForm";
// import StudentForm from "./forms/StudentForm";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
  loading: () => <h1>Loading...</h1>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
  loading: () => <h1>Loading...</h1>,
});

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => React.ReactNode;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};
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
  id?: string;
}

export default function FormModal({ table, type, data, id }: FormModalProps) {
  // const size =
  //   type === "create"
  //     ? "w-10 h-10"
  //     : type === "update"
  //     ? "w-9 h-9"
  //     : "w-10 h-10";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const Icon = type === "create" ? Plus : type === "update" ? Pencil : Trash2;

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4">
        <span className="text-center font-medium">
          Tüm veriler kaybolacak. Bu {table} bilgilerini silmek istediğinizden
          emin misiniz?{" "}
        </span>
        <Button className="bg-red-700 text0white py-2 px-4 rounded-full border-none w-max self-center hover:bg-red-700 text-white">
          Sil
        </Button>
      </form>
    ) : type === "create" || type === "update" ? (
      // <TeacherForm type="update" data={data} />
      // <StudentForm type="create" />
      forms[table](type, data)
    ) : (
      "Form not found"
    );
  };
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={`flex items-center justify-center rounded-full hover:${bgColor}  ${bgColor} `}
      >
        <Icon size={16} />
      </Button>
      {open && (
        <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <X width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
