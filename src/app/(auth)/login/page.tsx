'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { login } from '@/services/api';
import Link from 'next/link';
import PasswordInput from '@/ui/inputs/PasswordInput';
import {toast} from 'react-toastify'
import { AtSymbolIcon } from '@heroicons/react/16/solid';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '@/ui/breadcrumbs/BreadCrumbs';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [userLogging, setUserLogging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLogging(true);

    try {
      const res = await login(form);
      // Saving the token and user to localstorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user))

      if (res.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/user');
      }
    } catch (err) {
      toast.error("Something went wrong.")
      console.error(err);
    }
    // console.log(form);
    setUserLogging(false);
  };

  return (
    <section className="">
      <Breadcrumbs />
      <div className="w-full p-2 py-10">
         <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-[100%] max-w-[500px] max-h-[325px] mx-auto py-8 px-7 bg-white rounded-lg border border-slate-300 form"
      >
          <h2 className="text-center text-lg font-medium">Login to continue</h2>
          
          <div className="relative">
            <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={form.email}
          onChange={handleChange}
          required
          disabled={userLogging}
          className="peer w-full border border-slate-400 bg-white/50 focus:border-indigo-900 in-focus:ring-indigo-900 rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800"
            />
            <AtSymbolIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-indigo-900" />
        </div>
          
        <PasswordInput
          name="password"
          value={form.password}
          onchange={handleChange}
          // disabled={userLogging}
        />
        <button
          type="submit"
          disabled={userLogging}
          className="inline-flex items-center justify-between text-white py-2 px-3 font-medium bg-gradient-to-l from-[#004e92] to-[#000428] w-full hover:opacity-80 rounded cursor-pointer"
        >
            Login
            <ArrowLongRightIcon className="w-5 h-5" />
        </button>
      </form>
      <div className="flex justify-center mt-8">
        <p className="text-[1rem] font-light">
          Don't have an account?{' '}
          <Link href={'/register'} className="font-medium underline text-[#000428] hover:opacity-80">
            Create and account
          </Link>
        </p>
      </div>
      </div>
    </section>
  );
}
