import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './globals.css'
import { Pinyon_Script, Montserrat } from 'next/font/google'
import { SiteFooter } from '@/components/site-footer'


// Load Pinyon Script font
const pinyonScript = Pinyon_Script({
  weight: '400', // Only available in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pinyon-script',
})

// Load Raleway font
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
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
        className={` ${pinyonScript.variable} ${montserrat.variable} antialiased text-green-950`}
      >
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
