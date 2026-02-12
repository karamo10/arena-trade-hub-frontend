import React from 'react';
import Footer from '@/ui/footer/Footer';
// import NavLinks from '@/ui/Header/NavLinks';
import Breadcrumbs from '@/ui/breadcrumbs/BreadCrumbs';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
          <Breadcrumbs />
          <section className='flex-1'>
          {children}
          </section>
          <Footer />
    </div>
  );
}
