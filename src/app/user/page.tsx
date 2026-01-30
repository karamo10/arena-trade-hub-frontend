'use client';

import handleAuthError from '@/lib/handleAuthError';
import { getReadOnlyProfile } from '@/services/api';
import { ProfileReadOnly } from '@/types/user-profile-type';
import { useEffect, useState } from 'react';
import { EditProfile } from '@/ui/users/EditProfile';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

export default function ProfilePage() {
  const [profile, setProfile] = useState<ProfileReadOnly | null>(null);
  const [open, setOPen] = useState<boolean>(false);

  useLockBodyScroll(open);

  useEffect(() => {
    async function fetchReadOnlyProfile() {
      try {
        const res = await getReadOnlyProfile();
        setProfile(res);
      } catch (err) {
        handleAuthError(err);
        console.error(err);
      }
    }
    fetchReadOnlyProfile();
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-white my-7 px-5 py-10 shadow-xl rounded-xl">
      {/* first child */}
      <div className="flex items-center justify-evenly bg-purple-00 p-6 shadow-lg rounded-lg">
        {/* member since */}
        <div className="flex items-center space-x-3 hidden">
          <div className="p-2 bg-blue-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-blue-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Member Since</p>
            <p className="font-medium">1/18/2026</p>
          </div>
        </div>
        {/* account status */}
        <div className="flex items-center space-x-3 hidden">
          <div className="p-2 bg-pink-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-pink-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500">Account Status</p>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 border-[#3b9c3c] ">
              <p className="text-xs text-[#3b9c3c] font-medium text-center">
                Active
              </p>
            </div>
          </div>
        </div>
        {/* edit profile btn */}
        <div
          className="bg-black inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg whitespace-nowrap hover:opacity-85 transition-all duration-300 cursor-pointer"
          onClick={() => setOPen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>

          <span className="text-white text-xs cursor-pointer">
            Edit Profile
          </span>
        </div>
      </div>

      {/* form div*/}
      <div className="shadow-lg rounded-md">
        <form className="bg-red-00 rounded-lg shadow-lg">
          <div className="p-6 flex flex-col space-y-1.5">
            <div className="font-semibold flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 text-gray-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <span className="text-sm">Personal Information</span>
            </div>
          </div>

          <div className="p-6 pt-0 space-y-4 bg-red-00">
            <div className="space-y-3">
              {/* first name */}
              <div>
                <label
                  htmlFor="firstname"
                  className="text-sm font-medium text-clr-secondary"
                >
                  First Name
                </label>
                <p className="text-clr-primary text-sm font-medium bg-gray-50 px-3 py-2 rounded-md cursor-not-allowed capitalize break-words">
                  {profile?.first_name || 'John'}
                </p>
                <p className="text-xs text-gray-400 mt-1">Read-only</p>
              </div>
              {/* last name */}
              <div>
                <label
                  htmlFor="lastname"
                  className="text-sm font-medium text-clr-secondary"
                >
                  Last Name
                </label>
                <p className="text-clr-primary text-sm font-medium  bg-gray-50 px-3 py-2 rounded-md cursor-not-allowed capitalize break-words">
                  {profile?.last_name || 'Not provided'}
                </p>
                <p className="text-xs text-gray-400 mt-1">Read-only</p>
              </div>
              {/* email */}
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-clr-secondary"
                >
                  Email
                </label>
                <p className="text-clr-primary text-sm font-medium bg-gray-50 px-3 py-2 rounded-md cursor-not-allowed lowercase">
                  {profile?.email}
                </p>
                <p className="text-xs text-gray-400 mt-1">Read-only</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      {open && <EditProfile onClose={() => setOPen(false)} />}
    </div>
  );
}
