import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">

        {/* LinkedIn Branding */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">LinkedIn</h3>
          <p>© {new Date().getFullYear()} LinkedIn Corporation</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">General</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Sign Up</Link></li>
            <li><Link href="#" className="hover:underline">Help Center</Link></li>
            <li><Link href="#" className="hover:underline">About</Link></li>
          </ul>
        </div>

        {/* Business Solutions */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Business Solutions</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Talent</Link></li>
            <li><Link href="#" className="hover:underline">Marketing</Link></li>
            <li><Link href="#" className="hover:underline">Sales</Link></li>
          </ul>
        </div>

        {/* Privacy and Terms */}
        <div>
          <h3 className="text-gray-800 font-semibold mb-3">Privacy & Terms</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:underline">User Agreement</Link></li>
            <li><Link href="#" className="hover:underline">Cookie Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>LinkedIn Corporation © {new Date().getFullYear()}</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="#" className="hover:underline">Accessibility</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Ad Choices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
