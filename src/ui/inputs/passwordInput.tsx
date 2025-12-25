"use client";

import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/16/solid";

export default function PasswordInput({ name, value, onchange }: { name: string, value: string, onchange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
    const [showPassword, setShowPassword] = useState(false)
    // const [userLogging, setUserLogging] = useState(false);
    
    return (
        <div className="relative mb-4">
            <input
                type={showPassword ? "text" : "password"}
                name={name}
                value={value}
                onChange={onchange}
                placeholder={`${name}`}
                className="p-2 w-full mb-0 rounded bg-white outline outline-blue-950/95"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 inset-y-0 cursor-pointer"
            >
                {showPassword ? (<EyeSlashIcon className="w-6 h-6" />) : (<EyeIcon className="w-6 h-6" />)}
                <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                </span>
            </button>
        </div>
    )
}