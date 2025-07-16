import Link from 'next/link';
import React from 'react';
import { signOut } from '../auth';

export default function Navbar() {
  async function logout() {
    "use server"
    await signOut({redirectTo:"/login"})
  }
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-2" href="/">
          <svg className="h-8 w-8 text-[#0A66C2]" viewBox="0 0 28 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.41 10.3847C1.14777 7.4194 ... rest of your path ... Z" />
          </svg>
          <span className="text-xl font-bold text-[#0A66C2]">Mina3M</span>
        </Link>

        <nav aria-label="Global" className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> Home </Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> About </Link>
          <Link href="/userprofile" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> userprofile </Link>
          <Link href="/userlayout" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> Users </Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> Contact </Link>
          <Link href="/blog" className="text-gray-700 font-medium hover:text-[#0A66C2] transition"> Blog </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#004182] transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="hidden sm:block rounded-full border border-[#0A66C2] px-5 py-2.5 text-sm font-medium text-[#0A66C2] hover:bg-[#e8f4f9] transition"
          >
            Register
          </Link>
          <form action={logout}>
             <button
                className="rounded-full bg-[#0A66C2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#004182] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A66C2] transition duration-200"
              >
                Logout
          </button>
          </form>
          <button
            className="md:hidden p-2.5 rounded bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
          >
            <span className="sr-only">Toggle menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
