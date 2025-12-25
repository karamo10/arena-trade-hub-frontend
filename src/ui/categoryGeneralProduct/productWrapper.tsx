
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Product } from '@/types/product-data-types';
import ProductCard from '../productCard/productCard';

export default function Wrapper({ generals }: { generals: Product[] }) {
  return (
    <Swiper
     slidesPerView={2}
      spaceBetween={5}
      loop={false}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      navigation={true}
      pagination={false}
      breakpoints={{
        769: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      modules={[Autoplay, Navigation]}
      className="w-full"
    >
      {generals.map((g) => (
        <SwiperSlide key={g.id} className="px-0 sm:px-1">
          <ProductCard product={g} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
