import Rices from './riceAsync';
import { RiceSkeleton } from '../skeleton/skeleton';
import { Suspense } from 'react';

export default function RiceCategoreis() {
  return (
    <section className=" py-5 px-5 md:px-[100px]">
      <h2 className="text-sm font-medium mb-3">Rices</h2>
      <Suspense fallback={<RiceSkeleton />}>
        <Rices />
      </Suspense>
    </section>
  );
}
