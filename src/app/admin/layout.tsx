'use client';

import useAuth from '@/hooks/useAuth';
import AdminSideBar from '@/ui/admin/AdminSideBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PencilSquareIcon, PlusCircleIcon, TrashIcon, UserCircleIcon } from '@heroicons/react/16/solid';
import { ToastContainer } from 'react-toastify';
import { User } from '@/types/user-type';
import Image from 'next/image';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const parse = JSON.parse(userJson);
        setUser(parse?.image ?? null);
      } catch {
        setUser(null);
      }
      console.log(userJson);
    }
  }, []);


  return (
    <>
      <section className="flex bg-neutral-100/50">
        <ToastContainer position="top-center" autoClose={5000}/>
        <AdminSideBar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-1 sm:px-12">
            <h2 className="text-[18px] sm:text-xl font-medium">
              Admin panel
            </h2>
            <div className="flex items-center flex-col">
              {/* <UserCircleIcon className="w-5 h-5" /> */}
              <p className="font-medium">{user ? `Welcome, ${user}` : 'Admins'}</p>
              <Image src={user?.image ?? '/images/avater.png'} alt={'profile'} width={35} height={35} />
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
