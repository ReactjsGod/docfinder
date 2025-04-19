import { StaticImageData } from "next/image";
import { UserProps } from "./general";

export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    rating: number;
    availability: string[];
    location: string;
    photo: string | StaticImageData;
  }
  
  
  // Represents a confirmed appointment
  export interface Appointment {
    doctor: Doctor;
    date: string;
    time: string;
    firstName: string;
    lastName: string;
  }
  
  
  // Filters used for directory view
  export interface Filters {
    specialty: string;
    availableOnly: boolean;
  }
  
  // Zustand store state shape
  export interface StoreState {
    doctors: Doctor[];
    filters: Filters;
    appointments: Appointment[];
  
    loadDoctors: (list: Doctor[]) => void;
    setFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
    addAppointment: (appt: Appointment) => void;
  }
  
  // Component props
  export interface DoctorCardProps {
    doc: Doctor;
    onBook: (doc: Doctor) => void;
  }
  
  export interface FilterBarProps {
    specialties: string[];
    filters: Filters;
    onFilter: <K extends keyof Filters>(key: K, value: Filters[K]) => void;
  }
  
  export interface BookingModalProps {
    doctor: Doctor;
    onClose: () => void;
    onConfirm: (appointment: Appointment) => void;
    user : UserProps | null;
  }
  
  export interface AppointmentsListProps {
    appointments: Appointment[];
  }
  