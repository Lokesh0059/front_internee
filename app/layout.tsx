import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Google Workspace - Work Smarter',
  description: 'Complete Google Workspace setup done right',
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
