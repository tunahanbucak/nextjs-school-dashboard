import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-indigo-700 to-teal-600">
      <header
        className="relative text-center text-white py-40 px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556742401-1b5e22534edb)",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-6xl font-extrabold relative z-10 text-shadow-md animate__animated animate__fadeIn animate__delay-1s">
          Okul Yönetim Sistemine Hoşgeldiniz
        </h1>
        <p className="text-xl relative z-10 mt-6 max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          Eğitim süreçlerinizi modern ve verimli bir şekilde yönetin.
          Öğrencilerden öğretmenlere, sınav sonuçlarından sınıflara kadar her
          şey burada.
        </p>
      </header>
      <section
        id="admin-area"
        className="py-16 px-4 text-center bg-gradient-to-r from-teal-300 via-green-400 to-yellow-500">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Yönetici Alanına Hoşgeldiniz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard title="Yönetici" color="bg-indigo-600" link="/admin" />
          <FeatureCard title="Öğretmen" color="bg-teal-600" link="/teacher" />
          <FeatureCard title="Öğrenci" color="bg-green-600" link="/student" />
          <FeatureCard title="Veli" color="bg-yellow-600" link="/parents" />
        </div>
      </section>
      <section className="py-16 px-4 text-center bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Okulumuzu Keşfedin
        </h2>
        <p className="text-lg text-white max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-3s">
          Modern okul yönetim sistemi ile tüm okul bileşenlerini kolayca
          yönetebilirsiniz. Öğrenci takibi, öğretmen yönetimi, sınav sonuçları
          ve daha fazlası burada.
        </p>
      </section>
      <footer className="bg-gray-800 py-8 text-center text-white">
        <p>&copy; 2025 Okul Yönetim Sistemi. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

type FeatureCardProps = {
  title: string;
  color: string;
  link: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, color, link }) => {
  return (
    <Link href={link}>
      <Card
        className={`${color} p-8 rounded-xl shadow-xl hover:scale-105 transform transition-all cursor-pointer`}>
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-white text-lg">
          Buraya tıklayarak ilgili alana ulaşın.
        </p>
      </Card>
    </Link>
  );
};

export default Home;
