"use client";

import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";

export default function PasswordInput({ name, value, onchange }: { name: string, value: string, onchange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    const [showPassword, setShowPassword] = useState(false)
    // const [userLogging, setUserLogging] = useState(false);
    
    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                name={name}
                value={value}
                onChange={onchange}
                placeholder={`${name}`}
                className="peer w-full border border-slate-400 bg-white/50 focus:border-[#000428] in-focus:ring-[#000428] rounded py-2 px-3 outline-none placeholder:text-sm placeholder:text-slate-800"
                required
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 inset-y-0 cursor-pointer peer-focus:text-[#000428]"
            >
                {showPassword ? (<EyeSlashIcon className="w-6 h-6" />) : (<EyeIcon className="w-6 h-6" />)}
                <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                </span>
            </button>
        </div>
    )
}