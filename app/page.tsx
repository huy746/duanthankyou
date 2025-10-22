'use client'

import { useEffect, useState } from 'react'

export default function Page() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const timeString = now.toLocaleString('vi-VN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 font-sans text-center px-4">
      <h1 className="text-4xl font-bold mb-2 text-teal-300">Thank you!</h1>
      <p className="text-slate-400 mb-4">Cảm ơn các bạn đã theo dõi.</p>
      <p className="text-slate-400 text-sm">Thời gian hiện tại:</p>
      <p className="text-sky-400 text-lg font-mono mt-1">{timeString}</p>
      <footer className="text-slate-500 text-xs mt-6">Next.js + Vercel</footer>
    </main>
  )
      }
    
