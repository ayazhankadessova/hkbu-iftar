import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  MoonStar,
//   CalendarDays,
//   UtensilsCrossed,
//   GiftIcon,
//   Image,
} from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

interface ScheduleItemProps {
  icon: string
  title: string
  time: string
}

function ScheduleItem({ icon, title, time }: ScheduleItemProps) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-red-400/50'>
      <div className='w-14 h-14 bg-black/5 rounded-[30px] flex items-center justify-center text-4xl'>
        {icon}
      </div>
      <div className='flex-1'>
        <h3 className='text-lime-900 text-xl font-medium'>{title}</h3>
      </div>
      <div className='text-lime-900 text-xl'>{time}</div>
    </div>
  )
}

// Activity Item Component
interface ActivityItemProps {
  title: string
  description: string
  time: string
}

function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <Card className='w-full border-b border-red-400/50'>
      <CardContent className='p-4 flex items-start gap-4'>
        <div className='w-24 h-24 bg-zinc-300/50 rounded-md flex items-center justify-center'>
          {/* Placeholder for image */}
        </div>
        <div className='flex-1 space-y-2'>
          <h3 className='text-lime-900 text-xl font-medium'>{title} ↗</h3>
          <p className='text-stone-500'>{description}</p>
        </div>
        <div className='text-lime-900 text-xl text-right'>{time}</div>
      </CardContent>
    </Card>
  )
}

export function HKBUIftar() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Header/Navigation */}
      <header className='w-full h-20 bg-white shadow-md flex justify-center items-center gap-5 fixed top-0 z-50'>
        <div className='w-10 h-10 bg-black/10 rounded-full flex items-center justify-center'>
          <MoonStar className='h-6 w-6 text-lime-900' />
        </div>
        <nav className='flex justify-center items-center gap-10'>
          <a
            href='#'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            Home
          </a>
          <a
            href='#about'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            About
          </a>
          <a
            href='#schedule'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            Schedule
          </a>
          <a
            href='#activities'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            Activities
          </a>
          <a
            href='#faq'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            FAQ
          </a>
          <a
            href='#feedback'
            className='text-lime-900 text-base font-normal hover:text-orange-400 transition-colors'
          >
            Feedback
          </a>
        </nav>
        <div className='w-10 h-10 bg-black/10 rounded-full flex items-center justify-center'>
          <MoonStar className='h-6 w-6 text-lime-900' />
        </div>{' '}
      </header>

      {/* Hero Section */}
      <section className='w-full px-10 md:px-44 py-14 bg-lime-100/90 flex flex-col md:flex-row justify-center items-center gap-14 mt-20'>
        <div className='flex-1 flex flex-col justify-start items-start gap-6'>
          <h1 className='text-orange-400 text-4xl font-bold leading-tight'>
            Iftar at HKBU
          </h1>
          <div>
            <p className='text-lime-900 text-base'>
              Annual iftar{' '}
              <span className='text-red-400'>
                @ Hong Kong Baptist University
              </span>
              <br />
              March 20, 2025
              <br />
              6pm
            </p>
          </div>
        </div>
        <Separator className='my-8 md:hidden' />
        <div className='w-full md:w-1/2 bg-zinc-300/50 rounded-md aspect-video flex items-center justify-center'>
          <p className='text-center text-sm text-black/70'>
            Join us for an unforgettable evening of communal iftar to celebrate
            togetherness.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='w-full px-10 md:px-44 py-14 bg-stone-50 flex flex-col justify-center items-center gap-14'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-orange-400 text-4xl font-bold leading-tight text-center max-w-lg'>
            What is Iftar?
          </h2>
        </div>
        <div className='w-full'>
          <p className='text-xl leading-relaxed'>
            Iftar is one of our most festive and memorable annual events where
            we demonstrate the excellence of our Muslim community.
            <span className='text-red-400'>
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
        <Separator className='my-8' />
        <div className='w-full aspect-[16/9] bg-zinc-300/50 rounded-md flex items-center justify-center'>
          <p className='text-center text-sm text-black/70'>
            Join us for an unforgettable evening of communal iftar to celebrate
            togetherness.
          </p>
        </div>
      </section>

      {/* Schedule Section */}
      <section
        id='schedule'
        className='w-full px-10 md:px-44 py-14 bg-white flex flex-col justify-center items-center gap-14'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-orange-400 text-4xl font-bold leading-tight text-center max-w-lg'>
            Event Schedule
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
        className='w-full px-10 md:px-44 py-14 bg-lime-100 flex flex-col justify-center items-center gap-14'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-orange-400 text-4xl font-bold leading-tight text-center max-w-lg'>
            Event Activities
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
        className='w-full px-10 md:px-44 py-14 bg-stone-50 flex flex-col justify-center items-center gap-14'
      >
        <div className='w-full flex flex-col justify-start items-center gap-6'>
          <h2 className='text-orange-400 text-4xl font-bold leading-tight text-center max-w-lg'>
            FAQ
          </h2>
        </div>

        <div className='w-full space-y-4 py-5'>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger className='text-lime-900 text-xl font-medium'>
                I am not fasting. Can I attend?
              </AccordionTrigger>
              <AccordionContent className='text-orange-400'>
                Yes, this event is open to all HKBU students and staff.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-2'>
              <AccordionTrigger className='text-lime-900 text-xl font-medium'>
                Is food halal?
              </AccordionTrigger>
              <AccordionContent className='text-orange-400'>
                All the food has been ordered from halal certified restaurants
                and snacks are halal, too.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value='item-3'>
              <AccordionTrigger className='text-lime-900 text-xl font-medium'>
                I want to volunteer!
              </AccordionTrigger>
              <AccordionContent className='text-orange-400'>
                Send an email to Ayazhan.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Feedback Section */}
      <section
        id='feedback'
        className='w-full px-10 md:px-44 py-14 bg-white flex flex-col md:flex-row justify-center items-start gap-14'
      >
        <div className='flex-1 flex flex-col justify-start items-start gap-6'>
          <h2 className='text-orange-400 text-4xl font-bold leading-tight'>
            Feedback Form
          </h2>
          <p className='text-lime-900'>
            Share your thoughts and suggestions with us.
          </p>
        </div>

        <div className='flex-1 flex flex-col justify-center items-start gap-10 w-full'>
          <div className='w-full space-y-2'>
            <label className='text-lime-900 text-sm font-medium'>Name</label>
            <Input
              placeholder='Enter your name'
              className='bg-white border border-black/10'
            />
          </div>

          <div className='w-full space-y-2'>
            <label className='text-lime-900 text-sm font-medium'>Email</label>
            <Input
              placeholder='Enter your email'
              className='bg-white border border-black/10'
            />
          </div>

          <div className='w-full space-y-2'>
            <label className='text-lime-900 text-sm font-medium'>
              Feedback
            </label>
            <Textarea
              placeholder='Leave your feedback here'
              className='bg-white border border-black/10'
            />
          </div>

          <Button className='bg-red-300 hover:bg-red-400 text-white'>
            Submit Feedback
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='w-full p-14 bg-lime-100 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-14'>
          <div className='text-center text-lime-900 text-xl'>
            Contact
            <br />
            <br />
            <div className='flex gap-4 justify-center'>
              <a href='#' className='hover:text-orange-400 transition-colors'>
                <span className='sr-only'>WhatsApp</span>
                📱
              </a>
              <a href='#' className='hover:text-orange-400 transition-colors'>
                <span className='sr-only'>Email</span>
                ✉️
              </a>
            </div>
          </div>
          <Separator className='w-full max-w-md' />
          <div className='text-center text-lime-900'>
            © 2023 Iftar Event at University. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
