import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqQuestions = [
  {
    id: 'item-1',
    question: 'I am not fasting. Can I attend?',
    answer: 'Yes, this event is open to all HKBU students and staff.',
  },
  {
    id: 'item-2',
    question: 'It is my first iftar. What should I know before?',
    answer: (
      <>
        We will have a presentation before dinner where you can learn about
        Ramadan. If you want to read something beforehand, check out this{' '}
        <a
          href='https://www.thekitchn.com/what-you-should-know-before-attending-your-first-iftar-245656'
          target='_blank'
          rel='noopener noreferrer'
          className='text-green-950/70 hover:text-red-300 transition-colors underline underline-offset-2 underline-thickness-1'
        >
          article
        </a>{' '}
        and surf the internet.
      </>
    ),
  },
  {
    id: 'item-3',
    question: 'Is food halal?',
    answer:
      'All the food has been ordered from halal certified restaurants and snacks are halal, too.',
  },
  {
    id: 'item-4',
    question: 'What is the dress code?',
    answer:
      'Casual clothing is welcome, but please dress modestly to respect the occasion. Avoid tight or revealing outfits, as modesty is important during this religious rite of Ramadan.',
  },
  {
    id: 'item-5',
    question: 'I want to volunteer!',
    answer: (
      <>
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
      </>
    ),
  },
]

export function FAQ() {
  return (
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
          {faqQuestions.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className='border-b border-red-400/30'
            >
              <AccordionTrigger className='text-green-950 text-xl font-medium'>
                {item.question}
              </AccordionTrigger>
              <AccordionContent className='text-green-950/70'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
