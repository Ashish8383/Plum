import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shiv Shankar Plumber | Affordable Plumbing Services Delhi NCR',
  description: 'Professional, affordable plumbing services in Delhi NCR. 24/7 emergency support, same-day service, experienced plumbers, transparent pricing. Call 9868013443',
  keywords: 'plumber, plumbing services, Delhi, emergency plumbing, affordable plumber, water tank, leak repair, bathroom plumbing, kitchen plumbing',
  generator: 'v0.app',
  openGraph: {
    title: 'Shiv Shankar Plumber | Professional Plumbing Services',
    description: 'Affordable plumbing services at your doorstep. Fast, reliable, experienced. Available 7 AM - 10 PM',
    type: 'website',
    url: 'https://shivshankardelhiplumber.com',
  },
  icons: {
    icon: [
      {
        url: '/icon.jpg',
        type: 'image/jpg',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
