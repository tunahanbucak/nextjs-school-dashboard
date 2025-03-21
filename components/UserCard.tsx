import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

type UserCardProps = {
  title: string;
  background: string;
};

export default function UserCard({ title, background }: UserCardProps) {
  return (
    <div>
      <Card
        className={`relative ${background} shadow-md rounded-lg flex-1  max-w-xs`}
        style={{
          minWidth: "250px",
        }}
      >
        <CardHeader className="p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-xs bg-white px-2 py-1 rounded-full text-green-600">
              2024/25
            </span>
            <Ellipsis width={20} height={20} className="text-gray-500" />
          </div>
        </CardHeader>
        <CardContent className="p-4 flex ">
          <h1 className="text-3xl font-bold text-gray-800">1,234</h1>
        </CardContent>
        <CardFooter className="p-4 border-t border-gray-200">
          <h2 className="capitalize text-sm font-medium text-gray-600 text-center">
            {title}
          </h2>
        </CardFooter>
      </Card>
    </div>
  );
}
