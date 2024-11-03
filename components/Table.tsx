"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Trash2, Pencil, Eye } from "lucide-react";
import Link from "next/link";
import { role } from "@/lib/data";

const ITEMS_PER_PAGE = 10;

type TableProps = {
  data?: any[];
  IDName?: string;
  lessonName?: string;
  className?: string;
  number?: string;
  address?: string;
  name?: string;
  info?: string;
  renderActions?: (item: any) => JSX.Element;
};

export default function TableComponent({
  data = [],
  IDName,
  lessonName,
  className,
  number,
  address,
  name,
  info,
  renderActions,
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">{info}</TableHead>
            <TableHead className="hidden md:table-cell font-bold">
              {IDName}
            </TableHead>
            <TableHead className="hidden md:table-cell font-bold">
              {lessonName}
            </TableHead>
            <TableHead className="hidden md:table-cell font-bold">
              {className}
            </TableHead>
            <TableHead className="hidden md:table-cell font-bold">
              {number}
            </TableHead>
            <TableHead className="hidden md:table-cell font-bold">
              {address}
            </TableHead>
            <TableHead className=" font-bold">Hareketler</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-100">
              <TableCell>
                <div className="gap-4 flex items-center">
                  {(name === "teachers" || name === "students") && (
                    <Avatar className="w-10 h-10 md:hidden rounded-full object-cover xl:block">
                      <AvatarImage src={item.photo} alt="User Profile" />
                    </Avatar>
                  )}
                  <div>
                    <h1 className="font-extrabold text-sm sm:text-base">
                      {item.name}
                    </h1>
                    {name === "students" ? (
                      <h3 className="font-medium text-xs sm:text-sm">
                        {item.class}
                      </h3>
                    ) : (
                      <h3 className="font-medium text-xs sm:text-sm">
                        {item.email ||
                          item.lessonName ||
                          item.classname ||
                          item.subject ||
                          item.title}
                      </h3>
                    )}
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm p-2">
                {item.teacherId ||
                  item.studentId ||
                  item.students ||
                  item.capacity ||
                  item.class}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm p-4">
                {item.subjects?.join(", ") ||
                  item.grade ||
                  item.teachers?.join(",") ||
                  item.teacher ||
                  item.startTime}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.classes?.join(", ") ||
                  item.className ||
                  item.supervisor ||
                  item.student ||
                  item.endTime}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.phone || item.score}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.address || item.date || item.dueDate}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 sm:gap-4">
                  {renderActions ? (
                    renderActions(item)
                  ) : (
                    <>
                      <Link href={`/list/${name}/${item.id}`}>
                        <Button className="flex items-center justify-center rounded-full bg-lamaSky p-2 hover:bg-lamaSky">
                          {name === "teachers" || name === "students" ? (
                            <Eye width={16} height={16} />
                          ) : (
                            <Pencil width={16} height={16} />
                          )}
                        </Button>
                      </Link>
                      {role === "admin" && (
                        <Button className="flex items-center justify-center rounded-full bg-lamaPurple p-2 hover:bg-lamaPurple">
                          <Trash2 width={16} height={16} />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
