import React from 'react'
import { Button } from '@/components/ui/button'
// import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
// import {
//   MoonStar,
//   //   CalendarDays,
//   //   UtensilsCrossed,
//   //   GiftIcon,
//   //   Image,
//   LocateIcon,
// } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

interface ScheduleItemProps {
  icon: string
  title: string
  time: string
}

function ScheduleItem({ icon, title, time }: ScheduleItemProps) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-rose-400/30'>
      <div className='w-14 h-14 bg-black/5 rounded-[30px] flex items-center justify-center text-5xl'>
        {icon}
      </div>
      <div className='flex-1'>
        <h3 className='text-green-950 text-xl font-medium font-sans'>{title}</h3>
      </div>
      <div className='text-green-950 text-xl'>{time}</div>
    </div>
  )
}

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
        <h3 className='text-green-950 text-xl font-medium'>{title} ↗</h3>
        <p className='text-green-950/70'>{description}</p>
      </div>
    </div>
  )
}

export function HKBUIftar() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header/Navigation */}
      {/* Header/Navigation */}
      <header className='w-full px-8 md:px-20 lg:px-40 h-20 bg-white border-b border-rose-400/30 flex justify-between items-center fixed top-0 z-50'>
        {/* MoonStar on left */}
        <div className='flex items-center'>
          <Image src='/logo.png' alt='Logo' width={85} height={50} />
        </div>

        {/* Navigation links on right */}
        {/* <nav className='flex justify-center items-center gap-8'>
          <a
            href='#about'
            className='text-green-950 text-base font-normal hover:text-green-950 transition-colors'
          >
            About
          </a>
          <a
            href='#schedule'
            className='text-green-950 text-base font-normal hover:text-green-950 transition-colors'
          >
            Schedule
          </a>
          <a
            href='#activities'
            className='text-green-950 text-base font-normal hover:text-green-950 transition-colors'
          >
            Activities
          </a>
          <a
            href='#faq'
            className='text-green-950 text-base font-normal hover:text-green-950 transition-colors'
          >
            FAQ
          </a>
          <a
            href='#feedback'
            className='text-green-950 text-base font-normal hover:text-green-950 transition-colors'
          >
            Feedback
          </a>
        </nav> */}
      </header>

      {/* Hero Section */}
      {/* Hero Section */}
      <section className='w-full px-8 md:px-20 lg:px-40 py-14 bg-[url(/green-bg.png)] bg-cover bg-center flex flex-col md:flex-row justify-center items-center gap-10 mt-20'>
        <div className='w-3/4 md:w-1/2 flex justify-center md:justify-start items-center'>
          <Image
            src='/main-pic.jpeg'
            width={800}
            height={600}
            alt='2024 iftar'
            className='rounded-md border border-2 border-rose-400/30'
          />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center text-center gap-6'>
          <h1 className='text-yellow-500 text-7xl font-pinyon font-bold'>
            Annual Iftar
          </h1>
          <div className='gap-2 flex flex-col'>
            <h3 className='text-green-950 text-xl font-sans'>
              Join us to celebrate Ramadan!
            </h3>
            <p className='text-green-950 text-base font-sans'>March 20, 2025</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-zinc-100/50 flex flex-col justify-center items-center gap-10'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-green-950 text-5xl font-pinyon font-bold leading-tight text-center max-w-lg'>
            What is Iftar?
          </h2>
        </div>
        <div className='w-full'>
          <p className='text-xl text-green-950/70 leading-relaxed font-sans'>
            Iftar is one of our most festive and memorable annual events where
            we demonstrate the excellence of our Muslim community.
            <span className='text-rose-400'>
              {' '}
              All students and broader community members are invited
            </span>
            : Muslims and non-Muslims, from on and off campus! Fasting is not
            required. This is a wonderful opportunity to invite your non-Muslim
            friends and coworkers to experience Ramadan alongside us and learn
            about Islam. We will have programming, reflections, and delicious
            food and dessert.
          </p>
        </div>
        <div className='w-3/4 flex items-center justify-center'>
          <Image
            src='/iftar-2.png'
            alt='Iftar'
            width={800}
            height={450}
            className='rounded-md border border-2 border-rose-400/30'
          />
        </div>
      </section>

      {/* Schedule Section */}
      <section
        id='schedule'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-white flex flex-col justify-center items-center gap-10'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-yellow-600 text-5xl font-pinyon font-bold text-center max-w-lg'>
            Schedule
          </h2>
        </div>

        <div className='w-full space-y-4'>
          <ScheduleItem icon='🌙' title='Iftar Time' time='6:30 PM' />
          <ScheduleItem icon='🕌' title='Prayer' time='6:40 PM' />
          <ScheduleItem icon='🎉' title='Activities' time='7:00 PM' />
          <ScheduleItem icon='🍽️' title='Dinner' time='7:30 PM' />
        </div>
      </section>

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
              <AccordionContent className='text-green-950'>
                Yes, this event is open to all HKBU students and staff.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-green-950 text-xl font-medium'>
                Is food halal?
              </AccordionTrigger>
              <AccordionContent className='text-green-950'>
                All the food has been ordered from halal certified restaurants
                and snacks are halal, too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-green-950 text-xl font-medium'>
                I want to volunteer!
              </AccordionTrigger>
              <AccordionContent className='text-green-950'>
                Send an email to Ayazhan.
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
            <label className='text-green-950 text-sm font-medium'>Email</label>
            <Input
              placeholder='Enter your email'
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
      <footer className='w-full p-14 bg-[url(/green-bg.png)] bg-cover bg-center flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-10'>
          <div className='text-center text-yellow-600 text-xl font-pinyon font-bold'>
            Contact
            <br />
            <br />
            <div className='flex gap-4 justify-center'>
              <a href='#' className='hover:text-green-950 transition-colors'>
                <span className='sr-only'>WhatsApp</span>
                📱
              </a>
              <a href='#' className='hover:text-green-950 transition-colors'>
                <span className='sr-only'>Email</span>
                ✉️
              </a>
            </div>
          </div>
          <Separator className='w-full max-w-md' />
          <div className='text-center text-green-950'>
            © 2023 Iftar Event at University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
