import { Product } from '@/types/product/product';
import {
  FullProfile,
  BasicProfile,
  ProfileReadOnly,
} from '@/types/user/user.profile';
import { User } from '@/types/user/user.modal';
import { Register, Login } from '@/types/user/user.auth';
import { AdminDashboardStats,  } from '@/types/dashboard/dashboard.stats';

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

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    console.log('Backend Error:', data); // for debug
    throw new Error(data?.message || `API error ${res.status}`);
  }
  
  return data;
}

// Header Helper
function getAuthHeaders() {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('Not authenticateded');
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function register(
  payload: Register,
): Promise<{ message: string }> {
  return request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

export async function login(
  payload: Login,
): Promise<{ token: string; user: User }> {
  return request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
}

// If a search query exists filter, If not fetch everything
export async function getProducts(q?: string): Promise<Product[]> {
  const url = q ? `/api/products?q=${q}` : `/api/products`;
  return request(url);
}

// get products by it category
export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  return request(`/api/products?categories=${category}`);
}

// get productBySlug
export async function getProductBySlug(slug: string): Promise<Product> {
  return request(`/api/products/slug/${slug}`);
}

// get productById
export async function getProductById(id: number): Promise<Product> {
  return request(`/api/products/id/${id}`);
}

// add product
// api receives auth
export async function addProduct(
  formData: FormData,
): Promise<{ message: string }> {
  const res = await fetch(`${API_URL}/api/products`, {
    method: 'POST',
    headers: getAuthHeaders(), // API Manage Auth Itself
    body: formData,
  });

  if (!res.ok) {
    const error = new Error('Request faile') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// update product
export async function updateProduct(
  id: number,
  formData: FormData,
): Promise<{ message: string }> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!res.ok) {
    const error = new Error('Request faile') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// delete product
export async function deleteProduct(id: number): Promise<{ message: string }> {
  return request(`/api/products/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
  });
}

// get Users by only Admin
export async function getUsers(q?: string): Promise<User[]> {
  const url = q ? `/api/admin/users?q=${q}` : `/api/admin/users`;
  const res = await fetch(`${API_URL}${url}`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });
  // const res = await fetch(`${API_URL}/api/admin/users`, {
  //   method: 'GET',
  //   headers: getAuthHeaders(),
  // });

  if (!res.ok) {
    const error = new Error('Request failed') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// update User ROLE by only Admin
export async function updateUserRole(
  userId: number,
  role: 'user' | 'admin',
): Promise<{ message: string }> {
  const token = localStorage.getItem('token');
  const res = await fetch(`${API_URL}/api/admin/users/${userId}/role`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ role }),
  });

  if (!res.ok) {
    const error = new Error('Request failed') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// total stats for dashboard
export async function getDashboardStats(): Promise<AdminDashboardStats> {
  const res = await fetch(`${API_URL}/api/admin/dashboard/stats`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const error = new Error('Request fail') as any;
    error.status = res.status;
    throw error;
  }

  const data = await res.json();
  return data.data; // Assuming the API response has a structure like { data: AdminDashboardStats }
}


// getFullProfile by the User
export async function getFullProfile(): Promise<FullProfile> {
  const res = await fetch(`${API_URL}/api/user/profile`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const error = new Error('Request fail') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// getBsicProfile
export async function getBasicProfile(): Promise<BasicProfile> {
  const res = await fetch(`${API_URL}/api/user/profile/basic`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const error = new Error('Request fail') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// getReadOnlyProfile
export async function getReadOnlyProfile(): Promise<ProfileReadOnly> {
  const res = await fetch(`${API_URL}/api/user/profile/readonly`, {
    method: 'GET',
    headers: getAuthHeaders(),
  });

  if (!res.ok) {
    const error = new Error('Request fail') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}

// UpdateProfile
export async function updateProfile(
  formData: FormData,
): Promise<{ message: string }> {
  const res = await fetch(`${API_URL}/api/user/profile/update`, {
    method: 'PATCH',
    headers: getAuthHeaders(),
    body: formData,
  });

  if (!res.ok) {
    const error = new Error('Request fail') as any;
    error.status = res.status;
    throw error;
  }

  return res.json();
}
