"use client";

import useAuth from "@/hooks/useAuth";
import Profile from "@/ui/users/Profile";
import { useEffect, useState } from "react";


export default function ProfilePage() {
    useAuth();
    const [userName, setUserName] = useState<string | null>(null);

    useEffect(() => {
        const userJson = localStorage.getItem('user');
        if (userJson) {
            try {
                const parse = JSON.parse(userJson);
                setUserName(parse.name ?? null)
            } catch (err) {
                setUserName(null)
            }
        }
    }, []);

  return (
    <div className="flex flex-col bg-amber-0">
       <p className="warn text-center text-xs">
        ⚠️ This page is under development
      </p>
      <h1 className="text-center text-xs font-medium mb-4 capitalize">Welcome to your profile {userName ? `${userName}` : ''} </h1>
      <Profile />
    </div>
  );
}
