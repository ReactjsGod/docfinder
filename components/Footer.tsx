import Link from 'next/link';
import React from 'react'

type FooterProps = unknown;
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <nav className="flex justify-center space-x-6 mb-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/doctors">
            Doctors
          </Link>
          <Link href="/about">
            About Us
          </Link>
          <Link href="/privacy">
            Privacy Policy
          </Link>
        </nav>
        <p className="text-sm">&copy; {new Date().getFullYear()} DocFinder. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer;