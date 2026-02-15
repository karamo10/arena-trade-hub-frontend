'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useAuth(requiredRole?: string) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    const user = userStr ? JSON.parse(userStr) : null;

    if (!token || !user) {
      router.replace('/login');
      return;
    }

    if (requiredRole && user.role !== requiredRole) {
      router.replace('/login');
      return;
    }

    setLoading(false);
  }, [router, requiredRole]);
  return { loading };
}
