import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoTiktok } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import Link from 'next/link';

export default function Footer() {
  return (
    <section className="px-5 md:px-[100px] bg-blue-950 py-[1rem]">
     <div className="flex items-center justify-center gap-6">
        <Link href={'/'}>
          <FaFacebookSquare className="w-5 h-5 text-white hover:text-white/85 transition-all" />
        </Link>
        <Link href={'/'}>
          <IoLogoTiktok className="w-5 h-5 text-white hover:text-white/85 transition-all" />
        </Link>
        <Link href={'/'}>
          <FiInstagram className="w-5 h-5 text-white hover:text-white/85 transition-all" />
        </Link>
      </div>
       <p className="footer-text text-xs sm:text-sm font-medium text-center text-white/90 mt-3">© 2025 Arena Trade Hub Logistics & Supplies
      </p>
    </section>
  );
}
