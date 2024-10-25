"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "./ui/pagination";

interface PaginationComponentProps {
  totalItems: number;
  itemsPerPage: number;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalItems,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4 text-gray-500">
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="bg-gray-200 px-4 py-2 rounded shadow disabled:opacity-50 transition-colors duration-200 hover:bg-gray-300">
        Geri{" "}
      </Button>
      <Pagination className="flex items-center my-2 md:my-0">
        <PaginationContent className="flex items-center space-x-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                onClick={() => handlePageClick(index + 1)}
                aria-current={currentPage === index + 1 ? "page" : undefined}
                className={`flex items-center justify-center px-4 py-2 rounded transition-colors duration-200 ${
                  currentPage === index + 1
                    ? "bg-lamaSky text-white"
                    : "hover:bg-gray-200"
                }`}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-gray-200 px-4 py-2 rounded shadow disabled:opacity-50 transition-colors duration-200 hover:bg-gray-300">
        İleri
      </Button>
    </div>
  );
};

export default PaginationComponent;
