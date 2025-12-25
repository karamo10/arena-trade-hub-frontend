import GeneralProducts from './generalProductAsync';
import { RiceSkeleton } from '../skeleton/skeleton';
import { Suspense } from 'react';

export default function GeneralProductsCategoreis() {
  return (
    <section className=" py-5 px-5 md:px-[100px]">
      <h2 className="text-sm font-medium mb-3">General Products</h2>
      <Suspense fallback={<RiceSkeleton />}>
        <GeneralProducts />
      </Suspense>
    </section>
  );
}