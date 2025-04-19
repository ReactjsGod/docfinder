"use client";

import React, { FormEvent, useState } from "react";
import { FiHome, FiUsers, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthButton from "./auth/AuthButton";
import { UserProps } from "@/types/general";

export default function Navigation({ user }: UserProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/doctors?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setMenuOpen(false);
    }
  };

  const links = (
    <>
      <Link
        href="/"
        className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
      >
        <FiHome className="mr-1" /> Home
      </Link>
      {user && (
        <Link
          href="/bookings
      "
          className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <FiUser className="mr-1" /> My Bookings
        </Link>
      )}
      <Link
        href="/doctors"
        className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
      >
        <FiUsers className="mr-1" /> Doctors
      </Link>
      <Link
        href="/about"
        className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
      >
        <FiUser className="mr-1" /> About Us
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-1">
            <FiUsers className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl text-blue-600">DocFinder</span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            {links}
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                className="border rounded-l-md px-2 py-1 focus:outline-none"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 px-3 rounded-r-md text-white"
              >
                <FiSearch />
              </button>
            </form>
            <AuthButton user={user} />
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden absolute inset-x-0 top-full bg-white shadow-lg">
          <div className="p-4 space-y-2 flex flex-col">
            {links}
            <form onSubmit={handleSearch} className="flex py-2">
              <input
                type="text"
                className="border rounded-l-md px-2 py-1 w-full"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 px-3 rounded-r-md text-white"
              >
                <FiSearch />
              </button>
            </form>
            <div className="pt-2 border-t">
              <AuthButton user={user} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
