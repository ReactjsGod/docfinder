import React from 'react';
import { auth } from '@/app/auth';
import AuthButton from '@/components/auth/AuthButton';

// Server Component: fetches session and passes user to client
export default async function AuthButtonServer() {
  const session = await auth();
  const user = session?.user || null;

  return <AuthButton user={user} />;
}
