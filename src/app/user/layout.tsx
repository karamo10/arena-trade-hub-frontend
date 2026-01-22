import Navigation from '@/ui/users/Navigations';

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="bg-red-100 loyouts">
      {/* <p className="warn text-center text-xs my-1">
        ⚠️ This page is under development
      </p> */}
      <Navigation />
      {children}
    </section>
  );
}
