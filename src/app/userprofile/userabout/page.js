"use client";

import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          About Us
        </h1>

        {/* Page Description */}
        <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
          We are a team of passionate developers and designers dedicated to building scalable, user-friendly, and innovative web applications that empower businesses and individuals to achieve their goals efficiently.
        </p>

        {/* Our Mission */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To deliver high-quality digital solutions that drive growth, enhance user experiences, and create meaningful impact for our clients around the world.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become a globally recognized technology partner known for excellence, innovation, and customer-centric services that empower organizations and communities.
          </p>
        </div>

        {/* Our Values */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Integrity and Transparency</li>
            <li>Innovation and Excellence</li>
            <li>Collaboration and Teamwork</li>
            <li>Client Success and Satisfaction</li>
            <li>Continuous Learning and Growth</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
