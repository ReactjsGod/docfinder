import { create } from 'zustand'
import { Appointment, Doctor, StoreState } from '@/types/doctor'

export const useStore = create<StoreState>((set) => ({
  doctors: [],
  filters: {
    specialty: 'All',
    availableOnly: false,
  },
  appointments: [],

  loadDoctors: (list: Doctor[]) => set({ doctors: list }),

  setFilter: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value,
      },
    })),

  addAppointment: (appt: Appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appt],
    })),
}));