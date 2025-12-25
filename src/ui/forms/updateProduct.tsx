'use client';

import { FormEvent, useState } from 'react';
import { updateProduct } from '@/services/api';
import { Product } from '@/types/product-data-types';
import { toast } from 'react-toastify';
import Image from 'next/image';
import handleAuthError from '@/lib/handleAuthError';
import { useRouter } from 'next/navigation';

type Props = {
  product: Product;
};

export default function UpdateProductForm({ product }: Props) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState<number>(product.price); // the price is a number not string
  const [categories, setCategories] = useState(product.categories);
  const [description, setDescription] = useState(product.description ?? '');
  const [instock, setInstock] = useState<boolean>(product.instock ?? true);
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('name', name);
    fd.append('price', String(price)); // since formData only allows string, file, blob the price is converted tp string but the backend will hanlde the correct types
    fd.append('categories', categories);
    fd.append('description', description);
    fd.append('instock', String(instock));

    if (image) {
      fd.append('image', image);
    }

    try {
      const res = await updateProduct(product.id, fd);
      toast.success(res.message);

      setTimeout(() => {
        router.push('/admin/updateProduct');
        router.refresh();
      }, 2000);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-96 mx-auto py-4 px-4 bg-white rounded shadow-lg"
    >
      <h2 className="text-xl font-semibold text-center mb-[1.5rem]">
        Update product
      </h2>

      <input
        type="text"
        value={name}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setPrice(Number(e.target.value))} // HTML inputs always return strings, so to avoid mismatch the price way converted to number
      />
      <input
        type="text"
        value={categories}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setCategories(e.target.value)}
      />
      <textarea
        value={description}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={instock}
            onChange={(e) => setInstock(e.target.checked)}
          />
          <span className="font-medium">In stock</span>
        </div>
        <input
          type="file"
          accept="image/*"
          id="imageUpload"
          className="hidden"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <div className="flex items-center gap-2 text-[14px] border-1 border-neutral-300 py-1 px-2 rounded-lg">
          <label htmlFor="imageUpload">
            <Image
              alt="icon"
              width={30}
              height={30}
              src={'/images/image.png'}
              className="bg-white rounded-2xl cursor-pointer"
            ></Image>
          </label>
          <p className="font-medium">Upload image</p>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-900 w-full text-white px-4 py-2 font-medium rounded hover:bg-blue-800 cursor-pointer transition-all"
      >
        Update
      </button>
    </form>
  );
}
