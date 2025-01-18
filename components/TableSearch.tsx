import { Search } from "lucide-react";
import React from "react";

export default function TableSearch() {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
      <Search width={14} height={14} className="text-gray-500" />
      <input
        type="text"
        placeholder="Arama..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </div>
  );
}
