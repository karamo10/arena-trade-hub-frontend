import Link from 'next/link';
import { logout } from '@/utils/auth';
import {
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import { TbDashboard } from 'react-icons/tb';
import { BsDash } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';
import Image from 'next/image';

export default function AdminSideBar() {
  return (
    <section className="fixed top-13 bottom-0 left-0 w-40 bg-gradient-to-l from-[#004e92] to-[#000428] px-4 py-4">
      {/* header title dashboard */}
       <Link
          href={'/admin'}
          className="bg-white w-full flex items-center space-x-1 text-[#000428] font-medium py-2 px-3 rounded cursor-pointer"
        >
          <MdDashboard className="w-5 h-5" />
          <span>Dashboard</span>
      </Link>  
      {/* header title dashboard */}

      {/* three divs */}
      <div className="w-[100%] h-full flex my-5 flex-col space-y-5">
        <div className="flex-1 bg-white">
          <h1>Hello</h1>
        </div>
        {/*  */}
        <div className="flex-2 bg-white">
          <h1>Hello</h1>
        </div>
        {/*  */}
        <div className="flex-1 bg-white">
          <h1>Hello</h1>
        </div>
      </div>
    </section>
  );
}
