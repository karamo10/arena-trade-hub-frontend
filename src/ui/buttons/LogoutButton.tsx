"use client";
import { logout } from "@/utils/auth";

export default function LogoutButton() {

    return (
        <button className="inline-flex items-center justify-center gap-3 text-white text-sm hover:bg-white/20 border-1 border-white/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="size-4 stroke-[2.5]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            onClick={() =>logout()}
                />
              </svg>
              Sign Out
            </button>
    )
}