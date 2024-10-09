"use client";

import { Ellipsis } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Button } from "./ui/button";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    descripton: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    descripton: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    descripton: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  const getBorderColor = (id: number) => {
    return id % 2 === 0 ? "border-t-lamaPurple" : "border-t-lamaSky";
  };

  return (
    <div className=" bg-white p-4 rounded-md ">
      <Calendar onChange={onChange} value={value} locale="tr" />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4 ">Etkinlikler</h1>
        <Button variant="ghost" size="icon">
          <Ellipsis width={20} height={20} />
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className={`p-5 rounded-md border-2 border-gray-100 border-t-4 ${getBorderColor(
              event.id
            )}`}
            key={event.id}>
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600"> {event.title} </h1>
              <span className="text-gray-300 text-xs"> {event.time} </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm"> {event.descripton}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
