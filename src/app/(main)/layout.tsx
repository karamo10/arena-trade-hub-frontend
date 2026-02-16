import React from 'react';
import Header from '@/ui/header/Header';
import Footer from '@/ui/footer/Footer';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
          <Header />
          <section className='flex-1'>
          {children}
          </section>
          <Footer />
    </div>
  );
}
