'use client';

import Link from 'next/link';
import Image from 'next/image';
import { User } from '@/types/user-type';
import { useEffect, useState } from 'react';
import Container from '@/ui/layout/Container';

export default function AdminTopBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  return (
    <section className="shadow-sm">
      <Container>
        <div className="flex items-center justify-between w-full py-2">
            <Link
              href={'/'}
              className=""
            >
              <Image
                src={'/images/logo.jpeg'}
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full"
              />
            </Link>
            <div className="flex items-center space-x-2 bg-amber-00">
              <Image
                src={user?.image ?? '/images/avatar.gif'}
                alt={'profile'}
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full"
              />
              <div className="flex flex-col items-start">
                <p className="font-medium text-sm">
                  {user ? `${user.first_name}` : 'Admin'}
                </p>
                <span className="text-xs text-clr-secondary sm:hidden">
                  Admin
                </span>
              </div>
            </div>
          </div>
      </Container>
    </section>
  );
}
