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
import { Eye, Trash2 } from "lucide-react";
import Link from "next/link";

const ITEMS_PER_PAGE = 10;

type TableProps = {
  data?: any[];
  IDName?: string;
  lessonName?: string;
  className?: string;
  number?: string;
  address?: string;
  role?: string;
};

export default function TableComponent({
  data = [],
  IDName,
  lessonName,
  className,
  number,
  address,
  role = "user",
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden md:table-cell">Info</TableHead>
            <TableHead className="hidden md:table-cell">{IDName}</TableHead>
            <TableHead className="hidden md:table-cell">{lessonName}</TableHead>
            <TableHead className="hidden md:table-cell">{className}</TableHead>
            <TableHead className="hidden md:table-cell">{number}</TableHead>
            <TableHead className="hidden md:table-cell">{address}</TableHead>
            <TableHead className="hidden md:table-cell">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item) => (
            <TableRow key={item.id} className="hover:bg-gray-100">
              <TableCell>
                <div className="gap-4 flex items-center">
                  <Avatar className="w-10 h-10 md:hidden rounded-full object-cover xl:block">
                    <AvatarImage src={item.photo} alt="User Profile" />
                  </Avatar>
                  <div>
                    <h1 className="font-extrabold text-sm sm:text-base">
                      {item.name}
                    </h1>
                    <h3 className="font-medium text-xs sm:text-sm">
                      {item.email}
                    </h3>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.teacherId || item.studentId || item.parentId}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.subjects?.join(", ") || item.grade || item.role}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.classes?.join(", ") || item.className}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.phone}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {item.address}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Link href={`/list/${role}/${item.id}`}>
                    <Button className="flex items-center justify-center rounded-full bg-lamaSky p-2 hover:bg-lamaSky">
                      <Eye width={16} height={16} />
                    </Button>
                  </Link>
                  {role === "admin" && (
                    <Button className="flex items-center justify-center rounded-full bg-lamaPurple p-2 hover:bg-lamaPurple">
                      <Trash2 width={16} height={16} />
                    </Button>
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
