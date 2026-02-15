import Image from 'next/image';
import { useState, useEffect } from 'react';
import { User } from '@/types/user-type';
import { getUsers } from '@/services/api';
import handleAuthError from '@/lib/handleAuthError';

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (err) {
      console.log('Error:', err);
      handleAuthError(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <table className="bg-amber-0 w-[90%] mx-auto rounded-lg">
      <thead className="bg-blue-200/50">
        <tr className="border border-gray-700">
          <th className="text-left uppercase text-xs px-4 py-3 font-medium">
            Name
          </th>
          <th className="text-left uppercase text-xs px-4 py-3 font-medium">
            Email
          </th>
          <th className="text-left uppercase text-xs px-4 py-3 font-medium">
            Role
          </th>
          <th className="text-left uppercase text-xs px-4 py-3 font-medium">
            Status
          </th>
          <th className="text-left uppercase text-xs px-4 py-3 font-medium">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-blue-500/75 rounded-lg">
        {users.map((user) => (
          <tr key={user.id} className="border border-gray-700">
            <td className="text-left px-4 py-3">
              <div className="flex items-center space-x-2">
                <Image
                  src={user?.image ?? '/images/avatar.gif'}
                  alt="profile avater"
                  width={100}
                  height={100}
                  className="object-cover w-7 h-7 rounded-full"
                />
                <span className="uppercase text-sm font-medium">
                  {user.first_name}
                </span>
              </div>
            </td>
            <td className="text-left text-sm px-4 py-3 font-medium lowercase">
              <span>{user.email}</span>
            </td>

            <td className="text-left text-sm px-4 py-3 font-medium">
              <div className="inline-flex items-center gap-1 capitalize px-2 py-0.5 bg-blue-700/50 rounded">
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
              <span className="text-green-500 bg-[#14532d7a] px-2 py-0.5 rounded text-sm">
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
