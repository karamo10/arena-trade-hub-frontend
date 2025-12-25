'use client';

// localStorage only runs on the client, It will break in server component, cuz server comp runs on node.js server
// so this line of code  const token = localStorage.getItem('token'); from the API helper runs only on client component, it will throw and error(ReferenceError: localStorage is not defined.) when run on server componenet.
// Any function that touches localStorage() CANNOT be used in Sever Cmponent.

import { useEffect, useState } from 'react';
import { getUsers, updateUserRole } from '@/services/api';
import { User } from '@/types/user-types';
import { toast } from 'react-toastify';
import handleAuthError from '@/lib/handleAuthError';

export default function UsersPage() {
  // const users = await getUsers();
  // We can't get users like this cuz we need to make the component server with async whic causes error
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }
  }

  async function handleRoleToggle(targetUser: User) {
    if (!currentUser) {
      toast.error('Not authenticated');
      return;
    }
    if (currentUser.id === targetUser.id) {
      toast.error("You can't change your own role");
      return;
    }

    // console.log('targetUser:', targetUser);

    const newRole = targetUser.role === 'admin' ? 'user' : 'admin';
    try {
      const res = await updateUserRole(targetUser.id, newRole);
      toast.success(res.message);
      fetchUsers();
    } catch (err: any) {
      toast.error(err.message || 'Error updating role');
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section className="min-h-screen">
      <h2 className="text-center font-medium">Users Page</h2>
      <div className="flex flex-col gap-4 py-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="w-[90%] mx-auto flex flex-col items-center justify-between md:flex-row lg:flex-row bg-white p-1 md:p-4 lg:p-4 shadow-sm rounded-lg"
          >
            <p className="font-medium">{user.name}</p>
            <p className="font-light">{user.email}</p>
            <p>{user.role}</p>
            <button
              onClick={() => handleRoleToggle(user)}
              className={`text-sm px-2 py-1 rounded hover:bg-indigo-950/15 ${
                user.role === 'admin'
                  ? 'bg-indigo-950/95 text-white font-medium'
                  : 'bg-indigo-950/15 text-white'
              } cursor-pointer`}
            >
              {user.role === 'admin' ? 'Remove Admin' : 'Make Admin'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
