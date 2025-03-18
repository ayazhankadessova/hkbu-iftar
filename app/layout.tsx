import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Pinyon_Script, Ephesis } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

// Load Pinyon Script font
const pinyonScript = Pinyon_Script({
  weight: '400', // Only available in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pinyon-script',
})

// Load Ephesis font
const ephesis = Ephesis({
  weight: '400', // Only available in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ephesis',
})

export const metadata: Metadata = {
  title: 'HKBU Iftar',
  description: 'Annual HKBU Iftar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <script
          src='https://kit.fontawesome.com/eecf2e68e4.js'
          crossOrigin='anonymous'
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ephesis.variable} ${pinyonScript.variable} antialiased text-green-950`}
      >
        {children}
      </body>
    </html>
  )
}
