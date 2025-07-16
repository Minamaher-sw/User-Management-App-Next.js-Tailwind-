import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export const metadata = {
  title: "Users Page",
  description: "Users Page",
};

async function UserList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Users</h1>
          <Link
            href="/userUI"
            className="inline-block px-4 py-2 bg-[#0A66C2] text-white text-sm rounded hover:bg-[#004182] transition transform hover:scale-105"
          >
            Add New User
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((user) => (
            <div
              key={user.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden flex flex-col duration-300 ease-in-out"
            >
              {/* Header */}
              <div className="bg-[#0A66C2] px-6 py-4">
                <h2 className="text-lg font-bold text-white">{user.name}</h2>
                <p className="text-blue-100 text-sm">@{user.username}</p>
              </div>

              {/* Body */}
              <div className="px-6 py-4 flex-1 space-y-3 bg-gray-50">
                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">📞 Contact</h3>
                  <p className="text-gray-700 text-sm">✉️ {user.email}</p>
                  <p className="text-gray-700 text-sm">📱 {user.phone}</p>
                  <p className="text-gray-700 text-sm">🌐 {user.website}</p>
                </div>

                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">🏠 Address</h3>
                  <p className="text-gray-700 text-sm">
                    {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-800 font-semibold mb-1">🏢 Company</h3>
                  <p className="text-gray-700 text-sm">Name: {user.company.name}</p>
                  <p className="text-gray-700 text-sm">“{user.company.catchPhrase}”</p>
                  <p className="text-gray-700 text-sm">Business: {user.company.bs}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-3 bg-white border-t text-right">
                <Link
                  href={`/userlayout/${user.id}`}
                  className="inline-block px-4 py-2 bg-[#0A66C2] text-white text-sm rounded hover:bg-[#004182] transition transform hover:scale-105"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;
