import React from "react";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

export default function pagination() {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      {/* <Button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Önceki
      </Button>
      <div className="flex items-center gap-2 text-sm">
        <Button variant='ghost' className="px-2 rounded-sm bg-lamaSky">1</Button>
        <Button className="px-2 rounded-sm">2</Button>
        <Button className="px-2 rounded-sm">3</Button>
        ...
        <Button className="px-2 rounded-sm">10</Button>
      </div>
      <Button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </Button> */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
            <PaginationLink href="#">2</PaginationLink>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
