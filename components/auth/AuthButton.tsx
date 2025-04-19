'use client';

import React from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { login, logout } from '@/lib/auth/getAuth';
import type { Session } from 'next-auth';

interface Props {
  user: Session['user'] | null;
}

export default function AuthButton({ user }: Props) {
  return user ? (
    <div className='flex items-center'>
      <span className="text-gray-700 mr-2">Welcome, {user.name?.split(" ")[0]}</span>
      <img
        src={user.image || '/default-avatar.png'}
        alt="User Avatar"
        className="w-8 h-8 rounded-full border border-gray-300"
      />
      <button
      onClick={logout}
      className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
      aria-label="Sign out"
    >
      <FiLogOut className="mr-1" /> Logout
    </button>
    </div>
    
  ) : (
    <button
      onClick={login}
      className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
      aria-label="Sign in"
    >
      <FiLogIn className="mr-1" /> Login
    </button>
  );
}
