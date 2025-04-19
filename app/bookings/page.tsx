"use client";

import React from 'react';
import { useStore } from '@/hooks/useStore';
import AppointmentsList from '@/components/AppointmentList';

export default function BookingsPage() {
  const appointments = useStore((state) => state.appointments);

  return (
    <div className="max-w-6xl mx-auto p-4 h-screen">
      <h1 className="text-3xl font-bold mb-4">My Booked Appointments</h1>
      <AppointmentsList appointments={appointments} />
    </div>
  );
}
