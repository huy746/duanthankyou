import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Trang cảm ơn đơn giản bằng Next.js + Vercel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
