import Link from 'next/link';
import { logout } from '@/utils/auth';
import { ArrowRightStartOnRectangleIcon, TrashIcon, PencilSquareIcon, PlusCircleIcon, UserCircleIcon} from '@heroicons/react/16/solid';


export default function AdminSideBar() {
  return (
    <div className="w-18 sm:w-80 min-h-screen relative rounded flex flex-col items-center">
      <div className="w-[95%] sm:w-[100%] mt-0 flex flex-col flex-1 items-center justify-center">
        {/* <Link
          href={'/admin/addProducts'}
          className="flex items-center gap-1 py-2 px-2.5 bg-indigo-950 text-white font-normal rounded cursor-pointer"
        >
          <PlusCircleIcon className="w-5 h-5" />
           Add
        </Link> */}
        {/* <Link
          href={'/admin/editProducts'}
          className="mt-4 flex items-center gap-1 py-2 px-2.5 bg-indigo-950 text-white font-normal rounded cursor-pointer"
        >
          <PencilSquareIcon className="w-5 h-5" />
        </Link> */}
        {/* <Link
          href={'/admin/editProducts'}
          className="mt-4 flex items-center gap-1 py-2 px-2.5 bg-indigo-950 text-white font-normal rounded cursor-pointer"
        >
          <TrashIcon className="w-5 h-5" />
           Del
        </Link> */}
        <Link
          href={'/admin'}
          className="mt-4 flex items-center gap-1 py-2 px-2.5 bg-indigo-950 text-white font-normal rounded cursor-pointer"
        >
          <UserCircleIcon className="w-5 h-5" />
        </Link>
      </div>
      <div className="w-[95%] sm:w-[100%] bg-indigo-950/9 flex-2">
        {/* <h4>Hello</h4> */}
      </div>
      <div className="w-[95%] sm:w-[100%] flex flex-1 items-center justify-center overflow-hidden">
        <button
          onClick={() => logout()}
          className="bg-indigo-950 text-white flex items-center gap-1 px-4 py-2 font-normal rounded cursor-pointer"
        >
          <ArrowRightStartOnRectangleIcon className="w-6 h-6" />
          <p className="font-medium text hidden sm:block">Logout</p>
        </button>
      </div>
    </div>
  );
}
