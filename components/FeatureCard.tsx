import Link from 'next/link';
import React from 'react'
import { Card } from './ui/card';

type FeatureCardProps = {
    title: string;
    color: string;
    link: string;
  };

export default function FeatureCard({ title, color, link }: FeatureCardProps)  {
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
  )
}
