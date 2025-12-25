'use client';

import { Product } from '@/types/product-data-types';
import { TrashIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

export default function DeleteProductCard({
  product,
  onDelete,
}: {
  product: Product;
  onDelete: () => void;
}) {
  return (
    <div className="flex items-center flex-col md:flex-row py-1 shadow-sm rounded relative">
      <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded">
        <Image
          src={product.image_url}
          alt={product.name}
          fill
          quality={100}
          className="object-cover rounded"
        />
      </div>
      <div className="text-center px-2">
        <p className="text-xs md:text-sm font-light capitalize">
          {product.name}
        </p>
        <span className="text-xs md:text-sm md:font-semibold mt-1">
          GMD{product.price}
        </span>
      </div>
      <span
        className={`text-[10px] md:text-xs font-semibold absolute top-0 right-1 ${
          product.instock ? '' : 'text-red-500'
        } `}
      >
        {product.instock ? '' : '*out of stock'}
      </span>
      <TrashIcon onClick={onDelete} className="w-6 h-6 absolute top-0 cursor-pointer text-red-400 hover:text-red-500" />
    </div>
  );
}
