import { Product } from '@/types/product-data-types';
import { User } from '@/types/user-types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// console.log("API_URL:", API_URL);

async function request(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API error ${res.status} ${res.statusText}`);
  }
  return res.json();
}

// Header Helper
function getAuthHeaders() {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Not authenticateded");
  }

  return {
     Authorization: `Bearer ${token}`,
  }
}



export async function register(name: string, email: string, password: string) {
  return request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
}

export async function login(
  email: string,
  password: string
): Promise<{ token: string; user: User }> {
  return request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}


export async function getProducts(q?: string): Promise<Product[]> {
  const url = q ? `/products?q=${q}` : `/products`;
  return request(url);
}
// If a search query exists filter, If not fetch everything

// get products by it category
export async function getProductsByCategory(
  category: string
): Promise<Product[]> {
  return request(`/products?categories=${category}`);
}

// get productBySlug
export async function getProductBySlug(slug: string): Promise<Product> {
  return request(`/products/slug/${slug}`);
}

// get productById
export async function getProductById(id: number): Promise<Product> {
    return request(`/products/id/${id}`);
}



// add product
// API always receives auth
// export async function addProduct(formData: FormData, token: string)
export async function addProduct(formData: FormData): Promise<{message: string}> {
  const res = await fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: getAuthHeaders(), // API Manage Auth Itself
    body: formData,
  });

  if (!res.ok) {
    const error = new Error("Request faile") as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// update product
export async function updateProduct(id: number, formData: FormData): Promise<{message: string}> {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: formData,
  });

   if (!res.ok) {
    const error = new Error("Request faile") as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// delete product
export async function deleteProduct(
  id: number
): Promise<{ message: string }> {
  return request(`/products/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
}



// get Users by only Admin
export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const error = new Error('Request failed') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// update User ROLE by only Admin
export async function updateUserRole(userId: number, role: 'user' | 'admin'): Promise<{ message: string }> {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_URL}/users/${userId}/role`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
       Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ role }),
  });

   if (!res.ok) {
    const error = new Error("Request faile") as any;
    error.status = res.status;
    throw error;
  }
  
  return res.json();
}


// getUserProfile
