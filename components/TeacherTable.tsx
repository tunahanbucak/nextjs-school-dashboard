"use client";

import Table from "@/components/Table";
import FormModal from "@/components/FormModal";
import { role } from "@/lib/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { Class, Subject, Teacher } from "@prisma/client";

type TeacherList = Teacher & { subjects: Subject[]; classes: Class[] };

interface TeacherTableProps {
  teachers: TeacherList[];
}

export default function TeacherTable({ teachers }: TeacherTableProps) {
  const renderActions = (item: TeacherList) => (
    <>
      <Link href={`/list/teachers/${item.id}`}>
        <Button className="flex items-center justify-center rounded-full bg-lamaSky p-2 hover:bg-lamaSky">
          <Eye width={16} height={16} />
        </Button>
      </Link>
      {role === "admin" && (
        <FormModal table="teacher" type="delete" id={item.id} />
      )}
    </>
  );

  return (
    <Table
      info="Bilgi"
      data={teachers}
      IDName="Öğretmen ID"
      lessonName="Dersler"
      className="Sınıflar"
      number="Telefon Numarası"
      address="Adres"
      name="teachers"
      renderActions={renderActions}
    />
  );
}
