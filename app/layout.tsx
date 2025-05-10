import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki Amba',
  description: 'Woilah rek!!!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-b from-slate-800 to-black bg-no-repeat bg-cover bg-fixed text-white'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
