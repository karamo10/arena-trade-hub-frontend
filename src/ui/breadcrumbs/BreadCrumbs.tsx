'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Container from '../layout/Container';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <section className="w-full bg-gradient-to-l from-[#004e92] to-[#000428]">
      <Container>
      <nav aria-label="Breadcrumb" className="breadcrumb">
        <ol>
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          {segments.map((segemnt, index) => {
            const href = '/' + segments.slice(0, index + 1).join('/');
            const isLast = index === segemnt.length - 1;

            const label =
              segemnt.charAt(0).toUpperCase() +
              segemnt.slice(1).replace(/-/g, '');

            return (
              <li key={href}>
                {isLast ? (
                  <span aria-label="page">{label}</span>
                ) : (
                  <Link href={href}>{label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </Container>
    </section>
    
  );
}
