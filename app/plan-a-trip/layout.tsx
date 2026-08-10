import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plan a Trip',
  description:
    'Plan a free, no-obligation trip for your student group. A Landmark Travel Consultant hand-builds a custom, curriculum-aligned itinerary around your destination, dates, grade level, and budget.',
  alternates: { canonical: '/plan-a-trip/' },
  openGraph: {
    title: 'Plan a Trip | Landmark Educational Tours',
    description: 'Tell us about your trip and a Landmark Travel Consultant will build a custom plan for your student group.',
    url: '/plan-a-trip/',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
