import React, { useState } from 'react';
import AdminDashboardHeader from './AdminDashboardHeader/AdminDashboardHeader';
import AdminDashboardSideBar from './AdminDashboardSideBar/AdminDashboardSideBar';

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
    <div className="min-h-screen background-100">
      <AdminDashboardSideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <AdminDashboardHeader toggleSidebar={toggleSidebar} />
      <main className="pt-16 lg:ml-64 p-6">{children}</main>
    </div>
  );
}
