"use client";
import React, { useState } from "react";

function Page() {
  const [user, setUser] = useState([]);
  const [newName, setNewName] = useState("");

  async function GetData() {
    try {
      const res = await fetch("/users");
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      const text = await res.text();
      const data = text ? JSON.parse(text) : [];
      setUser(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }
  async function addUser() {
    if (!newName) return;
    const res = await fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newName }),
    });

    if (!res.ok) {
      console.error("Failed to add user");
    } else {
      const data = await res.json();
      console.log("User added:", data);
      setNewName("");
      GetData();
    }
  }

  async function deleteUser(id) {
    try {
      const res = await fetch("/users", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        console.error("Failed to delete user");
      } else {
        const data = await res.json();
        console.log(data.message);
        GetData();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  async function updateUser(id) {
    console.log("Update user with id:", id);
    // integrate UPDATE API later
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#0A66C2]">👥 User Management</h1>

        <div className="flex mb-8 gap-3">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter user name"
            className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0A66C2] text-black"
          />
          <button
            onClick={addUser}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-green-700 transition"
          >
            Add
          </button>
        </div>

        <button
          onClick={GetData}
          className="w-full px-4 py-3 mb-10 bg-[#0A66C2] text-white rounded hover:bg-[#004182] transition"
        >
          Load Users
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.map((u) => (
            <div
              key={u.id}
              className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition"
            >
              {/* Header */}
              <div className="bg-[#0A66C2] px-6 py-4">
                <h2 className="text-lg font-bold text-white">{u.name}</h2>
              </div>

              {/* Footer Buttons */}
              <div className="px-6 py-4 bg-gray-50 flex justify-between">
                <button
                  onClick={() => updateUser(u.id)}
                  className="px-3 py-1 text-sm bg-yellow-400 text-gray-800 rounded hover:bg-yellow-500 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => deleteUser(u.id)}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {user.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No users found. Click &quot Load Users &quot to fetch data.</p>
        )}
      </div>
    </div>
  );
}

export default Page;
