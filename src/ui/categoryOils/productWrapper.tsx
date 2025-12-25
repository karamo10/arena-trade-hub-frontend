'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Product } from '@/types/product-data-types';
import ProductCard from '../productCard/productCard';

export default function Wrapper({ oils }: { oils: Product[] }) {
  return (
    <Swiper
     slidesPerView={2}
      spaceBetween={5}
      loop={false}
      autoplay={{
        delay: 8000,
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
      {oils.map((o) => (
        <SwiperSlide key={o.id} className="px-0 sm:px-1">
          <ProductCard product={o} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
