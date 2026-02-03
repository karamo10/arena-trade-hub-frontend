'use client';

import Container from '../layout/Container';
import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/types/user-type';
import { logout } from '@/utils/auth';

export default function HeaderMain() {
  const token = localStorage.getItem('token');

  const storedUser = localStorage.getItem('user');
  const user: User | null = storedUser ? JSON.parse(storedUser) : null;

  return (
    <div className="w-full bg-white py-3 lg:py-4 border-b border-b-[#e5e7eb]">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo*/}
          <Link href={'/'}>
            <Image
              src={'/images/logo.jpeg'}
              alt="logo"
              width={100}
              height={100}
              className="object-cover w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
            />
          </Link>
          {/* search button: max-w-2xl*/}
          <div className="flex-1 bg-amber-00 mx-4 lg:mx-20">
            <button
              className="group flex items-center gap-3 w-full bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-[#004e92] rounded-lg px-3 py-2 transition-all duration-200 min-w-[200px] md:min-w-60"
              aria-label="Open search (Ctrl+K)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-gray-400 group-hover:text-[#004e92] transition-colors duration-200"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span className="sm:text-xs md:text-md text-clr-secondary font-light group-hover:text-gray-700 transition-colors duration-200 flex-1 text-left">
                Search{' '}
                <span className="hidden md:inline-block">products...</span>{' '}
              </span>
              <div
                className="flex items-center gap-1 bg-white border text-xs text-clr-secondary font-light border-gray-200 group-hover:border-gray-300 px-2
              py-1 rounded font-mono shrink-0 transition-colors duration-200"
              >
                <span>Ctrl</span>
                <span>K</span>
              </div>
            </button>
          </div>
          {/* login/register & user avarter */}
          <div className="bg-amber-0 p-2">
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 bg-white">
              {/* cart */}
              <Link href={'/cart'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6  hover:text-[#004e92] transition-colors duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </Link>
              {/* wishlist */}
              <Link href={'/wishlist'}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-6 hover:text-[#004e92] transition-colors duration-200"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </Link>
              {/* logout */}
              <button onClick={() =>logout()}>logout</button>
              {/* login & register & avater div */}
              <div>
                {!token ? (
                  <div className="flex items-center space-x-2">
                    <Link
                      href={'/login'}
                      className="bg-transparent hover:bg-[#0f192d] hover:text-white px-3 py-1.5 border border-[#0f192d] rounded text-sm font-semibold text-[#0f192d] transition-colors duration-300"
                    >
                      Login
                    </Link>
                    <Link
                      href={'/register'}
                      className="bg-[#0f192d] hover:bg-transparent hover:text-[#0f192d] px-3 py-1.5 border border-[#0f192d] rounded text-sm font-semibold text-white transition-colors duration-300"
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="group flex items-center space-x-2 border px-3 py-2 rounded-xl border-[#004e92] bg-blue-200/20 cursor-pointer transition-colors duration-200">
                    <div className="relative">
                      <Image
                        src={user?.image || '/images/avater.png'}
                        alt={'avater'}
                        width={100}
                        height={100}
                        className="w-9 h-9 border-2 border-[#004e92] rounded-full ring-2 ring-white shadow-sm transition-colors duration-200"
                      />
                      {/* active icon */}
                      <div className="w-3 h-3 bg-green-500 rounded-full p-1 absolute bottom-0 -right-0.5 border-2 border-white shadow-white ring ring-green-100"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#004e92] transition-colors duration-200 capitalize">
                        {user?.first_name}
                      </span>
                      <span className="text-xs font-light">My Account</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
