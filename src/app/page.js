
export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Welcome to Our Platform
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            We deliver innovative solutions to accelerate your business growth with robust technologies and beautiful design.
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                We ensure rapid and reliable delivery of your projects with best practices.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Secure Systems</h3>
              <p className="text-gray-600">
                Built with strong security standards to protect your data and users.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow text-center">
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-600">
                Our architectures are designed to scale as your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            We are a team of experienced developers, designers, and strategists committed to creating impactful products that solve real-world problems.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to collaborate?</h2>
          <p className="text-indigo-100 mb-6">
            Contact us today and start building your next big idea with confidence.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-indigo-600 px-6 py-3 rounded-md text-base font-medium hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
