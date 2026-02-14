'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register } from '@/services/api';
import PasswordInput from '@/ui/inputs/PasswordInput';
import Link from 'next/link';
import { toast } from 'react-toastify';
import {
  AtSymbolIcon,
  UserCircleIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/16/solid';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabled(true);

    try {
      const response = await register(form);
      router.push('/login');
    } catch (err: any) {
      console.log('Error:', err);
      toast.error(err.message || 'Something went wrong.');
    }
    setDisabled(false);
  };

  return (
    <div className="login-page flex justify-center items-center flex-col w-full min-h-[100vh] bg-gradient-to-l from-[#004e92] to-[#000428]">
      <div className="w-full px-5 sm:px-0">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[100%] max-w-[400px] min-h-[300px] mx-auto py-8 px-7 bg-white rounded-lg border border-slate-300 form"
        >
          <h2 className="text-center text-2xl font-medium">Create Account</h2>

          <div className="relative">
            <input
              type="text"
              name="first_name"
              placeholder="Fisrt name"
              value={form.first_name}
              onChange={handleChange}
              disabled={disabled}
              required
              className="peer w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
            />
            <UserCircleIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-[#000428]" />
          </div>

          <div className="relative">
            <input
              type="text"
              name="last_name"
              placeholder="Last name"
              value={form.last_name}
              onChange={handleChange}
              disabled={disabled}
              required
              className="peer w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
            />
            <UserCircleIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-[#000428]" />
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={handleChange}
              disabled={disabled}
              required
              className="peer w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
            />
            <AtSymbolIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-[#000428]" />
          </div>

          <div className="relative">
            <PasswordInput
              name="password"
              value={form.password}
              onchange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={disabled}
            className="flex items-center justify-between text-white font-semibold px-3 py-2 bg-gradient-to-l from-[#004e92] to-[#000428] hover:opacity-90 rounded transition-all duration-500 cursor-pointer"
          >
            Register
            <ArrowLongRightIcon className="w-5 h-5" />
          </button>

          <div className="flex justify-center ">
            <p className="text-[1rem] font-light">
              Already have and account?{' '}
              <Link
                href={'/login'}
                className="font-medium underline text-[#000428] hover:opacity-80"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
