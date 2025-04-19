"use client";
import React from "react";
import { useStore } from "@/hooks/useStore";
import { doctors as mockDoctors } from "@/mock/doctors";
import FilterBar from "@/components/FilterBar";
import DoctorCard from "@/components/DoctorCard";
import BookingModal from "@/components/BookingModal";
import { Appointment, Doctor } from "@/types/doctor";
import { UserProps } from "@/types/general";


const DoctorsPage= ({ user }: UserProps) => {
  const { doctors, filters, loadDoctors, setFilter, addAppointment } =
    useStore();

  const [selectedDoctor, setSelectedDoctor] = React.useState<Doctor | null>(
    null
  );

  React.useEffect(() => {
    loadDoctors(mockDoctors);
  }, [loadDoctors]);

  const filtered = doctors.filter((doc) => {
    if (filters.specialty !== "All" && doc.specialty !== filters.specialty) {
      return false;
    }
    if (filters.availableOnly && doc.availability.length === 0) {
      return false;
    }
    return true;
  });

  const specialties = Array.from(new Set(doctors.map((d) => d.specialty)));

  // Handlers
  const onBook = (doc: Doctor) => setSelectedDoctor(doc);
  const onConfirm = (appt: Appointment) => {
    addAppointment(appt);
    setSelectedDoctor(null);};
  const onClose = () => setSelectedDoctor(null);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Doctors Directory</h1>

      <FilterBar
        specialties={specialties}
        filters={filters}
        onFilter={setFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((doc) => (
          <DoctorCard key={doc.id} doc={doc} onBook={onBook} />
        ))}
      </div>

      {selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={onClose}
          onConfirm={onConfirm}
          user={{ user }}
        />
      )}
    </div>
  );
};

export default DoctorsPage;
