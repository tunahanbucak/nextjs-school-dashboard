"use client";

import Table from "@/components/Table";
import FormModal from "@/components/FormModal";
import { resultsData, role } from "@/lib/data";

export default function ResultsTable() {
  const renderActions = (item: any) => (
    <>
      {role === "admin" && (
        <>
          <FormModal table="result" type="update" data={item} />
          <FormModal table="result" type="delete" id={item.id} />
        </>
      )}
    </>
  );

  return (
    <Table
      info="Dersler"
      data={resultsData}
      IDName="Sınıf"
      lessonName="Öğretmen"
      className="Öğrenci"
      number="Puan"
      address="Tarih"
      name="result"
      renderActions={renderActions}
    />
  );
}
