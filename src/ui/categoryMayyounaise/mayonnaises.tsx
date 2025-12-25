import Mayonnaises from './mayonnaisesAsync';
import { RiceSkeleton } from '../skeleton/skeleton';
import { Suspense } from 'react';

export default function MayonnaisesCategories() {
  return (
    <section className=" py-5 px-5 md:px-[100px]">
      <h2 className="text-sm font-medium mb-3">Mayonnaises</h2>
      <Suspense fallback={<RiceSkeleton />}>
        <Mayonnaises />
      </Suspense>
    </section>
  );
}