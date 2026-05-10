// app/not-found.js (Next.js 13+ with App Router)
// or pages/404.js (Next.js 12 with Pages Router)

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
            <h1 className="text-9xl font-extrabold text-gray-300">404</h1>
            <h2 className="mt-4 text-3xl font-bold text-gray-800">Page Not Found</h2>
            <p className="mt-2 text-gray-600 max-w-md">
                Oops! The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <Link
                href="/"
                className="mt-6 inline-block rounded-md bg-[#4ec0cade] px-6 py-3 text-white font-medium shadow hover:bg-[#47dae7] transition"
            >
                Go Back Home
            </Link>
        </div>
    );
}
