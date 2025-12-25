import { toast } from 'react-toastify';

export default function handleAuthError(err: any) {
  const status = err?.status;

  if (status === 401) {
    toast.error('Session expired. Please login again.');

    localStorage.removeItem('token');

    setTimeout(() => {
      window.location.href = '/login';
    }, 2000);
  } else if (status === 403) {
    toast.error('Admin access only.');
  } else {
    toast.error('Something went wrong.');
  }
}
