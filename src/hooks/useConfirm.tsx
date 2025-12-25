"use client";

import { ConfirmOptions } from "@/types/confirm-option-types";
import { useState } from "react";

export default function useConfirm() {
    const [options, setOptions] = useState<ConfirmOptions | null>(null);
    const [resolver, setResolver] = useState<((value: boolean) => void) | null>(null);

    function confirm(opts: ConfirmOptions = {}) {
        return new Promise<boolean>((resolve) => {
            setOptions({
                title: opts.title ?? "Are you sure?",
                message: opts.message ?? "This action cannot be undone.",
                confirmText: opts.confirmText ?? "Confirm",
                cancelText: opts.cancelText ?? "Cancel",
            });
            setResolver(() => resolve);
        });
    }

    function handleConfirm() {
        resolver?.(true);
        cleanup();
    }

    function handleCancel() {
        resolver?.(false);
        cleanup();
    }

    function cleanup() {
        setOptions(null);
        setResolver(null);
    }

    // return {
    //     confirm,
    //     ConfirmModal: options ? (
    //         <ConfirmModal
    //             {...options}
    //             onConfirm={handleConfirm}
    //             onCancel={handleCancel}
    //         />
    //     ) : null,
    // };
}