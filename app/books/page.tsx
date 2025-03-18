// File: app/books/page.tsx
import React from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'

// Define the Book type
interface Book {
  id: number
  title: string
  author: string
  publisher?: string
  description: string
  genre: string
  imageUrl: string
}

// Array of books
const books: Book[] = [
  {
    id: 1,
    title: 'Islam: A Very Short Introduction',
    author: 'Malise Ruthven',
    publisher: 'Oxford University Press',
    description:
      'A concise and informative introduction to Islam, covering its history, beliefs, practices, and modern interpretations.',
    genre: 'Religion, Non-fiction',
    imageUrl: '/books/islam-intro.jpg', // Make sure to add these images to your public folder
  },
  {
    id: 2,
    title: 'The Heart of the Quran: Commentary of Surah Yasin',
    author: 'Asim Khan',
    description:
      'An insightful commentary on Surah Yasin, one of the most revered chapters of the Quran, explaining its profound meanings and lessons.',
    genre: 'Religious Commentary',
    imageUrl: '/books/the-heart-of-quran.webp',
  },
  {
    id: 3,
    title: 'Muhammad: A Very Short Introduction',
    author: 'Jonathan A.C. Brown',
    publisher: 'Oxford University Press',
    description:
      'A concise biography of Prophet Muhammad, exploring his life, teachings, and lasting impact on world history.',
    genre: 'Biography, Religion',
    imageUrl: '/books/muhammad-saw-intro.jpg',
  },
  {
    id: 4,
    title: 'The Productive Muslim',
    author: 'Mohammad Fares',
    description:
      'A practical guide that combines Islamic teachings with modern productivity strategies to help Muslims lead balanced, productive lives.',
    genre: 'Self-help, Spirituality',
    imageUrl: '/books/productive-Muslim.webp',
  },
  {
    id: 5,
    title: 'Islamic Finance',
    author: 'Muhammad Elbruz, Maxence Clairmidi',
    description:
      'An introduction to Islamic financial principles and practices, explaining how they differ from conventional finance systems.',
    genre: 'Finance, Business',
    imageUrl: '/books/islamic-finance.jpg',
  },
  {
    id: 6,
    title: 'As Long as the Lemon Trees Grow',
    author: 'Zoulfa Katouh',
    description:
      'A moving novel set during the Syrian revolution, exploring themes of courage, resilience, and hope amid conflict.',
    genre: 'Fiction, Young Adult',
    imageUrl: '/books/lemon-trees-grow.webp',
  },
]

export default function BooksPage() {
  return (
    <div className='min-h-screen bg-zinc-50'>
      <SiteHeader useHelperDialogs={true}/>

      <section
        id='books'
        className='w-full px-8 md:px-20 lg:px-40 py-14 bg-[url(/green-bg.png)] bg-cover bg-center flex flex-col justify-center items-center'
      >
        <h1 className='text-4xl md:text-5xl font-pinyon text-yellow-600 text-center mb-8'>
          Lucky Draw Books
        </h1>
        <p className='text-green-950/70 text-center max-w-2xl mx-auto mb-12'>
          Participate in our lucky draw for a chance to win one of these
          enlightening books about Islam and Muslim culture.
        </p>

        <div className='grid grid-cols-1 gap-8'>
          {books.map((book) => (
            <div
              key={book.id}
              className='bg-white rounded-lg shadow-md overflow-hidden border border-rose-400/20'
            >
              <div className='flex flex-col md:flex-row'>
                {/* Book image - full width on mobile, fixed width on desktop */}
                <div className='w-full md:w-1/4 h-[240px] md:h-auto relative'>
                  <div className='w-full h-full bg-zinc-200 flex items-center justify-center'>
                    {/* If you don't have actual images yet, this displays a placeholder */}
                    {book.imageUrl ? (
                      <Image
                        src={book.imageUrl}
                        alt={book.title}
                        fill
                        className='object-cover'
                        sizes='(max-width: 768px) 100vw, 25vw'
                      />
                    ) : (
                      <span className='text-zinc-400 text-sm'>Book Cover</span>
                    )}
                  </div>
                </div>

                {/* Book details */}
                <div className='p-6 md:w-3/4'>
                  <h2 className='text-xl md:text-xl font-semibold text-green-950 mb-2'>
                    {book.title}
                  </h2>

                  <div className='flex flex-wrap gap-2 mb-3 text-sm'>
                    <span className='text-green-950/70'>
                      By <span className='italic'>{book.author}</span>
                    </span>
                    {book.publisher && (
                      <span className='text-green-950/70'>
                        • {book.publisher}
                      </span>
                    )}
                  </div>

                  <p className='text-green-950/70 mb-4 text-md'>
                    {book.description}
                  </p>

                  <div className='mt-auto'>
                    <span className='inline-block bg-yellow-500/30 text-green-950 text-xs px-3 py-1 rounded-full'>
                      {book.genre}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
