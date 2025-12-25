'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { register } from '@/services/api';
import PasswordInput from '@/ui/inputs/passwordInput';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreatingUser(true);

    try {
      const response = await register(form.name, form.email, form.password);
      // console.log('Registered', response);
      router.push('/login');
    } catch (err: any) {
      console.error(err);
      setError('Registration Failed');
    }
    setCreatingUser(false);
  };

  return (
    <div className="p-6 items-center justify-center">
      <h2 className="text-xl font-semibold text-center mb-[1.5rem]">
        Admin Register
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-80 mx-auto py-4 px-4 bg-blue-950/95 rounded"
      >
        <h6 className="mb-4 text-lg text-white font-medium">Admin Login</h6>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={form.name}
          onChange={handleChange}
          disabled={creatingUser}
          required
          className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        />
        <input
          type="email"
          name="email"
          placeholder="you@gmail.com"
          value={form.email}
          onChange={handleChange}
          disabled={creatingUser}
          required
          className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        />
        <PasswordInput
          name="password"
          value={form.password}
          onchange={handleChange}
        />
        <button
          type="submit"
          disabled={creatingUser}
          className="bg-blue-700 w-full text-white px-4 py-2 font-medium rounded hover:bg-blue-800 cursor-pointer transition-all"
        >
          Register
        </button>
        {error && <p className="error text-sm mt-2">{error}</p>}
      </form>
    </div>
  );
}
