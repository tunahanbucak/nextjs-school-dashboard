import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-600 via-gray-400 to-gray-700 text-white">
      <header
        className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1556742401-1b5e22534edb)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative text-center px-6 animate-fade-in">
          <h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg">
            Okul Yönetim Sistemine Hoşgeldiniz
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Eğitim süreçlerinizi modern ve verimli bir şekilde yönetin.
            Öğrencilerden öğretmenlere, sınav sonuçlarından sınıflara kadar her
            şey burada.
          </p>
          <Button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-lg font-medium shadow-xl rounded-full transform transition duration-300 hover:scale-105">
            Başlayın
          </Button>
        </div>
      </header>
      <section className="py-24 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 animate-fade-up">
            Sistemimizi Keşfedin
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto animate-fade-up delay-150">
            Modern okul yönetim sistemi ile tüm okul bileşenlerini kolayca
            yönetebilirsiniz. Öğrenci takibi, öğretmen yönetimi, sınav sonuçları
            ve daha fazlası burada.
          </p>
        </div>
      </section>
      <section
        id="admin-area"
        className="py-24 text-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-12 animate-fade-up">
            Yönetici Alanına Hoşgeldiniz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard title="Yönetici" color="bg-indigo-500" link="/admin" />
            <FeatureCard title="Öğretmen" color="bg-teal-500" link="/teacher" />
            <FeatureCard title="Öğrenci" color="bg-green-500" link="/student" />
            <FeatureCard title="Veli" color="bg-yellow-500" link="/parents" />
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="text-lg">
          &copy; 2025 Okul Yönetim Sistemi. Tüm Hakları Saklıdır.
        </p>
      </footer>
    </div>
  );
};

export default Home;
