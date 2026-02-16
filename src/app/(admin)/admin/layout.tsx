'use client';

import useAuth from '@/hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import AdminLayoutWrapper from '@/ui/admin/AdminLayoutWrapper';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const {loading} = useAuth('admin');

  if(loading) return null

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} />
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </>
  );
}
