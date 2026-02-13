'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register } from '@/services/api';
import PasswordInput from '@/ui/inputs/PasswordInput';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { AtSymbolIcon, UserCircleIcon, ArrowLongRightIcon } from '@heroicons/react/16/solid';
import handleAuthError from '@/lib/handleAuthError';
// import Breadcrumbs from '@/ui/breadcrumbs/BreadCrumbs';


export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', password: '' });
  const [creatingUser, setCreatingUser] = useState(false);
  // const [erroMessage, setErroMessage] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingUser(true);

    try {
      const response = await register(form);
      // console.log('Registered', response);
      router.push('/login');
    } catch (err:any) {
      console.log('FULL ERROR:', err);  
      console.log("SERVER RESPONSE:", err.response);
      handleAuthError(err)
      // setErroMessage(true);
      toast.error('Registration Failed');
      console.error(err);
    }
    setCreatingUser(false);
  };

  return (
    <div className="login-page flex justify-center items-center flex-col w-full min-h-[100vh] bg-gradient-to-l from-[#004e92] to-[#000428]">
      {/* <Breadcrumbs /> */}
      <div className="w-full px-2 py-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[100%] max-w-[500px] min-h-[300px] mx-auto py-8 px-7 bg-white rounded-lg border border-slate-300 form"
        >
          <h2 className="text-center text-2xl font-medium capitalize">Create account</h2>

          <div className="relative">
            <input
              type="text"
              name="first_name"
              placeholder="Fisrt Name"
              value={form.first_name}
              onChange={handleChange}
              disabled={creatingUser}
              required
              className="peer w-full border border-slate-400 bg-white/50 focus:border-[#000428] focus:ring-[#000428] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800"
            />
            <UserCircleIcon className="absolute w-5 h-5 top-3 left-3.5 peer-focus:text-[#000428]" />
          </div>
          <div className="relative">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={form.last_name}
              onChange={handleChange}
              disabled={creatingUser}
              required
              className="peer w-full border border-slate-400 bg-white/50 focus:border-[#000428] focus:ring-[#000428] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800"
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
            disabled={creatingUser}
            required
            className="peer w-full border border-slate-400 bg-white/50 focus:border-[#000428] focus:ring-[#000428] rounded px-11 py-2 outline-none placeholder:text-sm placeholder:text-slate-800"
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
            disabled={creatingUser}
            className="flex items-center justify-between text-white font-semibold px-3 py-2 bg-gradient-to-l from-[#004e92] to-[#000428] hover:opacity-80 rounded cursor-pointer"
          >
            Register
            <ArrowLongRightIcon className="w-5 h-5" />
          </button>

          {/* <div className="flex items-center gap-1">
            {erroMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{"Something went wrong!"}</p>
            </>
          )}
          </div> */}
           <div className="flex justify-center ">
          <p className="text-[1rem] font-light">
            Already have and account?{' '}
            <Link href={'/login'} className="font-medium underline text-[#000428] hover:opacity-80">
              Login here
            </Link>
          </p>
        </div>
        </form>
        {/* <div className="flex justify-center mt-8">
          <p className="text-[1rem] font-light">
            Already have and account?{' '}
            <Link href={'/login'} className="font-medium underline text-[#000428] hover:opacity-80">
              Login here
            </Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
