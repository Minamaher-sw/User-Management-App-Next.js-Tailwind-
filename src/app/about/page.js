import React from 'react';

export const metadata = {
  title: "About",
  description: "About Page",
};

function Page() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-sm text-blue-700 font-semibold tracking-widest uppercase">About Us</h2>
        <p className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Empowering businesses with technology
        </p>
        <p className="mt-5 max-w-2xl text-lg text-gray-600 mx-auto">
          We craft scalable products with robust backends and beautiful user experiences to accelerate your growth and impact.
        </p>
      </div>

      <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-3 text-gray-600">
            Deliver innovative software solutions that drive measurable success and create meaningful global impact.
          </p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
          <p className="mt-3 text-gray-600">
            To be a globally trusted technology partner recognized for innovation, excellence, and people-centered solutions.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition duration-300"
        >
          Connect with Us
        </a>
      </div>
    </section>
  );
}

export default Page;
