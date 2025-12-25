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
      className="max-w-96 mx-auto py-4 px-4 bg-white rounded shadow-lg"
    >
      <h2 className="text-xl font-semibold text-center mb-[1.5rem]">
        Add Product
      </h2>

      <input
        type="text"
        placeholder="Product name"
        value={name}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <select
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
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
        className="p-2 w-full mb-4 rounded bg-white outline outline-blue-950/95"
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
        disabled={adding}
        className="bg-blue-900 w-full text-white px-4 py-2 font-medium rounded hover:bg-blue-800 cursor-pointer transition-all"
      >
        Add
      </button>
    </form>
  );
}
