import Container from '../layout/Container';
import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav className="w-full bg-white p-2 lg:py-3">
      <Container>
        <div className="flex items-center space-x-7 text-sm font-semibold text-[#6b7280]">
          <Link
            href={'/'}
            className="text-[#004e92] border-b-2 border-b-[#004e92]"
          >
            Home
          </Link>
          <Link
            href={'/shop'}
            className="border-transparent hover:text-[#004e92] border-b-2 hover:border-b-[#004e92] transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href={'/collection'}
            className="border-transparent hover:text-[#004e92] border-b-2 hover:border-b-[#004e92] transition-colors duration-200"
          >
            Collection
          </Link>
          <Link
            href={'/contact'}
            className="border-transparent hover:text-[#004e92] border-b-2 hover:border-b-[#004e92] transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </Container>
    </nav>
  );
}
