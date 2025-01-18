import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowDownNarrowWide, SlidersHorizontal } from "lucide-react";
import Table from "@/components/Table";
import PaginationComponent from "@/components/Pagination";
import { resultsData, role } from "@/lib/data";
import FormModal from "@/components/FormModal";

export default function page() {
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold hidden md:block ">Tüm Sonuçlar</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto pb-5">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow ">
              <SlidersHorizontal width={14} height={14} />
            </Button>
            <Button className="flex items-center justify-center rounded-full bg-lamaYellow">
              <ArrowDownNarrowWide width={14} height={14} />
            </Button>
            {role === "admin" && <FormModal table="result" type="create" />}
          </div>
        </div>
      </div>
      <Table
        info="Dersler"
        data={resultsData}
        IDName="Sınıf"
        lessonName="Öğretmen"
        className="Öğrenci"
        number="Puan"
        address="Tarih"
        name="result"
        renderActions={(item) => (
          <>
            {role === "admin" && (
              <>
                <FormModal table="result" type="update" data={item} />
                <FormModal table="result" type="delete" id={item.id} />
              </>
            )}
          </>
        )}
      />
      <PaginationComponent totalItems={100} itemsPerPage={25} />
    </div>
  );
}
