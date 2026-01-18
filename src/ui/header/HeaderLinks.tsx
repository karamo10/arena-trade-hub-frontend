'use client';

import {
  InboxArrowDownIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      try {
        const parse = JSON.parse(userJson);
        setUserName(parse.name ?? null);
      } catch {
        setUserName(null);
      }
    }
  }, []);

  return (
    <section className="header-link flex items-center justify-between foot h-[40px] px-[100px]">
      <div className="flex items-center gap-2">
        <PhoneArrowDownLeftIcon className="w-5 h-5 text-white" />
        <Link href="tel:+2200002222" className="text-sm font-medium text-white">
          Phone: +220 000 2222677
        </Link>
      </div>

      <div>
        <span className="text-sm font-medium text-white">
          {userName ? `welcome, ${userName}` : ''}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <InboxArrowDownIcon className="w-5 h-5 text-white" />
        <Link
          href="https://mail.google.com/mail/?view=cm&to=example@gmail.com"
          target="blank"
          className="text-sm font-medium text-white"
        >
          sales: arenatradehub@gmail.com
        </Link>
      </div>
    </section>
  );
}
