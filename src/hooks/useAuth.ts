"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function useAuth(requiredRole?: string) {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token")
        const userStr = localStorage.getItem("user");

        const user = userStr ? JSON.parse(userStr) : null;

        if (!token || !user) {
            router.push("/login");
            return
        }

        // If a required role is specified, check if the user has that role
        if (requiredRole && user.role !== requiredRole) {
            router.push("/login");
            return
        }
    }, [router, requiredRole]);
}