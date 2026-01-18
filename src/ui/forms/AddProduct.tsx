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
      toast.success(res.message)
      
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
      className="flex flex-col gap-5 w-[100%] max-w-[500px] max-h-[450px] mx-auto py-7 px-6 bg-white shadow-lg rounded-lg border border-slate-300 form"
    >
      <h2 className="text-lg font-medium text-center">
        Add Product
      </h2>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        className="w-full border border-slate-300 focus:border-indigo-500 in-focus:ring-indigo-500 rounded-lg p-2"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        className="w-full border border-slate-300 focus:border-indigo-500 in-focus:ring-indigo-500 rounded-lg p-2"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full border border-slate-300 focus:border-indigo-500 in-focus:ring-indigo-500 rounded-lg p-2"
      >
        <option value="">Select a Category</option>
        <option value="oil">oil</option>
        <option value="rice">rice</option>
        <option value="general">general</option>
        <option value="mayonnaises">mayonnaises</option>
      </select>

      <textarea
        placeholder="Description"
        value={description}
        className="w-full border border-slate-300 focus:border-indigo-500 in-focus:ring-indigo-500 rounded-lg p-2"
        onChange={(e) => setDescription(e.target.value)}
      />

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
      </div>

      <button
        type="submit"
        disabled={adding}
        className="bg-blue-900 w-full text-white px-4 py-2 font-medium rounded hover:bg-blue-800 cursor-pointer transition-all"
      >
        Add
      </button>
    </form>
  );
}
