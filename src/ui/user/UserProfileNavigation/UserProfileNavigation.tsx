'use client';
import { useEffect, useState } from 'react';
import { getBasicProfile } from '@/services/api';
import { BasicProfile } from '@/types/user/user.profile';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '../../buttons/LogoutButton';
import handleAuthError from '@/lib/handleAuthError';
import { logout } from '@/utils/auth';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export default function UserProfileNavigation() {
  const [profile, setProfile] = useState<BasicProfile | null>(null);
  const [block, setBlock] = useState(false);

  useLockBodyScroll(block);

  useEffect(() => {
    async function fetchBasicProfile() {
      try {
        const res = await getBasicProfile();
        setProfile(res);
      } catch (err) {
        handleAuthError(err);
        console.error(err);
      }
    }
    fetchBasicProfile();
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-amber-00">
      {/* desktop navigation */}
      <div className="hidden lg:block">
        <div className="shadow-xl rounded-xl overflow-hidden ">
          <div className="bg-gradient-to-l from-[#004e92] to-[#000428] flex items-center justify-between p-6">
            <div className="flex items-center space-x-4">
              <Image
                src={profile?.image || '/images/avatar.gif'}
                alt={'profile image'}
                width={100}
                height={100}
                className="block object-cover w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-bold text-white text-lg">
                  {profile?.first_name}
                </h3>
                <p className="text-white/80 text-sm">{profile?.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#05df72] rounded-full"></div>
                <span className="text-white/80 text-sm">Active</span>
              </div>
              <LogoutButton />
               {/* <button onClick={() =>logout()}>logout</button> */}
            </div>
          </div>
          {/* Three Navigation */}
          <nav className="bg-white flex justify-center space-x-4 flex-wrap p-6">
            {/* profile page*/}
            <Link
              href={'/user'}
              className="flex items-center px-4 py-3 space-x-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
            >
              <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              {/*  */}
              <div className="flex flex-col">
                <h4 className="text-clr-primary text-sm font-medium capitalize">
                  profile
                </h4>
                <p className="text-clr-secondary text-xs capitalize">
                  Personal information
                </p>
              </div>
            </Link>
            {/* orders page*/}
            <Link
              href={'/user/orders'}
              className="flex items-center px-4 py-3 space-x-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
            >
              <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              {/*  */}
              <div className="flex flex-col">
                <h4 className="text-clr-primary text-sm font-medium capitalize">
                  Orders
                </h4>
                <p className="text-clr-secondary text-xs capitalize">
                  Track your orders
                </p>
              </div>
            </Link>
            {/* wishlists page*/}
            <Link
              href={'/wishlist'}
              className="flex items-center px-4 py-3 space-x-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
            >
              <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 text-gray-600 group-hover:text-white transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
              {/*  */}
              <div className="flex flex-col">
                <h4 className="text-clr-primary text-sm font-medium capitalize">
                  Wishlist
                </h4>
                <p className="text-clr-secondary text-xs capitalize">
                  Saved items
                </p>
              </div>
            </Link>
          </nav>
        </div>
      </div>

      {/* display bars */}
      <div className="block lg:hidden">
        <div className="bg-white flex justify-between p-4 shadow rounded-lg">
          <div className="flex items-center space-x-3">
            <Image
              src={profile?.image || '/images/avatar.gif'}
              alt={'user avatar'}
              width={30}
              height={30}
              className="object-cover rounded-full"
            />
            <div>
              <h3 className="font-semibold uppercase">{profile?.first_name}</h3>
              <p className="text-sm text-clr-secondary capitalize">
                User dashboard
              </p>
            </div>
          </div>
          {/* click */}
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-clr-primary"
            onClick={() => setBlock(!block)}
          >
            {block ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile navigation */}
      {block && (
        <div className="lg:hidden">
          <div className="bg-purple-0 shadow-xl rounded-xl overflow-hidden">
            <div className="bg-[#004e92] flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <Image
                  src={profile?.image || '/images/avater.png'}
                  alt={'profile image'}
                  width={45}
                  height={45}
                  className="block object-cover rounded-full"
                />
                <div>
                  {/* <h3 className="font-bold text-white text-sm uppercase">
                    {profile?.first_name}
                  </h3> */}
                  <p className="text-white/80 text-xs">{profile?.email}</p>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-[#05df72] rounded-full"></div>
                    <span className="text-white/80 text-xs">Active</span>
                  </div>
                </div>
              </div>
            </div>
            {/* nav */}
            <nav className="bg-white flex flex-col justify-center space-y-4 flex-wrap p-6">
              {/* profile page*/}
              <Link
                href={'/user'}
                className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-gray-600 group-hover:text-white transition-all duration-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  </div>
                  {/*  */}
                  <div className="flex flex-col">
                    <h4 className="text-clr-primary text-sm font-medium capitalize">
                      profile
                    </h4>
                    <p className="text-clr-secondary text-xs capitalize">
                      Personal information
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-[#004e92] transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              {/* orders page*/}
              <Link
                href={'/user/orders'}
                className="flex items-center justify-between px-4 py-3 space-x-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-gray-600 group-hover:text-white transition-all duration-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </div>
                  {/*  */}
                  <div className="flex flex-col">
                    <h4 className="text-clr-primary text-sm font-medium capitalize">
                      Orders
                    </h4>
                    <p className="text-clr-secondary text-xs capitalize">
                      Track your orders
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-[#3b9c3c] transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              {/* wishlist page*/}
              <Link
                href={'/wishlist'}
                className="flex items-center justify-between px-4 py-3 space-x-3 border border-gray-200 rounded-lg hover:border-[#004e92] transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 p-1 rounded-lg group-hover:bg-[#004e92] transition-all duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-gray-600 group-hover:text-white transition-all duration-300"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </div>
                  {/*  */}
                  <div className="flex flex-col">
                    <h4 className="text-clr-primary text-sm font-medium capitalize">
                      Wishlist
                    </h4>
                    <p className="text-clr-secondary text-xs capitalize">
                      Saved items
                    </p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 text-[#004e92] transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </nav>
            {/* sign out */}
            <div className=" p-3 border-t border-t-gray-200">
              <button className="w-full inline-flex items-center justify-start gap-3 text-[#e7000b] text-sm hover:bg-[#e7000c0c] transition-all duration-300 p-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-4 stroke-[2.5]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                    onClick={() => logout()}
                  />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
