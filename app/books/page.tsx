// File: app/books/page.tsx
import React from 'react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { books } from '@/data/books-data'
import { Badge } from '@/components/ui/badge'

export default function BooksPage() {
  return (
    <div className='min-h-screen bg-zinc-50'>
      <SiteHeader useHelperDialogs={true} />

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
                        priority={true}
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
                  <h2 className='text-xl md:text-xl font-medium text-green-950 mb-2'>
                    {book.title}
                  </h2>

                  <div className='flex flex-wrap gap-2 mb-3 text-xs'>
                    <span className='text-green-950/70'>
                      By <span className='italic'>{book.author}</span>
                    </span>
                    {book.publisher && (
                      <span className='text-green-950/70'>
                        • {book.publisher}
                      </span>
                    )}
                  </div>

                  <p className='text-green-950/70 mb-4 text-sm whitespace-pre-line'>
                    {book.description}
                  </p>

                  <div className='mt-auto'>
                    {book.genre.split(', ').map((genre, index) => (
                      <Badge key={index} className='mr-2'>
                        {genre}
                      </Badge>
                    ))}
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
