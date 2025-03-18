'use client'

import React from 'react'
import { Schedule } from '@/components/sections/scheduele'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Activities } from '@/components/sections/activities'
import { SiteHeader } from '@/components/site-header'
import { FAQ } from '@/components/sections/faq'
import { Feedback } from '@/components/sections/feedback'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />

      <Hero
        title={'Annual Iftar'}
        subtitle={'Join us to celebrate Ramadan!'}
        date={'March 20, 2025 • HKBU'}
      />

      <About />

      <Schedule />

      <Activities />

      <FAQ />

      <Feedback />
    </div>
  )
}
