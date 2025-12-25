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
    <div className="flex flex-col items-center justify-center h-96 ">
      <h2 className="font-medium">Something went wrong!</h2>
          <button
              className="btn-bg py-1 px-2 font-medium rounded cursor-pointer"
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}