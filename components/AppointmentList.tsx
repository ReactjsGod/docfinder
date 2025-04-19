'use client'
import React from 'react';
import { AppointmentsListProps } from '@/types/doctor';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const AppointmentsList: React.FC<AppointmentsListProps> = ({ appointments }) => {
  if (!appointments.length) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500 text-lg">You have no booked appointments yet.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 my-5">
      {appointments.map((appt, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
        >
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {appt.doctor.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium mb-4">
              {appt.doctor.specialty}
            </p>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <FiCalendar className="mr-1" />
              {appt.date} at {appt.time}
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <FiMapPin className="mr-1" />
              {appt.doctor.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentsList;