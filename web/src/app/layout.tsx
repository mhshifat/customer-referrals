import './globals.css'
import { Inter } from 'next/font/google'
import AppHeader from '@/components/partials/AppHeader/AppHeader'
import Providers from '@/providers'
import AppCanvas from '@/components/partials/AppCanvas/AppCanvas'

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
      <body suppressHydrationWarning={true} className={inter.className}>
        <Providers>
          <AppHeader />
          <main style={{ padding: 'var(--spacing-ly)', width: 'var(--max-width)', margin: '0 auto' }}>
            <AppCanvas />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
