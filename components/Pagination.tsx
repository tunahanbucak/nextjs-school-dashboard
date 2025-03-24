"use client";

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <Button
        variant="outline"
        size="sm"
        disabled={!hasPrev}
        onClick={() => changePage(page - 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Geri
      </Button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from(
          { length: Math.ceil(count / ITEM_PER_PAGE) },
          (_, index) => {
            const pageIndex = index + 1;
            return (
              <Button
                key={pageIndex}
                variant={page === pageIndex ? "default" : "outline"}
                size="sm"
                onClick={() => changePage(pageIndex)}
                className={`px-2 rounded-sm ${
                  page === pageIndex ? "bg-lamaSky" : ""
                }`}
              >
                {pageIndex}
              </Button>
            );
          }
        )}
      </div>
      <Button
        variant="outline"
        size="sm"
        disabled={!hasNext}
        onClick={() => changePage(page + 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        İleri
      </Button>
    </div>
  );
};

export default Pagination;
