import './globals.css'

export const metadata = {
  title: 'Restaurant & Business Consulting',
  description: 'We help restaurants and businesses increase revenue, improve operations, and scale profitably.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}