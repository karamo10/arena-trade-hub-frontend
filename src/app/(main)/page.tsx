import Hero from "@/ui/hero/Hero";
import RiceCategoreis from "@/ui/categoryRices/Rice";
import OilsCategoreis from "@/ui/categoryOils/Oils";
import GeneralProductsCategoreis from "@/ui/categoryGeneralProduct/GeneralProducts";
import MayonnaisesCategories from "@/ui/categoryMayyounaise/Mayonnaises";
import { Suspense } from "react";
import { RiceSkeleton } from "@/ui/skeleton/Skeleton";
import { MayyounaiseSkeleton } from "@/ui/skeleton/Skeleton";


export default async function Home() {
  return (
    <main className="bg">
      <Hero />
      <Suspense fallback={<RiceSkeleton/>}>
        <RiceCategoreis />
      </Suspense>
      <Suspense fallback={<RiceSkeleton/>}>
        <OilsCategoreis />
      </Suspense>
      <Suspense fallback={<RiceSkeleton/>}>
        <GeneralProductsCategoreis />
      </Suspense>
      <Suspense fallback={<MayyounaiseSkeleton/>}>
        <MayonnaisesCategories />
      </Suspense>
   </main>
  );
}
