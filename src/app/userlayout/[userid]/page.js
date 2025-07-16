import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export async function generateMetadata({ params }) {
  const userId = params.userid;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();

  if (!user.id) {
    return {
      title: "User Not Found",
      description: "No user found for this ID",
    };
  }

  return {
    title: user.name,
    description: `Profile page for ${user.username}`,
  };
}

async function Page({ params }) {
  const { userid } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const user = await res.json();

  if (!user.id) {
    notFound();
  }

  return (
    <main className="bg-gray-100 min-h-screen">
      <header className="bg-[#0A66C2]">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-3xl font-bold text-white">{user.name}</h1>
          <p className="text-blue-100">@{user.username}</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto mt-6 bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        {/* About Summary */}
        <div className="px-6 py-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
          <p className="text-gray-700 text-sm">
            {user.company.catchPhrase}. Experienced professional at {user.company.name}, specialising in {user.company.bs}.
          </p>
        </div>

        {/* Contact Info */}
        <div className="px-6 py-6 border-b bg-gray-50">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Info</h2>
          <div className="space-y-2">
            <p className="text-gray-700 text-sm">✉️ Email: {user.email}</p>
            <p className="text-gray-700 text-sm">📱 Phone: {user.phone}</p>
            <p className="text-gray-700 text-sm">🌐 Website: {user.website}</p>
          </div>
        </div>

        {/* Address */}
        <div className="px-6 py-6 border-b">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Address</h2>
          <p className="text-gray-700 text-sm">
            {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
          </p>
        </div>

        {/* Company Info */}
        <div className="px-6 py-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Company</h2>
          <p className="text-gray-700 text-sm">🏢 {user.company.name}</p>
          <p className="text-gray-700 text-sm">💡 {user.company.catchPhrase}</p>
          <p className="text-gray-700 text-sm">📈 {user.company.bs}</p>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t text-right">
          <Link
            href="/userlayout"
            className="inline-block px-5 py-2 bg-[#0A66C2] text-white text-sm font-medium rounded hover:bg-[#004182] transition"
          >
            Back to Users
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Page;
