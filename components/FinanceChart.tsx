"use client";
import { Ellipsis } from "lucide-react";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Ocak",
    Gelir: 4000,
    Gider: 2400,
  },
  {
    name: "Şubat",
    Gelir: 3000,
    Gider: 1398,
  },
  {
    name: "Mart",
    Gelir: 2000,
    Gider: 9800,
  },
  {
    name: "Nisan",
    Gelir: 2780,
    Gider: 3908,
  },
  {
    name: "Mayıs",
    Gelir: 1890,
    Gider: 4800,
  },
  {
    name: "Haziran",
    Gelir: 2390,
    Gider: 4500,
  },
  {
    name: "Temmuz",
    Gelir: 3490,
    Gider: 1200,
  },
  {
    name: "Ağustos",
    Gelir: 3490,
    Gider: 7800,
  },
  {
    name: "Eylül",
    Gelir: 8500,
    Gider: 1300,
  },
  {
    name: "Ekim",
    Gelir: 5600,
    Gider: 4300,
  },
  {
    name: "Kasım",
    Gelir: 3490,
    Gider: 9840,
  },
  {
    name: "Aralık",
    Gelir: 4860,
    Gider: 1230,
  },
];

export default function FinanceChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Finans</h1>
        <Ellipsis width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="Gelir"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="Gider"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
