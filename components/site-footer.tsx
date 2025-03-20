'use client'
import React from 'react'
import { Separator } from '@/components/ui/separator'

export function SiteFooter() {

  return (
    <footer
      id='contact'
      className='w-full px-8 md:px-20 lg:px-40 pt-14 pb-10 bg-[url(/green-bg.png)] bg-cover bg-center flex justify-center items-center flex flex-col gap-8'
    >
      <div className='gap-4 items-center flex flex-col justify-center'>
        <h1 className='text-center text-yellow-600 text-5xl font-pinyon font-bold'>
          Contact
        </h1>
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
            href='https://ayazhankad.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='text-green-950/50 hover:text-rose-400 transition-colors underline underline-offset-2 underline-thickness-1 decoration-green-950/50'
          >
            ayazhankad
          </a>
        </p>
      </div>
    </footer>
  )
}
