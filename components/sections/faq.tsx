import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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
          <AccordionItem value='item-1' className='border-b border-red-400/30'>
            <AccordionTrigger className='text-green-950 text-xl font-medium'>
              I am not fasting. Can I attend?
            </AccordionTrigger>
            <AccordionContent className='text-green-950/70'>
              Yes, this event is open to all HKBU students and staff.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2' className='border-b border-red-400/30'>
            <AccordionTrigger className='text-green-950 text-xl font-medium '>
              Is food halal?
            </AccordionTrigger>
            <AccordionContent className='text-green-950/70'>
              All the food has been ordered from halal certified restaurants and
              snacks are halal, too.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-3' className='border-b border-red-400/30'>
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
  )
}
