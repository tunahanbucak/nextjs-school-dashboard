"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, {
      message: "Kullanıcı adı en az 3 karakter uzunluğunda olmalıdır!",
    })
    .max(20, {
      message: "Kullanıcı adı en fazla 20 karakter uzunluğunda olmalıdır!",
    }),
  email: z.string().email({ message: "Geçersiz e-posta adresi!" }),
  password: z
    .string()
    .min(8, { message: "Şifre en az 8 karakter uzunluğunda olmalıdır!" }),
  firstname: z.string().min(1, { message: "İsim zorunlu" }),
  lastname: z.string().min(1, { message: "Soyisim zorunlu" }),
  phone: z.string().min(1, { message: "Telefon numarası zorunlu" }),
  address: z.string().min(1, { message: "Adres zorunlu" }),
  bloodType: z.string().min(1, { message: "Kan grubu zorunlu" }),
  birthday: z.date({ message: "Doğum tarihi zorunlu" }),
  gender: z.enum(["male", "female"], { message: "Cinsiyet zorunlu" }),
  img: z.instanceof(File, { message: "Fotoğraf zorunlu" }),
});

type Inputs = z.infer<typeof schema>;

export default function StudentForm({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold ">Yeni bir öğrenci oluşturun</h1>
      <span className="text-xs text0gray-400 font-medium">
        Kimlik Doğrulama Bilgileri
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Kullancı adı"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="E-posta"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
          type="email"
        />
        <InputField
          label="Şifre"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
          type="password"
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Kişisel Bilgiler
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="İsim"
          name="firstname"
          defaultValue={data?.firstname}
          register={register}
          error={errors.firstname}
        />
        <InputField
          label="Soyisim"
          name="lastname"
          defaultValue={data?.lastname}
          register={register}
          error={errors.lastname}
        />
        <InputField
          label="Telefon numarası"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Adres"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Kan grubu"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />

        <InputField
          label="Doğum tarihi"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Cinsiyet</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("gender")}
            defaultValue={data?.gender}>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
          </select>
          {errors.gender?.message && (
            <p className="text-xs text-red-400">
              {errors.gender.message.toString()}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img">
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Fotoğraf yükle</span>
          </label>
          <input id="img" type="file" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
            </p>
          )}
        </div>
      </div>
      <Button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "update"}
      </Button>
    </form>
  );
}
