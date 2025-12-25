'use client';
import Image from 'next/image';
import NavLinks from './navLinks';
import Link from 'next/link';
import {
  ShoppingBagIcon,
  Bars4Icon,
  PhoneArrowDownLeftIcon,
  InboxArrowDownIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="flex items-center justify-between px-5 md:px-[100px] h-[70px]">
        <Link href={'/'}>
          {' '}
          <Image
            src={'/images/logo.jpeg'}
            alt={'Logo image'}
            width={50}
            height={50}
            className="object-cover w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
          />
        </Link>
        {/* <div className="hidden md:block">
          <NavLinks />
        </div> */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-8">
            <Link href={'/login'} className="font-medium">
              Login
            </Link>
            <Link href={'/register'} className="font-medium">
              Register
            </Link>
            <Link href={'/cart'}>
              <ShoppingBagIcon className="w-8 font-bold" />
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <Bars4Icon
            onClick={() => setOpenMenu(!openMenu)}
            className="w-6 h-6 text-blue-950 cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`md:hidden px-5 py-2 transition-all duration-300 ease-in-out shadow-sm ${
          openMenu ? 'max-h-[250px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <NavLinks />
        <div className="flex flex-col items-start gap-3 text-sm mt-3">
          <div className=" flex items-center gap-2">
            <PhoneArrowDownLeftIcon className="w-5 h-5 icon" />
            <Link
              href="tel:+2200002222"
              className="text-sm font-medium nav-text"
            >
              Phone: +220 000 2222
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <InboxArrowDownIcon className="w-5 h-5 icon" />
            <Link
              href="https://mail.google.com/mail/?view=cm&to=example@gmail.com"
              target="blank"
              className="text-sm font-medium nav-text"
            >
              sales: arenatradehub@gmail.com
            </Link>
          </div>
        </div>
        <div className="mt-3">
          <Link href={'/cart'}>
            <ShoppingBagIcon className="w-6 h-6 font-bold iocn" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
