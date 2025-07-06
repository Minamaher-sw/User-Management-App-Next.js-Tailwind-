import { redirect } from 'next/navigation';
import React from 'react';

async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  async function Go(formData) {
    "use server";
    const userId = formData.get("userId");
    await redirect(`/products/${userId}`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((user) => (
        <div key={user.id} className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 text-sm mb-4">@{user.username}</p>
            <div className="mb-4">
              <h3 className="text-gray-800 font-semibold">Contact Information</h3>
              <p className="text-gray-600 text-sm">Email: {user.email}</p>
              <p className="text-gray-600 text-sm">Phone: {user.phone}</p>
              <p className="text-gray-600 text-sm">Website: {user.website}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-gray-800 font-semibold">Address</h3>
              <p className="text-gray-600 text-sm">
                {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
              </p>
            </div>
            <div>
              <h3 className="text-gray-800 font-semibold">Company</h3>
              <p className="text-gray-600 text-sm">Name: {user.company.name}</p>
              <p className="text-gray-600 text-sm">CatchPhrase: {user.company.catchPhrase}</p>
              <p className="text-gray-600 text-sm">Business: {user.company.bs}</p>
            </div>
          </div>
          <div className="px-6 py-4 bg-gray-50 text-right">
            <form action={Go}>
              <input type="hidden" name="userId" value={user.id} />
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700">
                User details
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
