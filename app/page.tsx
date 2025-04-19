import Link from "next/link";
import React from "react";
import {  FiSearch, FiCalendar, FiActivity } from "react-icons/fi";


export default function Home() {
  return (
    <main className="flex flex-col items-center text-gray-800">
      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Find and Book Your Doctor Easily
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Browse, filter, and schedule appointments with top-rated doctors in
          your area.
        </p>
        <Link
          href="/doctors"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Browse Doctors
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl w-full mt-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FiSearch
            className="mb-4 w-[50px] h-[50px] mx-auto text-blue-600"
          />
          <h2 className="text-2xl font-semibold mb-2">Search Doctors</h2>
          <p>
            Filter by specialty, availability, and location to find the right
            doctor.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FiCalendar
            className="mb-4 w-[50px] h-[50px] mx-auto text-blue-600"
          />
          <h2 className="text-2xl font-semibold mb-2">Book Appointments</h2>
          <p>
            Select available time slots and confirm your appointment in a click.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow hover:shadow-lg transition">
          <FiActivity
            className="mb-4 w-[50px] h-[50px] mx-auto text-blue-600"
          />
          <h2 className="text-2xl font-semibold mb-2">Manage Appointments</h2>
          <p>View and manage all your upcoming appointments in one place.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl w-full mt-20 px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">About DocFinder</h2>
        <p className="text-lg">
          DocFinder is a modern platform designed to simplify the process of
          finding and booking medical professionals. Our mission is to connect
          patients with the best healthcare providers in their community,
          ensuring convenience, transparency, and quality of care.
        </p>
      </section>

      {/* CTA Footer */}
      <section className="w-full bg-blue-50 mt-20 py-12 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to get started?</h3>
        <Link
          href="/doctors"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Search Doctors Now
        </Link>
      </section>
    </main>
  );
}
