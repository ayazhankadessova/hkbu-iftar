"use client"

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import { Schedule } from '@/components/sections/scheduele'
import { Hero } from '@/components/sections//hero'
import { About } from '@/components/sections/about'
import { SiteHeader } from '@/components/site-header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Link from 'next/link' 

// Activity Item Component
interface ActivityItemProps {
  title: string
  description: string
  time: string
}

function ActivityItem({ title, description }: ActivityItemProps) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-rose-400/30'>
      <div className='w-24 h-24 bg-zinc-300/50 rounded-md flex items-center justify-center'>
        <Image
          src='https://picsum.photos/200'
          alt='Activity'
          width={200}
          height={200}
          className='w-full h-full object-cover rounded-md'
        />
      </div>
      <div className='flex-1 space-y-2'>
        <Link href={'/public'} className='block group'>
          <h3 className='text-green-950 text-xl font-medium'>
            {title} <i className='fas fa-arrow-up-right'></i>
            {/* <i className='fa-solid fa-arrow-up-right'></i> */}
            <span className='text-sm font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
              <i className='fa-regular  fa-arrow-up-right-from-square'></i>{' '}
            </span>
          </h3>
        </Link>
        <p className='text-green-950/70'>{description}</p>
      </div>
    </div>
  )
}

export function HKBUIftar() {

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

      {/* Activities Section */}
      <section
        id='activities'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-[url(/green-bg.png)] bg-cover bg-center flex flex-col justify-center items-center gap-10'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-yellow-600 text-5xl font-pinyon font-bold text-center max-w-lg'>
            Activities
          </h2>
        </div>

        <div className='w-full space-y-8 py-5'>
          <ActivityItem
            title='Sharing'
            description='lorem ipsumlorem ipsumlorem ipsumlorem ipsum.'
            time='6:30 PM'
          />
          <ActivityItem
            title='Kahoot'
            description='lorem ipsumlorem ipsumlorem ipsumlorem ipsum.'
            time='6:30 PM'
          />
          <ActivityItem
            title='Lucky draw'
            description='lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'
            time='6:30 PM'
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id='faq'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-zinc-100/50 flex flex-col justify-center items-center gap-10'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-green-950 text-5xl font-pinyon font-bold text-center max-w-lg'>
            FAQ
          </h2>
        </div>

        <div className='w-full space-y-4 py-5'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem
              value='item-1'
              className='border-b border-red-400/30'
            >
              <AccordionTrigger className='text-green-950 text-xl font-medium'>
                I am not fasting. Can I attend?
              </AccordionTrigger>
              <AccordionContent className='text-green-950/70'>
                Yes, this event is open to all HKBU students and staff.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-2'
              className='border-b border-red-400/30'
            >
              <AccordionTrigger className='text-green-950 text-xl font-medium '>
                Is food halal?
              </AccordionTrigger>
              <AccordionContent className='text-green-950/70'>
                All the food has been ordered from halal certified restaurants
                and snacks are halal, too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value='item-3'
              className='border-b border-red-400/30'
            >
              <AccordionTrigger className='text-green-950 text-xl font-medium'>
                I want to volunteer!
              </AccordionTrigger>
              <AccordionContent className='text-green-950/70'>
                Send us an{' '}
                <a
                  href='mailto:kadessovaayazhan@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-green-950/70 hover:text-red-300 transition-colors underline underline-offset-2 underline-thickness-1'
                >
                  email
                </a>{' '}
                or text us on{' '}
                <a
                  href='https://wa.me/+77778502000'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-red-300 transition-transform transform hover:scale-125 underline underline-offset-2 underline-thickness-1'
                >
                  WhatsApp
                </a>
                .
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        id='feedback'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-white flex flex-col md:flex-row justify-center items-start gap-10'
      >
        <div className='flex-1 flex flex-col justify-start items-start gap-6'>
          <h2 className='text-yellow-600 text-5xl font-pinyon font-bold leading-tight'>
            Feedback Form
          </h2>
          <p className='text-green-950'>
            Share your thoughts and suggestions with us.
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-center items-start gap-10 w-full'>
          <div className='w-full space-y-2'>
            <label className='text-green-950 text-sm font-medium'>Name</label>
            <Input
              placeholder='Enter your name'
              className='bg-white border border-black/10'
            />
          </div>

          <div className='w-full space-y-2'>
            <label className='text-green-950 text-sm font-medium'>
              WhatsApp Number
            </label>
            <Input
              placeholder='Enter your WhatsApp Number'
              className='bg-white border border-black/10'
            />
          </div>

          <div className='w-full space-y-2'>
            <label className='text-green-950 text-sm font-medium'>
              Feedback
            </label>
            <Textarea
              placeholder='Leave your feedback here'
              className='bg-white border border-black/10'
            />
          </div>

          <Button className='bg-red-300 hover:bg-rose-400 text-white'>
            Submit Feedback
          </Button>
        </div>
      </section>

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
    </div>
  )
}
