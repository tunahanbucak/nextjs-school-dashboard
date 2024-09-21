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
    GELİR: 4000,
    GİDER: 2400,
  },
  {
    name: "Şubat",
    GELİR: 3000,
    GİDER: 1398,
  },
  {
    name: "Mart",
    GELİR: 2000,
    GİDER: 9800,
  },
  {
    name: "Nisan",
    GELİR: 2780,
    GİDER: 3908,
  },
  {
    name: "Mayıs",
    GELİR: 1890,
    GİDER: 4800,
  },
  {
    name: "Haziran",
    GELİR: 2390,
    GİDER: 4500,
  },
  {
    name: "Temmuz",
    GELİR: 3490,
    GİDER: 1200,
  },
  {
    name: "Ağustos",
    GELİR: 3490,
    GİDER: 7800,
  },
  {
    name: "Eylül",
    GELİR: 8500,
    GİDER: 1300,
  },
  {
    name: "Ekim",
    GELİR: 5600,
    GİDER: 4300,
  },
  {
    name: "Kasım",
    GELİR: 3490,
    GİDER: 9840,
  },
  {
    name: "Aralık",
    GELİR: 4860,
    GİDER: 1230,
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
            dataKey="GELİR"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="GİDER"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
