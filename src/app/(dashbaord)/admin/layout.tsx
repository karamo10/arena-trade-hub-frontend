'use client';

import useAuth from '@/hooks/useAuth';
import AdminTopBar from '@/ui/admin/Header/AdminTopBar';
import { ToastContainer } from 'react-toastify';
import AdminSideBar from '@/ui/admin/AdminSideBar';

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useAuth("admin");

  return (
    <div>
      <ToastContainer position="top-center" autoClose={5000} />
      <section className="bg-white">
        <AdminTopBar />
        <AdminSideBar />
        {children}
      </section>
    </div>
  );
}

{
  /* <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-1 sm:px-12 shadow">
            <Link
              href={'/'}
              className="bg-white cursor-pointer p-2 rounded-full"
            >
              <Image
                src={'/images/logo.jpeg'}
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-10 h-10 rounded-full"
              />
            </Link>
            <div className="flex items-center space-x-2 bg-amber-00">
              <UserCircleIcon className="w-5 h-5" />
              <Image
                src={user?.image ?? '/images/avatar.gif'}
                alt={'profile'}
                width={100}
                height={100}
                className="object-cover w-9 h-9 rounded-full"
              />
              <div className="flex flex-col items-start">
                <p className="font-medium text-sm">
                  {user ? `${user.first_name}` : 'Admin'}
                </p>
                <span className="text-xs text-clr-secondary sm:hidden">
                  Admin
                </span>
              </div>
            </div>
          </div> */
}

{
  /* <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-[15px] gap-4 px-4">
            <Link
              href={'/admin/users'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <UserCircleIcon className="w-6 h-6" />
              <p className="font-light">Users</p>
            </Link>
            <Link
              href={'/admin/add-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <PlusCircleIcon className="w-6 h-6" />
              <p className="font-light">Add</p>
            </Link>
            <Link
              href={'/admin/update-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <PencilSquareIcon className="w-6 h-6" />
              <p className="font-light">Update</p>
            </Link>
            <Link
              href={'/admin/delete-product'}
              className="flex items-center gap-2 py-4 px-6 bg-white font-normal rounded cursor-pointer shadow-lg"
            >
              <TrashIcon className="w-6 h-6" />
              <p className="font-light">Delete</p>
            </Link>
          </div> */
}
{
  /* {children} */
}
// </div>
{
  /*

        
        */
}

// <div>
//     <span className="text-sm font-semibold text-white/95 mb-5 block text-center">
//       Product
//     </span>
//     <div className="flex flex-col space-y-5">
//       {/* add */}
//       <Link
//         href={'/admin/add-product'}
//         className="flex items-center space-x-2 bg-white text-[#000428] font-semibold py-2 px-3 border border-white rounded-lg shadow-lg hover:bg-white/90 cursor-pointer transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="2"
//           stroke="currentColor"
//           className="size-5"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
//           />
//         </svg>

//         <p className="text-sm font-medium">Add</p>
//       </Link>
//       {/* update */}
//       <Link
//         href={'/admin/update-product'}
//         className="flex items-center space-x-2 bg-white text-[#000428] font-semibold py-2 px-3 border border-white rounded-lg shadow-lg hover:bg-white/90 cursor-pointer transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="2"
//           stroke="currentColor"
//           className="size-5"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//           />
//         </svg>
//         <p className="text-sm font-medium">Update</p>
//       </Link>
//       {/* delete */}
//       <Link
//         href={'/admin/delete-product'}
//         className="flex items-center space-x-2 bg-white text-[#000428] font-semibold py-2 px-3 border border-white rounded-lg shadow-lg hover:bg-white/90 cursor-pointer transition-all duration-300"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="2"
//           stroke="currentColor"
//           className="size-5"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
//           />
//         </svg>
//         <p className="text-sm font-medium">Delete</p>
//       </Link>
//     </div>
//   </div>
