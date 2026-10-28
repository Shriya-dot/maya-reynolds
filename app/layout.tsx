import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Mulish, Dancing_Script } from 'next/font/google'
import './globals.css'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-serif',
  display: 'swap',
})

const sans = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const script = Dancing_Script({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-script',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica',
  description:
    'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica offering anxiety therapy, trauma therapy, and support for burnout in adults. In-person sessions and secure telehealth across California.',
  keywords: [
    'Dr. Maya Reynolds',
    'therapist Santa Monica',
    'anxiety therapy Santa Monica',
    'trauma therapy Santa Monica',
    'burnout therapy',
    'clinical psychologist California',
    'California telehealth therapy',
    'EMDR Santa Monica',
  ],
  openGraph: {
    title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica',
    description:
      'Therapy for adults navigating anxiety, trauma, and burnout. In-person in Santa Monica and secure telehealth across California.',
    type: 'website',
    locale: 'en_US',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4efe4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${script.variable} scroll-smooth`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
