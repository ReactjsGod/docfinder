'use client'
import React from "react";
import { DoctorCardProps  } from "@/types/doctor";
import Image from "next/image";

type DoctorCard = React.FC<DoctorCardProps>;

const DoctorCard: DoctorCard = ({ doc, onBook }) => {
  return (
    <article
      role="region"
      aria-labelledby={`doc-${doc.id}-name`}
      className="p-4 border rounded-lg hover:shadow justify-center items-center text-center shadow-[2px_2px_23px_0px_rgba(0,_0,_0,_0.1)]"
    >
      <Image
      width={100}
      height={100}
        src={doc.photo}
        alt={`Photo of ${doc.name}`}
        className="w-24 h-24 rounded-full object-fit mx-auto my-4"
      />
      <h2 id={`doc-${doc.id}-name`} className="text-xl font-semibold">
        {doc.name}
      </h2>
      <p>
        {doc.specialty} · {doc.location}
      </p>
      <p>⭐ {doc.rating}</p>
      <button
        onClick={() => onBook(doc)}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:scale-3d hover:scale-110 ease-in-out duration-1000"
        aria-label={`Book appointment with ${doc.name}`}
      >
        Book Appointment
      </button>
    </article>
  );
};
export default DoctorCard;