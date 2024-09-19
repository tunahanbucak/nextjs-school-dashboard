"use client";

import React, { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function EventCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="bg-white p-4 rounded-md ">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}
