import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Restaurant & Business Consulting Group',
  description: 'We help restaurants and businesses in every industry increase revenue, improve operations, and scale profitably.',
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}