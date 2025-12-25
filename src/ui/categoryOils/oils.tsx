import Oils from './oilsAsync';
import { RiceSkeleton } from '../skeleton/skeleton';
import { Suspense } from 'react';

export default function OilsCategoreis() {
  return (
    <section className=" py-5 px-5 md:px-[100px]">
      <h2 className="text-sm font-medium mb-3">Cooking Oils</h2>
      <Suspense fallback={<RiceSkeleton />}>
        <Oils />
      </Suspense>
    </section>
  );
}
