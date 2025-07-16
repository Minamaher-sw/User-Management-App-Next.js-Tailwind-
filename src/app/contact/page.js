import React from 'react'
export const metadata = {
  title: "Contact",
  description: "Contact Page",
};
function page() {
    return (
        <section className="bg-gray-50 py-16" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
                Contact Us
            </h2>
            <p className="mt-4 text-gray-600">
                We would love to hear from you. Please fill out the form below and we will get back to you shortly.
            </p>
            </div>

            <form className="grid grid-cols-1 gap-y-6">
            <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Your Name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="Your Email"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
            </div>

            <div>
                <button
                type="submit"
                className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                Send Message
                </button>
            </div>
            </form>
        </div>
        </section>
    )
}

export default page
