// File: components/hero.tsx
'use client'

import { MoonStar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Hero() {
  return (
    <div
      className='relative overflow-hidden bg-cover bg-center py-32'
      style={{ backgroundImage: "url('/images/iftar-bg.jpg')" }}
    >
      <div className='absolute inset-0 bg-slate-900/70'></div>
      <div className='container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-white'>
        <MoonStar className='h-16 w-16 text-amber-400 mb-6 animate-pulse' />
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4'>
          University Iftar 2025
        </h1>
        <p className='text-xl md:text-2xl text-center max-w-2xl mx-auto mb-8 text-slate-200'>
          Join us for a beautiful evening of community, reflection, and
          celebration
        </p>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Button className='bg-emerald-600 hover:bg-emerald-700 text-white'>
            <Link href='/register'>Register Now</Link>
          </Button>
          <Button
            variant='outline'
            className='text-white border-white hover:bg-white/20'
          >
            <Link href='/schedule'>View Schedule</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
