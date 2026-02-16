import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />
          <section className='flex-1'>
          {children}
          </section>
    </div>
  );
}
