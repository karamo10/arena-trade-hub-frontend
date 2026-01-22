import { useEffect } from "react";


export function useLockBodyScroll(lock) {
    useEffect(() => {
        if (lock) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [lock]);
}

// What is a reusable hook?
// A custom hook is: A function that reuses logic, not UI

// Rules:

// Starts with use

// Uses React hooks inside (useEffect, useState, etc.)

// Can be used in any component

// What is useLockBodyScroll?
// It’s a hook that:
// Locks body scroll when something is open (menu, modal, drawer)
// Unlocks it when closed
// Prevents bugs when component unmounts
