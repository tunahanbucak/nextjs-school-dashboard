import FormModal from "@/components/FormModal";
import PaginationComponent from "@/components/Pagination";
import StudentTable from "@/components/StudentTable";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { role, studentsData } from "@/lib/data";
import prisma from "@/lib/prisma";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Prisma } from "@prisma/client";
import { ArrowDownNarrowWide, Eye, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page, ...queryParams } = searchParams;

  const query: Prisma.StudentWhereInput = {};

  const p = page ? parseInt(page) : 1;

  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "teacherId":
            query.class = {
              lessons: {
                some: {
                  teacherId: value,
                },
              },
            };
            break;
          case "search":
            query.name = { contains: value, mode: "insensitive" };
            break;
          default:
            break;
        }
      }
    }
  }

  const [students, count] = await prisma.$transaction([
    prisma.student.findMany({
      where: query,
      include: {
        class: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.student.count({ where: query }),
  ]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block">
          Tüm Öğrenciler
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto pb-5">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow">
              <SlidersHorizontal width={14} height={14} />
            </Button>
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow">
              <ArrowDownNarrowWide width={14} height={14} />
            </Button>
            {role === "admin" && <FormModal table="student" type="create" />}
          </div>
        </div>
      </div>
      {/* <Table
        info="Bilgi"
        data={students}
        IDName="Öğrenci ID"
        lessonName="Derece"
        number="Telefon Numarası"
        address="Adres"
        name="students"
        renderActions={(item) => (
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
        )}
      /> */}
      <StudentTable students={students} />
      <PaginationComponent page={p} count={count} />
    </div>
  );
}
