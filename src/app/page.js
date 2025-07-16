import Link from "next/link";

export const metadata = {
  title: "LinkedIn – Home",
  description: "Welcome to your professional community",
};

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-800">
            Welcome to your professional community
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            LinkedIn helps you manage your professional identity, build and engage with your network, and access knowledge, insights, and opportunities.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition"
          >
            Join Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-14">
            Explore LinkedIn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Connect"
              description="Find people you know, learn about their professional journey, and grow your network globally."
              icon="🤝"
            />
            <FeatureCard
              title="Learn"
              description="Gain new skills with LinkedIn Learning and stay ahead in your career with expert-led courses."
              icon="📚"
            />
            <FeatureCard
              title="Find Jobs"
              description="Search millions of job listings and get personalized recommendations based on your profile."
              icon="💼"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white border-t border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-800">About LinkedIn</h2>
          <p className="text-gray-600 text-lg">
            LinkedIn is the world's largest professional network with hundreds of millions of members, connecting professionals to make them more productive and successful.
          </p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-blue-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            See what LinkedIn can do for you
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join now to connect, learn, and discover new opportunities that advance your career.
          </p>
          <Link
            href="/signup"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 focus:ring-4 focus:ring-white transition"
          >
            Join LinkedIn
          </Link>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transform transition cursor-pointer text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
