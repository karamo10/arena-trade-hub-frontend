'use client';

export function logout(redirect = '/login') {
  localStorage.removeItem('token');
  localStorage.removeItem('user');

  if (typeof window !== 'undefined') {
    window.location.href = redirect;
  }
}
