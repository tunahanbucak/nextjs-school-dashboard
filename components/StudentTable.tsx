"use client";

import Table from "@/components/Table";
import FormModal from "@/components/FormModal";
import { role } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Class, Student, Subject, Teacher } from "@prisma/client";

type StudentList = Student & { class: Class };

interface StudentTableProps {
  students: StudentList[];
}

export default function StudentTable({ students }: StudentTableProps) {
  const renderActions = (item: StudentList) => (
    <>
      <Link href={`/list/students/${item.id}`}>
        <Button className="flex items-center justify-center rounded-full bg-lamaSky p-2 hover:bg-lamaSky">
          <Eye width={16} height={16} />
        </Button>
      </Link>
      {role === "admin" && (
        <FormModal table="student" type="delete" id={item.id} />
      )}
    </>
  );

  return (
    <Table
      info="Bilgi"
      data={students}
      IDName="Öğrenci ID"
      lessonName="Derece"
      number="Telefon Numarası"
      address="Adres"
      name="students"
      renderActions={renderActions}
    />
  );
}
