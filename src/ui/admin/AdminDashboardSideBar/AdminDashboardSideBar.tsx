import Link from 'next/link';
import Image from 'next/image';
import LogoutButton from '../../buttons/LogoutButton';

export default function AdminSideBar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64
    bg-gradient-to-l from-[#004e92] to-[#000428] text-white
    border-r border-gray-700
    transform transition-transform duration-300
    flex flex-col
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0`}
      >
        {/* logo */}
        <div className="px-4 h-16 flex items-center justify-between border-b border-gray-700">
          <Link href="/">
            <Image
              src="/images/logo.jpeg"
              alt="logo"
              width={100}
              height={100}
              className="object-cover w-9 h-9 rounded-full"
            />
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className="size-5 lg:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>

        {/* nav */}
        <nav className="flex-1 px-4 py-4 space-y-3">
          {/* <p className="hover:text-blue-400 cursor-pointer">Dashboard</p> */}
          <div>
            <Link
              href={'/admin'}
              className="flex items-center space-x-2 cursor-pointer font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-layout-dashboard w-5 h-5 flex-shrink-0"
                aria-hidden="true"
              >
                <rect width="7" height="9" x="3" y="3" rx="1"></rect>
                <rect width="7" height="5" x="14" y="3" rx="1"></rect>
                <rect width="7" height="9" x="14" y="12" rx="1"></rect>
                <rect width="7" height="5" x="3" y="16" rx="1"></rect>
              </svg>
              <span>Dashboard</span>
            </Link>
          </div>
            {/* Users navigation */}
          <div>
            <Link
              href={'/admin/users'}
              className="flex items-center space-x-2 cursor-pointer font-semibold"
            >
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
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>

              <span>User</span>
            </Link>
          </div>
          {/* Products navigation */}
          <div>
            <Link
              href={'/admin/add-product'}
              className="flex items-center space-x-2 cursor-pointer font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Add Product</span>
            </Link>
          </div>
          <div>
            <Link
              href={'/admin/update-product'}
              className="flex items-center space-x-2 cursor-pointer font-semibold"
            >
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>

              <span>Update Product</span>
            </Link>
          </div>
          <div>
            <Link
              href={'/admin/delete-product'}
              className="flex items-center space-x-2 cursor-pointer font-semibold"
            >
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
                  d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
                />
              </svg>

              <span>Delete Product</span>
            </Link>
          </div>
        </nav>

        {/* bottom */}
        <div className="px-4 py-4 border-t border-gray-700">
          <LogoutButton />
        </div>
      </aside>
    </>
  );
}
