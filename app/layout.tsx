import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HubHeader } from '@/components/hub-header'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Salem Brick Trials',
  description:
    'A public, organized record of documents and information regarding the Bricks & Minifigs situation involving Reckless Ben.',

  openGraph: {
    title: 'Salem Brick Trials',
    description:
      'A public, organized record of documents and information regarding the Bricks & Minifigs situation involving  Reckless Ben.',
    type: 'website',
    url: 'https://salembricktrials.com',
    images: [
      {
        url: 'https://img.youtube.com/vi/wscQpkcwgNU/maxresdefault.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview image',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Salem Brick Trials',
    description:
      'A public, organized record of documents and information regarding the Bricks & Minifigs situation involving  Reckless Ben.',
    images: ['https://img.youtube.com/vi/wscQpkcwgNU/maxresdefault.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark bg-background">
      <body className="font-sans antialiased">
        <HubHeader />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
