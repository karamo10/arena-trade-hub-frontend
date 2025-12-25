
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Product } from '@/types/product-data-types';
import ProductCard from '../productCard/productCard';

export default function Wrapper({ mayonnaises }: { mayonnaises: Product[] }) {
  return (
    <Swiper
     slidesPerView={2}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={false}
      pagination={false}
      breakpoints={{
        769: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Autoplay, Navigation]}
      className="w-full"
    >
      {mayonnaises.map((m) => (
        <SwiperSlide key={m.id} className="px-0 sm:px-1">
          <ProductCard product={m} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}