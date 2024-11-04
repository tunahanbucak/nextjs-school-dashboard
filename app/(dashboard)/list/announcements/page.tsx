"use client";

import FormModal from "@/components/FormModal";
import PaginationComponent from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import {
  announcementsData,
  examsData,
  lessonsData,
  parentsData,
  role,
  subjectsData,
} from "@/lib/data";
import { ArrowDownNarrowWide, Plus, SlidersHorizontal } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block ">
          Tüm Duyurular
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
            {role === "admin" && (
              // <Button className="flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Plus width={14} height={14} />
              // </Button>
              <FormModal table="announcement" type="create" />
            )}
          </div>
        </div>
      </div>
      <Table
        info="Başlık "
        data={announcementsData}
        IDName="Sınıf"
        address="Tarih"
        name="announcements"
        renderActions={(item) => (
          <>
            {role === "admin" && (
              // <Button className="flex items-center justify-center rounded-full bg-lamaPurple p-2 hover:bg-lamaPurple">
              //   <Trash2 width={16} height={16} />
              // </Button>
              <>
                <FormModal table="announcement" type="update" data={item} />
                <FormModal table="announcement" type="delete" id={item.id} />
              </>
            )}
          </>
        )}
      />
      <PaginationComponent totalItems={100} itemsPerPage={25} />
    </div>
  );
}