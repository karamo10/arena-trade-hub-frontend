'use client';

// localStorage only runs on the client, It will break in server component, cuz server comp runs on node.js server
// so this line of code  const token = localStorage.getItem('token'); from the API helper runs only on client component, it will throw and error(ReferenceError: localStorage is not defined.) when run on server componenet.
// Any function that touches localStorage() CANNOT be used in Sever Cmponent.

import { useEffect, useState } from 'react';
import { getUsers, updateUserRole } from '@/services/api';
import { User } from '@/types/user-type';
import { toast } from 'react-toastify';
import handleAuthError from '@/lib/handleAuthError';
import UsersTable from '@/ui/admin/UsersTable/UsersTable';
import Card from '@/ui/admin/Card/Card';

export default function UsersPage() {
  // const users = await getUsers();
  // We can't get users like this cuz we need to make the component server with async whic causes error
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const us = users.slice(0, 6);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    fetchUsers();
  }, [setCurrentUser]);

  async function fetchUsers() {
    try {
      const res = await getUsers();
      setUsers(res);
    } catch (err) {
      console.log('Error fetching users:', err);
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
    <section className="min-h-screen bg-amber-00">
      <div className="bg-red-00 p-6 space-y-5 padding">
        <div>
          <h2 className="font-bold text-3xl mb-2">User Management</h2>
          <p className="text-sm font-medium">
            Manage users and their account permissions
          </p>
        </div>
        <Card />
        <UsersTable />
      </div>
    </section>
  );
}

{
  /* <div className="flex flex-col gap-4 py-4">
        {us.map((user) => (
          <div
            key={user.id}
            className="w-[90%] mx-auto flex flex-col items-center justify-between md:flex-row lg:flex-row bg-white p-1 md:p-4 lg:p-4 shadow-sm rounded-lg"
          >
            <p className="font-medium">{user.first_name}</p>
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
      </div> */
}
