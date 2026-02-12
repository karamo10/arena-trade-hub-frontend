import React from 'react';
import Header from '@/ui/Header/Header';
import Footer from '@/ui/footer/Footer';
// import NavLinks from '@/ui/Header/NavLinks';

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
