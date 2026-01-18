"use client";

import { HomeIcon, UserIcon } from "@heroicons/react/16/solid";
import Link from "next/link";

const links = [
    { name: "products", href: "/products", icon: HomeIcon },
    { name: "Partners", href: "/partners", icon: UserIcon },
    { name: "Login", href: "/login", icon: UserIcon },
];

export default function NavLinks() {

    return (
        <div className="flex items-center gap-6">
            {links.map((link) => {
                const LinkIcon = link.icon;

                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="nav-text text-sm md:text-base font-medium flex items-center gap-1 "
                    >
                        <LinkIcon className="w-5 h-5 icon" />
                        <p className="nav-text">{link.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}