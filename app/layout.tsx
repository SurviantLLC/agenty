import * as React from 'react'
import './globals.css'
import { Sidebar } from '@/components/sidebar'

export { metadata } from './metadata'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-50">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}


