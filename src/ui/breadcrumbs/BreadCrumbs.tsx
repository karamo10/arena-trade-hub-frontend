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
            <li className='flex'>
              <Link href={'/'}>
                <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="rgba(255, 255, 255, 1.00)" d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z"/></svg>
              </Link>
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
