'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { login } from '@/services/api';
import Link from 'next/link';
import PasswordInput from '@/ui/inputs/passwordInput';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [userLogging, setUserLogging] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUserLogging(true);

    try {
      const res = await login(form.email, form.password);
      // Saving the token and user to localstorage
      localStorage.setItem('token', res.token);
      localStorage.setItem('user', JSON.stringify(res.user))

      if (res.user.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/profile');
      }
      // router.push('/')
    } catch (err: any) {
      console.error(err);
      setError('Invalid Credentials');
    }
    // console.log(form);
    setUserLogging(false);
  };

  return (
    <section className="p-6 items-center justify-center">
      <h2 className="text-xl font-semibold text-center mb-[1.5rem]">
        Admin Login
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-80 mx-auto py-4 px-4 bg-blue-950/95 rounded"
      >
        <input
          type="email"
          name="email"
          placeholder="you@gmail.com"
          value={form.email}
          onChange={handleChange}
          required
          disabled={userLogging}
          className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        />
        <PasswordInput
          name="password"
          value={form.password}
          onchange={handleChange}
          // disabled={userLogging}
        />
        <button
          type="submit"
          disabled={userLogging}
          className="bg-blue-700 w-full text-white px-4 py-2 font-medium rounded hover:bg-blue-800 cursor-pointer transition-all"
        >
          Login
        </button>
        {error && <p className="error text-sm mt-2">{error}</p>}
      </form>
      <div className="flex items-center justify-center mt-4">
        <p className="text-[1rem]">
          don't have an account?{' '}
          <Link href={'/register'} className="text-orange-500">
            Register{' '}
          </Link>
          now
        </p>
      </div>
    </section>
  );
}
