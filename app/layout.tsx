import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fortgate - Compliance is the missing piece for Crypto\'s Mass Adoption',
  description: 'Fortgate provides intelligent AML infrastructure that protects protocols and empowers institutions to operate safely on-chain.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

