import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'
import { clmx } from '@/utils'
import Provider from '@/utils/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'quiz',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${clmx(inter.className)} text-slate-700 `}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
