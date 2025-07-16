import Link from 'next/link'
import React from 'react'

function notfound() {
  return (
   <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6"> user Not Found</p>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go users 
        </Link>
      </div>
    </div>
  )
}

export default notfound
