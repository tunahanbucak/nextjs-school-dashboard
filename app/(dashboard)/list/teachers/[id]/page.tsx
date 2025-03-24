"use client";

import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const stats = [
  { title: "90%", label: "Katılım", icon: "/singleAttendance.png" },
  { title: "2", label: "Branşlar", icon: "/singleBranch.png" },
  { title: "6", label: "Dersler", icon: "/singleLesson.png" },
  { title: "6", label: "Sınıflar", icon: "/singleClass.png" },
];

export default function SingleTeacherPage() {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      <div className="w-full xl:w-2/3">
        <div className="flex flex-col lg:flex-row gap-4">
          <Card className="bg-lamaSky py-6 px-4 rounded-md flex flex-1 gap-4">
            <CardHeader className="w-1/3 flex-shrink-0">
              <Image
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Profile Picture"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </CardHeader>
            <CardContent className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Burcu Özberk</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "tunahan",
                    email: "tuna@mail.com",
                    password: "password",
                    firstname: "Tunahan",
                    lastname: "Bucak",
                    phone: "055555555555",
                    address: "1234 Main St",
                    bloodType: "A+",
                    dateOfBirth: "2003-21-03",
                    sex: "male",
                  }}
                />
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="2xl:w-1/3 w-full md:w-1/3 flex items-center gap-2 lg:w-full">
                  <Image
                    src="/blood.png"
                    alt="Blood type"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                <div className="2xl:w-1/3 w-full md:w-1/3 flex items-center gap-2 lg:w-full">
                  <Image src="/date.png" alt="Date" width={14} height={14} />
                  <span>Ocak 2025</span>
                </div>
                <div className="2xl:w-1/3 w-full md:w-1/3 flex items-center gap-2 lg:w-full">
                  <Image src="/mail.png" alt="Email" width={14} height={14} />
                  <span>user@gmail.com</span>
                </div>
                <div className="2xl:w-1/3 w-full md:w-1/3 flex items-center gap-2 lg:w-full">
                  <Image src="/phone.png" alt="Phone" width={14} height={14} />
                  <span>+905555555555</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex-1 flex gap-4  justify-between flex-wrap">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] items-center"
              >
                <Image
                  src={stat.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold text-gray-400">
                    {stat.label}
                  </span>
                  <h1 className="text-xl font-semibold">{stat.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1> Öğretmen &apos;in Programı</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Kısayollar</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight ">
              Öğretmen &apos;in Sınıfları
            </Link>
            <Link
              href={`/list/students?teacherId=${"teacher2"}`}
              className="p-3 rounded-md bg-lamaPurpleLight"
            >
              Öğretmen &apos;in Öğrencileri
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaYellowLight">
              Öğretmen &apos;in Dersleri
            </Link>
            <Link href="/" className="p-3 rounded-md bg-pink-50">
              Öğretmen &apos;in Sınavları
            </Link>
            <Link href="/" className="p-3 rounded-md bg-lamaSkyLight">
              Öğretmen &apos;in Ödevleri
            </Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
}
