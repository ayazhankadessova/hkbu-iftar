import React from 'react'
import Image from 'next/image'
import { HeroProps } from '@/types/app'

export function Hero({ title, subtitle, date }: Readonly<HeroProps>) {
  return (
    <section
      id='top'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-[url(/green-bg.png)] bg-cover bg-center flex flex-col md:flex-row justify-center items-center gap-10'
    >
      <div className='flex-1 flex flex-col gap-6'>
        <h1 className='text-yellow-600 text-7xl font-pinyon font-semibold'>
          {title}
        </h1>
        <div className='gap-2 flex flex-col sm:text-center md:text-left'>
          <h3 className='text-green-950 text-xl'>{subtitle}</h3>
          <p className='text-green-950 text-sm'>{date}</p>
        </div>
      </div>

      <div className='w-3/4 md:w-1/2 flex justify-center items-center'>
        <Image
          src='/main-pic-2.webp'
          width={800}
          height={500}
          alt='2024 iftar'
          className='rounded-md border border-2 border-rose-400/30'
        />
      </div>
    </section>
  )
}
