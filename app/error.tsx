"use client"; // wajib, karena error.tsx harus Client Component

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error ke console untuk debugging (bisa diganti ke error tracking service nanti)
    console.error("Error tertangkap:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas px-6">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">TERJADI KESALAHAN</h2>
        <p className="text-body font-light mb-8">
          Maaf, ada masalah saat memuat halaman ini. Silakan coba lagi.
        </p>
        <button
          onClick={reset}
          className="border border-on-dark px-8 py-4 text-sm font-bold tracking-[1.5px] hover:bg-on-dark hover:text-canvas transition-colors"
        >
          COBA LAGI
        </button>
      </div>
    </div>
  );
}