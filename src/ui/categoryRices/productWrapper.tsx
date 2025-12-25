'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Product } from '@/types/product-data-types';
import ProductCard from '../productCard/productCard';

export default function Wrapper({ rices }: { rices: Product[] }) {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={5}
      loop={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      breakpoints={{
        769: { slidesPerView: 3, navigation: true },
        1024: { slidesPerView: 4, navigation: true},
      }}
      modules={[Autoplay, Navigation]}
      className=""
    >
      {rices.map((r) => (
        <SwiperSlide key={r.id} className="px-0 sm:px-1">
          <ProductCard product={r} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
