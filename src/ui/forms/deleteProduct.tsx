'use client';

import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '@/services/api';
import { Product } from '@/types/product-data-types';
import DeleteProductCard from '../productCard/deleteProductCard';
import { toast } from 'react-toastify';
import handleAuthError from '@/lib/handleAuthError';

export default function DeleteProductForm() {
  const [products, setProducts] = useState<Product[]>([]);

  

  async function fetchProducts() {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err: any) {
      toast.error(err.message || 'Error fetching products')
      console.error(err);
    }
  }

  async function handleDelete(id: number) {
    const confirmed = confirm("Are you sure you want to delete this product?")

    if (!confirmed) return;

    const token = localStorage.getItem('token') || '';
    if (!token) {
      toast.error("Unauthorized");
      return;
    }

    try {
      const res = await deleteProduct(id);
      toast.success(res.message);
      fetchProducts(); // refetch after delete
    } catch (err) {
      handleAuthError(err)
      console.error(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {products.map((product) => (
        <div key={product.id}>
          <DeleteProductCard 
            product={product}
            onDelete={() => handleDelete(product.id)}
          />
        </div>
      ))}
    </div>
  );
}
