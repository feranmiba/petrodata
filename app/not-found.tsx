'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
      <p className="text-white mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="text-[#00897B] underline">
        Go back home
      </Link>
    </div>
  );
}
