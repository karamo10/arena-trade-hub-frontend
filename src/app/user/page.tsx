'use client';

import useAuth from '@/hooks/useAuth';
import Profile from '@/ui/users/Profile';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  useAuth();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const parse = JSON.parse(userJson);
        setUserName(parse.name ?? null);
      } catch (err) {
        setUserName(null);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-6 bg-white my-5 px-5 py-10 shadow-2xl rounded-md">
      <div className="bg-white p-6 shadow-lg rounded-md">
        <h1>Hello</h1>
      </div>

      <div className="bg-white p-6 shadow-lg rounded-md">
        <h1>Form section</h1>
      </div>
    </div>
  );
}

{
  /* <div>
          <h5 className="bg-red-200 rounded-2xl">Hello</h5>
        </div>
         <p>Default profile page</p>
      <h1 className="text-center text-xs font-medium mb-4 capitalize">Welcome to your profile {userName ? `${userName}` : ''} </h1>
      <Profile /> */
}
