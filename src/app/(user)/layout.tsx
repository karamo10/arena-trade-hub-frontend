import React from 'react';
import { ToastContainer } from 'react-toastify';
import Breadcrumbs from '@/ui/breadcrumbs/BreadCrumbs';
import Footer from '@/ui/footer/Footer';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f1f5f9]">
      <ToastContainer position="top-right" autoClose={2000} />
          <Breadcrumbs />
          <section className='flex-1'>
          {children}
          </section>
          <Footer />
    </div>
  );
}