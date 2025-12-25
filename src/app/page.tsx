import Hero from "@/ui/hero/hero";
// 
import RiceCategoreis from "@/ui/categoryRices/rice";
import OilsCategoreis from "@/ui/categoryOils/oils";
import GeneralProductsCategoreis from "@/ui/categoryGeneralProduct/generalProducts";
import MayonnaisesCategories from "@/ui/categoryMayyounaise/mayonnaises";
// 
import { Suspense } from "react";
import { RiceSkeleton } from "@/ui/skeleton/skeleton";
import { MayyounaiseSkeleton } from "@/ui/skeleton/skeleton";


export default async function Home() {
  // const mayonnaise = await getProductsByCategory("mayonnaises");
  return (
    <main>
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
