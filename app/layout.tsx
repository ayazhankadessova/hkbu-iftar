import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Pinyon_Script, Ephesis } from 'next/font/google'
// import { SiteHeader } from '@/components/site-header'
import { Separator } from '@/components/ui/separator'

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
        {/* Footer */}
        <footer
          id='contact'
          className='w-full px-8 md:px-20 lg:px-40 pt-14 pb-10 bg-[url(/green-bg.png)] bg-cover bg-center flex justify-center items-center flex flex-col gap-8'
        >
          <div className='gap-4 items-center flex flex-col justify-center'>
            <h3 className='text-center text-yellow-600 text-5xl font-pinyon font-bold'>
              Contact
            </h3>
            <div className='flex gap-4 justify-center text-green-950 text-4xl'>
              <a
                href='https://wa.me/+77778502000'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-red-300 transition-transform transform hover:scale-125'
              >
                <i className='fab fa-whatsapp'></i>
              </a>
              <a
                href='mailto:kadessovaayazhan@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-red-300 transition-transform transform hover:scale-125'
              >
                <i className='fa-solid fa-envelope'></i>
              </a>
            </div>
          </div>

          <Separator className='w-full bg-rose-400/30' />
          <div className='flex flex-col sm:flex-row items-center gap-2 text-sm text-green-950/70'>
            <p>© 2025 Iftar at HKBU</p>
            <span className='hidden sm:inline'>•</span>
            <p>
              Made with ♥ by{' '}
              <a
                href='https://github.com/ayazhankadessova'
                target='_blank'
                rel='noopener noreferrer'
                className='text-green-950/50 hover:text-rose-400 transition-colors underline underline-offset-2 underline-thickness-1 decoration-green-950/50'
              >
                ayazhankad
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
