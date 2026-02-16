import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
          <section className='flex-1'>
          {children}
          </section>
    </div>
  );
}
