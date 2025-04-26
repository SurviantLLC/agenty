import * as React from 'react'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'

import { Inter, Lexend } from 'next/font/google'

export { metadata } from './metadata'

// Load fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lexend = Lexend({ 
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${lexend.variable}`}>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex h-screen bg-background">
            <Sidebar />
            <main className="flex-1 p-6 md:p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


