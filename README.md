## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Doctor Booking App

## Setup
1. `git clone https://github.com/ReactjsGod/docfinder.git`
2. `yarn install`
3. `yarn run dev`

## Features
- Browse & filter doctors by specialty & availability
- Book appointments via modal
- View booked appointments (you can only view appointments if the user is logged in)

## Tech Stack
- React Nextjs(Vite)
- Zustand for state
- TailwindCSS
- Jest + React Testing Library
- auth.js for authentication
- google oauth2
- react-icons
- typescript

## Additionals
 - Favicon was created
 - Nav bar was created
 - Footer was created
 - Authentication was implemented

## Accessibility
- Keyboard-navigable, ARIA roles, responsive design

src/
├─ app/
│  ├─ layout.tsx         # RootLayout (Server Component)
│  ├─ page.tsx           # Landing page
│  ├─ doctors/page.tsx   # Doctor directory (Client)
│  ├─ bookings/page.tsx  # My Appointments (Client)
│
├─ components/
│  ├─ Navigation.tsx     # Responsive nav bar
│  ├─ Footer.tsx
│  ├─ BookingModal.tsx
│  ├─ AppointmentList.tsx
│  └─ auth/
│     ├─ AuthButtonServer.tsx  # Server: fetch session
│     └─ AuthButton.tsx        # Client: login/logout buttons
│
├─ hooks/
│  └─ useStore.ts        # Zustand store
│
├─ mock/
│  └─ doctors.ts         # Mock doctor data
│
├─ types/
│  └─ doctors.ts           # Shared TypeScript interfaces
|  └─ general.ts
│
└─ lib/
   └─ auth/
      └─ getAuth.ts      # Server actions for signIn/signOut
