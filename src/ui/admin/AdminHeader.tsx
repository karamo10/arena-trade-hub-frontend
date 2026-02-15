'use client';

import { User } from "@/types/user-type";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function AdminHeader({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
  }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);
  return (
    <header className="fixed top-0 right-0 left-0 lg:left-64
        h-16 bg-white
        border-b border-gray-300
        flex items-center justify-between z-30 px-4 padding">
      {/* mobile menu btn */}
      <svg
        onClick={toggleSidebar}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className="size-5 lg:hidden cursor-pointer "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <span className="font-semibold hidden sm:block">Admin</span>
      <div>
        <div className="flex items-center space-x-2 bg-amber-00">
          <div className="relative cursor-pointer"> 
            <Image
                src={user?.image ?? '/images/avatar.gif'}
                alt={'profile'}
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full"
              />
            <div className="w-3 h-3 bg-green-500 rounded-full p-1 absolute bottom-0 -right-0.5 border-2 border-white shadow-white ring ring-green-100"></div>
          </div>
              
              <div className="flex flex-col items-start">
                <span className="font-semibold">
                  {user ? `${user.first_name}` : 'Admin'}
                </span>
              </div>
            </div>
      </div>
    </header>
  );
}
