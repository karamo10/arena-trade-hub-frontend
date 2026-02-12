'use client';

import useAuth from '@/hooks/useAuth';
import AdminSideBar from '@/ui/admin/AdminSideBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import { ToastContainer } from 'react-toastify';
import { User } from '@/types/user-type';
import Image from 'next/image';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAuth();
  const [user, setUser] = useState<User | null>(null);
  // const [token, setToken] = useState<String | null>(null);

  useEffect(() => {
    // const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    // setToken(storedToken);
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <>
      <section className="flex bg-neutral-100/50">
        <ToastContainer position="top-center" autoClose={5000} />
        <AdminSideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-1 sm:px-12">
            <h2 className="text-[18px] sm:text-xl font-medium">Admin panel</h2>
            <div className="flex items-center space-x-2 bg-amber-00">
              {/* <UserCircleIcon className="w-5 h-5" /> */}
              <Image
                src={user?.image ?? '/images/avatar.gif'}
                alt={'profile'}
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full"
              />
              <div className="flex flex-col items-start">
                <p className="font-medium text-sm">
                  {user ? `${user.first_name}` : 'Admin'}
                </p>
                <span className="text-xs text-clr-secondary sm:hidden">Admin</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[15px] gap-4 px-4">
            <Link
              href={'/admin/users'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <UserCircleIcon className="w-6 h-6" />
              <p className="font-light">Users</p>
            </Link>
            <Link
              href={'/admin/add-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <PlusCircleIcon className="w-6 h-6" />
              <p className="font-light">Add</p>
            </Link>
            <Link
              href={'/admin/update-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <PencilSquareIcon className="w-6 h-6" />
              <p className="font-light">Update</p>
            </Link>
            <Link
              href={'/admin/delete-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <TrashIcon className="w-6 h-6" />
              <p className="font-light">Delete</p>
            </Link>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
