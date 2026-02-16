import { Product } from '@/types/product/product';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex items-center flex-col md:flex-row py-1 bg-white rounded relative"
    >
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
        <p className="text-xs md:text-sm font-light capitalize product-card-p">
          {product.name}
        </p>
        <span className="text-xs md:text-sm md:font-semibold mt-1 product-card-p">
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
    </Link>
  );
}
