'use client';

import useAuth from '@/hooks/useAuth';
import UserProfileNavigation from '@/ui/user/UserProfileNavigation/UserProfileNavigation';

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAuth('user');
  return (
    <section className="loyouts">
      <UserProfileNavigation />
      {children}
    </section>
  );
}


{
  /* <p className="warn text-center text-xs my-1">
        ⚠️ This page is under development
     </p> 
*/
}
