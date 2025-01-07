import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Checkly Pay Calculator',
  description: 'Calculate your salary at Checkly based on your role, seniority, performance, and location.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
