import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from '@/components/partials/AppHeader/AppHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Referrals',
  description: 'Manage campaign to get your business up to the customer and get referrals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppHeader />
        {children}
      </body>
    </html>
  )
}
