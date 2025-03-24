import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowDownNarrowWide, SlidersHorizontal } from "lucide-react";
import PaginationComponent from "@/components/Pagination";
import { role } from "@/lib/data";
import FormModal from "@/components/FormModal";
import prisma from "@/lib/prisma";
import TeacherTable from "@/components/TeacherTable";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { Prisma } from "@prisma/client";

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { page, ...queryParams } = searchParams;

  const query: Prisma.TeacherWhereInput = {};

  const p = page ? parseInt(page) : 1;
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        switch (key) {
          case "classId":
            query.lessons = {
              some: {
                classId: parseInt(value),
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

  const [teachers, count] = await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        subjects: true,
        classes: true,
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (p - 1),
    }),
    prisma.teacher.count({ where: query }),
  ]);

  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block ">
          Tüm Öğretmenler
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto pb-5">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellow ">
              <SlidersHorizontal width={14} height={14} />
            </Button>
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow hover:bg-lamaYellow">
              <ArrowDownNarrowWide width={14} height={14} />
            </Button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      {/* <Table
        info="Bilgi"
        data={teachersData}
        IDName="Öğretmen ID"
        lessonName="Dersler"
        className="Sınıflar"
        number="Telefon Numarası"
        address="Adres"
        name="teachers"
        renderActions={(item) => (
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
        )}
      /> */}
      <TeacherTable teachers={teachers} />
      <PaginationComponent page={p} count={count} />
    </div>
  );
}
