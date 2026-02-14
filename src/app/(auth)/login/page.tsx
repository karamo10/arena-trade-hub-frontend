'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { login } from '@/services/api';
import Link from 'next/link';
import PasswordInput from '@/ui/inputs/PasswordInput';
import { toast } from 'react-toastify';
import { AtSymbolIcon } from '@heroicons/react/16/solid';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [disabled, setDisabled] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const res = await login(form);
      // Saving the token and user to localstorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user));

      if (res.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/user');
      }
    } catch (err: any) {
      console.log('Error:', err);
      toast.error(err.message || 'Something went wrong.');
    }
    setDisabled(false);
  };

  // flex flex-col gap-6 w-[100%] max-w-[500px] max-h-[325px] mx-auto py-8 px-7 bg-white rounded-lg border border-slate-300 form
  return (
    <section className="flex justify-center items-center flex-col w-full min-h-screen bg-gradient-to-l from-[#004e92] to-[#000428]">
      <div className="w-full px-5 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[100%] max-w-[400px] min-h-[300px] mx-auto py-8 px-7 bg-white rounded-lg border border-slate-300 form"
        >
          <h2 className="text-center text-2xl font-medium">
            Login to Continue
          </h2>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              required
              disabled={disabled}
              className="peer w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
            />
            <AtSymbolIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-[#000428]" />
          </div>

          <PasswordInput
            name="password"
            value={form.password}
            onchange={handleChange}
            disabled={disabled}
          />

          <button
            type="submit"
            disabled={disabled}
            className="flex items-center justify-between text-white font-semibold px-3 py-2 bg-gradient-to-l from-[#004e92] to-[#000428] hover:opacity-90 rounded transition-all duration-500 cursor-pointer"
          >
            Login
            <ArrowLongRightIcon className="w-5 h-5" />
          </button>
          <div className="flex justify-center">
            <p className="text-[1rem] font-light">
              Don't have an account?{' '}
              <Link
                href={'/register'}
                className="font-medium underline text-[#000428] hover:opacity-80"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
