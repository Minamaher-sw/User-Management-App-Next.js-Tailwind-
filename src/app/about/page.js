import React from 'react'

function page() {
  return (
   <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          We build solutions for your business growth
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Our team of experts crafts digital products with scalable architectures, elegant UI/UX, and robust backends to empower your vision.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Our Mission</h3>
          <p className="mt-2 text-gray-600">
            Delivering innovative software solutions that drive success and create meaningful impact for our clients worldwide.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Our Vision</h3>
          <p className="mt-2 text-gray-600">
            To be a leading technology partner recognized for excellence, innovation, and people-centered solutions.
          </p>
        </div>
      </div>
    </section>
  )
}

export default page
