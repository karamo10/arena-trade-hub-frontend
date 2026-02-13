import React from 'react';
import Footer from '@/ui/footer/Footer';
// import NavLinks from '@/ui/Header/NavLinks';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
          {/* <NavLinks /> */}
          <section className='flex-1'>
          {children}
          </section>
          {/* <Footer /> */}
    </div>
  );
}
