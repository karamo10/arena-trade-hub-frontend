'use client';

import { FormEvent, useState } from 'react';
import { addProduct } from '@/services/api';
import Image from 'next/image';
import { toast } from 'react-toastify';
import handleAuthError from '@/lib/handleAuthError';

export default function AddProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [categories, setCategories] = useState('');
  const [description, setDescription] = useState('');
  const [instock, setInstock] = useState(true);
  const [image, setImage] = useState<File | null>(null);
  const [adding, setAdding] = useState(false);

  // const token = localStorage.getItem('token') || '';

  // console.log(token);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setAdding(true);

    const fd = new FormData();
    fd.append('name', name);
    fd.append('price', price);
    fd.append('categories', categories || 'general');
    fd.append('description', description);
    fd.append('instock', String(instock));

    if (image) {
      fd.append('image', image);
    }

    try {
      // API always receives auth
      //  const res = await addProduct(fd, token);
      const res = await addProduct(fd);
      toast.success(res.message);

      setName('');
      setPrice('');
      setCategories('');
      setDescription('');
      setInstock(true);
      setImage(null);
    } catch (err) {
      handleAuthError(err);
      console.error(err);
    }
    setAdding(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-[100%] max-w-[400px] min-h-[300px] mx-auto py-8 px-7 bg-white rounded-lg form shadow-2xl"
    >
      <h2 className="text-center text-2xl font-medium">Add Product</h2>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        className="w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-3 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        step={'0.01'}
        className="w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-3 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-3 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500"
      >
        <option value="">Select a Category</option>
        <option value="oil">oil</option>
        <option value="rice">rice</option>
        <option value="general">general</option>
        <option value="mayonnaises">mayonnaises</option>
      </select>

      <textarea
        placeholder="Add product description"
        value={description}
        className="w-full border-2 border-slate-500 bg-white/50 focus:border-[#004e92] focus:ring-[#004e92] rounded px-3 py-2 outline-none placeholder:text-sm placeholder:text-slate-800 transition-all duration-500 h-20"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        id="imageUpload"
        // className="hidden"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={instock}
          onChange={(e) => setInstock(e.target.checked)}
        />
        <span className="font-medium">In-Stock</span>
      </div>

      {/* <div className="flex flex-col mb-4 bg-red-100 p-2 rounded">
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
          // className="hidden"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <div className="w-full border border-slate-300 focus:border-indigo-500 in-focus:ring-indigo-500 rounded-lg p-2">
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
      </div> */}

      <button
        type="submit"
        disabled={adding}
        className="flex items-center justify-between text-white font-semibold px-3 py-2 bg-gradient-to-l from-[#004e92] to-[#000428] hover:opacity-90 rounded transition-all duration-500 cursor-pointer"
      >
        <span>Add</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </form>
  );
}
