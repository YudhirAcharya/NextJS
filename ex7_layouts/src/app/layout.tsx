import Link from "next/link";
import React from "react";
import "./globals.css"; // Assuming you have a global CSS file for styles
const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="bg-gray-50 text-gray-900">
      <body className="min-h-screen flex flex-col font-sans">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <Link href="/admin" className="text-white hover:underline">
              Admin
            </Link>
          </nav>
        </header>

        <div className="flex flex-1">
          <aside className="w-64 bg-gray-100 p-4 border-r">
            <h2 className="text-xl font-semibold mb-4 text-black">
              Categories
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/technology"
                  className="text-blue-600 hover:underline"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link
                  href="/category/business"
                  className="text-blue-600 hover:underline"
                >
                  Business
                </Link>
              </li>
            </ul>
          </aside>

          <main className="flex-1 p-6">{children}</main>
        </div>

        <footer className="bg-gray-200 text-center py-4 mt-auto text-sm text-gray-700">
          <p>This is permanent © 2025</p>
        </footer>
      </body>
    </html>
  );
};

export default BaseLayout;
