"use client";

import Image from "next/image";
import React from "react";

const user = {
  name: "John Doe",
  title: "Senior Software Engineer at Meta",
  avatar: "https://via.placeholder.com/150",
  location: "San Francisco Bay Area",
  connections: "500+",
  about:
    "Passionate software engineer with 7+ years of experience building scalable web applications and leading engineering teams to deliver high-quality products.",
  skills: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
  experiences: [
    {
      company: "Meta",
      role: "Senior Software Engineer",
      period: "2021 - Present",
      description:
        "Leading frontend architecture for key products, mentoring junior engineers, and improving performance across large-scale applications.",
    },
    {
      company: "Google",
      role: "Software Engineer",
      period: "2018 - 2021",
      description:
        "Developed features for Google Search, optimized codebases, and collaborated with cross-functional teams to enhance user experience.",
    },
  ],
  activities: [
    {
      title: "Shared a post",
      description: "How to improve performance in large React applications.",
      time: "2h ago",
    },
    {
      title: "Liked a post",
      description: "10 tips for mastering TypeScript.",
      time: "5h ago",
    },
    {
      title: "Commented",
      description: "Great article on GraphQL best practices!",
      time: "1d ago",
    },
  ],
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-700 h-32 w-full"></div>

        {/* Profile Info */}
        <div className="flex flex-col items-center -mt-16 px-6 pb-10">
          <Image
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
            src={user.avatar}
            alt={user.name}
            width={128}
            height={128}
          />

          <h2 className="mt-4 text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600">{user.title}</p>

          <div className="mt-4 flex space-x-4">
            <button className="bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition">
              Connect
            </button>
            <button className="border border-gray-300 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Message
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">{user.location}</p>
            <p className="text-gray-500 text-sm">{user.connections} connections</p>
          </div>

          {/* About Section */}
          <div className="mt-8 w-full px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
            <p className="text-gray-600">{user.about}</p>
          </div>

          {/* Skills */}
          <div className="mt-8 w-full px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-300 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8 w-full px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Experience</h3>
            <div className="space-y-4">
              {user.experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition"
                >
                  <h4 className="text-md font-medium text-gray-900">{exp.role}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div className="mt-8 w-full px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity</h3>
            <div className="space-y-4">
              {user.activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition cursor-pointer"
                >
                  <h4 className="text-md font-medium text-gray-900">{activity.title}</h4>
                  <p className="text-gray-600">{activity.description}</p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
