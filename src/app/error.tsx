"use client";

import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className="flex flex-col space-y-3 items-center justify-center h-[50vh]">
      <p className="text-sm text-clr-primary">Something went wrong!</p>
          <button
              className="bg-[#004e92] font-normal text-white text-sm cursor-pointer"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}