"use client";

import { Ellipsis } from "lucide-react";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Pazartesi",
    Mevcut: 60,
    Eksik: 40,
  },
  {
    name: "Salı",
    Mevcut: 70,
    Eksik: 60,
  },
  {
    name: "Çarşamba",
    Mevcut: 90,
    Eksik: 75,
  },
  {
    name: "Perşembe",
    Mevcut: 90,
    Eksik: 75,
  },
  {
    name: "Cuma",
    Mevcut: 65,
    Eksik: 55,
  },
];

export default function AttendanceChart() {
  return (
    <div className="bg-white rounded-lg  h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Katılım</h1>
        <Ellipsis width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="Mevcut"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="Eksik"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
