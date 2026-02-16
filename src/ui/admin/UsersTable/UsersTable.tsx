'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { User } from '@/types/user/user.modal';
import { getUsers } from '@/services/api';
import handleAuthError from '@/lib/handleAuthError';
// import ProductSearchInput from '@/ui/inputs/SearchInput';

// props: { searchParams?: Promise<{ q?: string }> }
export default function UsersTable({ searchQuery }: { searchQuery?: string }) {
  // const searchParams = await props.searchParams;
  // const users = await getUsers(searchParams?.q)
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const res = await getUsers(searchQuery);
      setUsers(res);
    } catch (err) {
      console.log('Error:', err);
      handleAuthError(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [searchQuery]);

  return (
    <table className="w-full rounded-lg overflow-hidden">
      <thead className="bg-[#f8fafc] rounded-lg border border-[#e2e8f0]">
        <tr className="">
          <th className="text-left uppercase text-xs px-4 py-6 font-medium">
            Name
          </th>
          <th className="text-left uppercase text-xs px-4 py-6 font-medium">
            Email
          </th>
          <th className="text-left uppercase text-xs px-4 py-6 font-medium">
            Role
          </th>
          <th className="text-left uppercase text-xs px-4 py-6 font-medium">
            Status
          </th>
          <th className="text-left uppercase text-xs px-4 py-6 font-medium">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="rounded-lg border border-[#e2e8f0]">
        {users.map((user) => (
          <tr
            key={user.id}
            className="rounded-lg hover:bg-[#f8fafc] border border-[#e2e8f0]"
          >
            <td className="text-left px-4 py-6">
              <div className="flex items-center space-x-2">
                <Image
                  src={user?.image ?? '/images/avatar.gif'}
                  alt="profile avater"
                  width={100}
                  height={100}
                  className="object-cover w-7 h-7 rounded-full"
                />
                <span className="uppercase text-sm text-gray-800 font-medium">
                  {user.first_name}
                </span>
              </div>
            </td>
            <td className="text-left text-sm text-clr-secondary px-4 py-3 font-medium lowercase">
              <span>{user.email}</span>
            </td>

            <td className="text-left text-sm px-4 py-3 font-medium">
              <div
                className={`inline-flex items-center gap-1 capitalize px-2 py-0.5 rounded ${user.role === 'admin' ? 'bg-[#dbeafe] text-[#2143b0]' : 'bg-[#f1f5f9] text-clr-secondary'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                <span>{user.role}</span>
              </div>
            </td>

            <td className="text-left text-sm capitalize px-4 py-3 font-medium">
              <span className="bg-[#dcfce7] text-[#166534] px-2 py-0.5 rounded text-sm">
                active
              </span>
            </td>
            <td className="text-left text-sm px-4 py-3 font-medium">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
