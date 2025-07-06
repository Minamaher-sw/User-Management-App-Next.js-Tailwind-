import { redirect } from 'next/navigation';
import React from 'react';

async function page({ params }) {
  const { userid } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`);
  const user = await res.json();

 async function Go(){
        "use server"
        await redirect("/products");
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
          <p className="text-indigo-200 text-sm">@{user.username}</p>
        </div>

        <div className="px-6 py-4 space-y-4">
          <div>
            <h3 className="text-gray-800 font-semibold mb-1">📞 Contact Information</h3>
            <p className="text-gray-600 text-sm">✉️ Email: {user.email}</p>
            <p className="text-gray-600 text-sm">📱 Phone: {user.phone}</p>
            <p className="text-gray-600 text-sm">🌐 Website: {user.website}</p>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-1">🏠 Address</h3>
            <p className="text-gray-600 text-sm">
              {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          <div>
            <h3 className="text-gray-800 font-semibold mb-1">🏢 Company</h3>
            <p className="text-gray-600 text-sm">Name: {user.company.name}</p>
            <p className="text-gray-600 text-sm">CatchPhrase: {user.company.catchPhrase}</p>
            <p className="text-gray-600 text-sm">Business: {user.company.bs}</p>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 text-right">
          <form action={Go}>
            <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                Back to Users
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
