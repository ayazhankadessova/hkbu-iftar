import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqQuestions } from '@/data/faq-data'

export function FAQ() {
  return (
    <section
      id='faq'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-zinc-100/50 flex flex-col justify-center items-center gap-10'
    >
      <div className='w-full flex flex-col justify-start items-center gap-6'>
        <h1 className='text-green-950 text-5xl font-pinyon font-bold text-center max-w-lg'>
          FAQ
        </h1>
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
