import React from 'react'

interface FAQItem {
  id: string
  question: string
  answer: React.ReactNode
}

export const faqQuestions: FAQItem[] = [
  {
    id: 'item-1',
    question: 'I am not fasting. Can I attend?',
    answer:
      'Yes, this event is open to all HKBU students and staff. Fasting is not required.',
  },
  {
    id: 'item-2',
    question: 'It is my first iftar. What should I know before?',
    answer: (
      <>
        We will have a presentation before dinner where you can learn about
        Ramadan. If you want to check something beforehand, watch this{' '}
        <a
          href='https://www.youtube.com/watch?v=NiHYmSwPLks'
          target='_blank'
          rel='noopener noreferrer'
          className='text-green-950/70 hover:text-red-300 transition-colors underline underline-offset-2 underline-thickness-1'
        >
          video
        </a>
        , listen to this{' '}
        <a
          href='https://www.scmp.com/yp/learn/learning-resources/listening/article/3255053/5-minute-listening-what-ramadan-and-how-do-muslims-spend-holy-month'
          target='_blank'
          rel='noopener noreferrer'
          className='text-green-950/70 hover:text-red-300 transition-colors underline underline-offset-2 underline-thickness-1'
        >
          5-min intro on Ramadan
        </a>{' '}
        from SCMP, read this{' '}
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
    question: 'Will there be a place to pray?',
    answer: (
      <>
        We are planning to use the area behind the stage to provide a prayer
        space, separate for men and women. Please bring your own prayer mat if
        you have one. If you prefer a quiet place, you can use the room in{' '}
        <a
          href='https://sa.hkbu.edu.hk/en/cla/student-amenities-and-welfare/quiet-rooms.html'
          target='_blank'
          rel='noopener noreferrer'
          className='text-green-950/70 hover:text-red-300 transition-colors underline underline-offset-2 underline-thickness-1'
        >
          DLB705
        </a>{' '}
        for your prayer.
      </>
    ),
  },
  {
    id: 'item-5',
    question: 'What is the dress code?',
    answer:
      'Casual clothing is welcome, but please dress modestly to respect the occasion. Avoid tight or revealing outfits (shorts, tank tops, etc.), as modesty is important during this religious rite of Ramadan.',
  },
  {
    id: 'item-6',
    question: 'I want to volunteer!',
    answer: (
      <>
        Any help is appreciated! Text us on{' '}
        <a
          href='https://wa.me/+77778502000'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-red-300 transition-transform transform hover:scale-125 underline underline-offset-2 underline-thickness-1'
        >
          WhatsApp
        </a>
        , or simply come to AAB 3rd floor at 4.30pm on the day of the event to
        help set up the tables, food, and decorations.
      </>
    ),
  },
]
