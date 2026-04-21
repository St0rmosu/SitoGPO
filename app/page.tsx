'use client';

import HeroSection from '@/components/HeroSection';
import ChiSiamo from '@/components/ChiSiamo';
import Logistica from '@/components/Logistica';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Logistica />
      <ChiSiamo />
      <Footer />
    </>
  );
}