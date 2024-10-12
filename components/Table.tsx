import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { teachersData } from "@/lib/data";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Eye, Trash2 } from "lucide-react";

export default function TeacherTable() {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px] text-left">Info</TableHead>
            <TableHead className="hidden md:table-cell">Teacher ID</TableHead>
            <TableHead className="hidden md:table-cell">Lessons</TableHead>
            <TableHead className="hidden md:table-cell">Classes</TableHead>
            <TableHead className="hidden md:table-cell">Phone</TableHead>
            <TableHead className="hidden md:table-cell">Address</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachersData.map((teacher) => (
            <TableRow key={teacher.id} className="hover:bg-gray-100">
              <TableCell>
                <div className="gap-3 flex items-center ">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={teacher.photo} alt="User Profile" />
                  </Avatar>
                  <div>
                    <h1 className="font-extrabold text-sm sm:text-base">
                      {teacher.name}
                    </h1>
                    <h3 className="font-medium text-xs sm:text-sm">
                      {teacher.email}
                    </h3>
                  </div>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {teacher.teacherId}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {teacher.subjects.join(", ")}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {teacher.classes.join(", ")}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {teacher.phone}
              </TableCell>
              <TableCell className="hidden md:table-cell text-xs sm:text-sm">
                {teacher.address}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Button className="flex items-center justify-center rounded-full bg-lamaSky p-2 hover:bg-lamaSky">
                    <Eye width={14} height={14} />
                  </Button>
                  <Button className="flex items-center justify-center rounded-full bg-lamaPurple p-2 hover:bg-lamaPurple">
                    <Trash2 width={14} height={14} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
