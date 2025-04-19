"use client";

import React, { useState, useRef } from "react";
import { BookingModalProps } from "@/types/doctor";
import { login } from "@/lib/auth/getAuth";

const BookingModal: React.FC<BookingModalProps> = ({
  doctor,
  user,
  onClose,
  onConfirm,
}) => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState<string>(today);
  const [slot, setSlot] = useState<string>(doctor.availability[0] || "");

  const [firstName, setFirstName] = useState<string>(
    user?.user?.name?.split(" ")[0] || ""
  );
  const [lastName, setLastName] = useState<string>(
    user?.user?.name?.split(" ")[1] || ""
  );
  const [showLoginPrompt, setShowLoginPrompt] = useState<boolean>(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleConfirm = () => {
    // If no user and no manual name, require input
    if (!user && (!firstName.trim() || !lastName.trim())) {
      return alert("Please enter your first and last name.");
    }
    onConfirm({ doctor, date, time: slot, firstName, lastName });
    if (!user) {
      setShowLoginPrompt(true);
    } else {
      onClose();
    }
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={backdropRef}
      onClick={handleClickOutside}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        className="bg-white p-6 rounded w-full max-w-sm text-black"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl mb-4">Book with {doctor.name}</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-1 font-medium">
            First Name:
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            placeholder="Your first name"
            aria-label="First name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-1 font-medium">
            Last Name:
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            placeholder="Your last name"
            aria-label="Last name"
          />
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label htmlFor="date" className="block mb-1 font-medium">
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            min={today}
            aria-label="Choose appointment date"
          />
        </div>

        {/* Time Slot Selector */}
        <div className="mb-4">
          <label htmlFor="slot" className="block mb-1 font-medium">
            Time Slot:
          </label>
          <select
            id="slot"
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring"
            aria-label="Choose time slot"
          >
            {doctor.availability.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>

        {/* Login Prompt After Confirmation */}
        {showLoginPrompt && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="mb-2">
              Your appointment is booked! Would you like to login to track it?
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {
                  setShowLoginPrompt(false);
                  onClose();
                }}
                className="px-4 py-2 rounded border hover:bg-gray-200"
              >
                Not Now
              </button>
              <button
                onClick={() => login()}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
