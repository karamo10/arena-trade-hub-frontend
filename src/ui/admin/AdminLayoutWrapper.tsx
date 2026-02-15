import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import AdminSideBar from './AdminSideBar';

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-[#fff] text-[#101828]">
      <AdminSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <AdminHeader toggleSidebar={toggleSidebar} />
      <main className="pt-16 lg:ml-64 p-6">{children}</main>
    </div>
  );
}
