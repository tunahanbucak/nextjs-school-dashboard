"use client";

import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  ArrowDownNarrowWide,
  Eye,
  Plus,
  SlidersHorizontal,
} from "lucide-react";
import Table from "@/components/Table";
import PaginationComponent from "@/components/Pagination";
import { role, teachersData } from "@/lib/data";
import FormModal from "@/components/FormModal";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block ">
          Tüm Öğretmenler
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto pb-5">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow ">
              <SlidersHorizontal width={14} height={14} />
            </Button>
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow">
              <ArrowDownNarrowWide width={14} height={14} />
            </Button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      <Table
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
      />
      <PaginationComponent totalItems={100} itemsPerPage={25} />
    </div>
  );
}
