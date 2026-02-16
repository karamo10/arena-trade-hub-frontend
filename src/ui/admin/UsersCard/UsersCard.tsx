'use client';

import handleAuthError from '@/lib/handleAuthError';
import { getDashboardStats } from '@/services/api';
import { AdminDashboardStats } from '@/types/dashboard/dashboard.stats';
import { useEffect, useState } from 'react';

export default function UsersCard() {
  const [stats, setStats] = useState<AdminDashboardStats | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getDashboardStats();
        setStats(res);
      } catch (err) {
        handleAuthError(err);
        console.error(err);
      }
    };

    fetchStats();
    // refresh every 24 hrs
    const interval = setInterval(() => {
      fetchStats();
    }, 24 * 60 * 60 * 1000); 

    // cleanup when component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5">
      <div className="card flex items-center justify-between p-6 rounded-lg bg-white shadow-2xs border border-[#e2e8f0]">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Total users</p>
          <span className="font-bold text-2xl">{stats?.totalUsers}</span>
        </div>
        <div className="bg-gray-200/30 p-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-8 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>
      </div>
      <div className="card flex items-center justify-between p-6 rounded-lg bg-white shadow-2xs border border-[#e2e8f0]">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Active</p>
          <span className="font-bold text-2xl">15</span>
        </div>
        <div className="bg-[#dcfce7] p-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-8 text-[#166534]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>
      </div>
      <div className="card flex items-center justify-between p-6 rounded-lg bg-white shadow-2xs border border-[#e2e8f0]">
        <div className="flex flex-col gap-2">
          <p className="text-sm">Admin</p>
          <span className="font-bold text-2xl">{stats?.totalAdmins}</span>
        </div>
        <div className="bg-[#dbeafe] p-3 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className="size-8 text-[#2143b0]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
