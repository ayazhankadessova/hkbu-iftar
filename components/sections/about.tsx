import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export function About() {
  return (
    <section
      id='about'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-zinc-100/50 flex flex-col justify-center items-center gap-10'
    >
      <div className='w-full flex flex-col justify-start items-center gap-6'>
        <h1 className='text-green-950 text-5xl font-pinyon font-bold leading-tight text-center max-w-lg'>
          What is Iftar?
        </h1>
      </div>
      <div className='w-full flex flex-col gap-6'>
        <p className='text-lg text-green-950/70 leading-relaxed font-sans'>
          Iftar, the traditional breaking of the fast at sunset during the holy
          month of Ramadan, represents a time of gratitude and community.
        </p>

        <p className='text-lg text-green-950/70 leading-relaxed font-sans'>
          It is our most joyous annual celebration that showcases the vibrant
          spirit of our Muslim community.{' '}
          <span className='text-rose-400'>Everyone is warmly welcome</span>:
          students and community members, Muslims and non-Muslims alike, from
          both on and off campus! No need to be fasting to participate.
        </p>

        <p className='text-lg text-green-950/70 leading-relaxed'>
          This gathering offers a perfect opportunity to bring your friends and
          colleagues to share in the{' '}
          <span className='text-rose-400'>Ramadan experience</span>, fostering
          meaningful connections and cultural understanding.
        </p>
        <p className='text-lg text-green-950/70 leading-relaxed'>
          Together, we will{' '}
          <span className='text-rose-400'>create memorable moments</span>{' '}
          through engaging activities, heartfelt reflections, and a delicious
          feast that celebrates our diverse community bonds.
        </p>

        <p className='text-lg text-green-950/70 leading-relaxed'>
          This cherished tradition is generously supported by the{' '}
          <span className='text-rose-400'>GES</span> (Global Engagement Squad)
          at Hong Kong Baptist University, with dedicated assistance from our{' '}
          <span className='text-rose-400'>volunteers</span> and the{' '}
          <span className='text-rose-400'>wider community.</span>{' '}
        </p>
      </div>
      <div className='w-3/4 flex items-center justify-center'>
        <Carousel className='w-full max-w-xs'>
          <CarouselContent>
            {Array.from({ length: 9 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className='p-1'>
                  <Image
                    src={`/iftar-gallery/iftar-${index + 1}.webp`}
                    alt={`Iftar ${index + 1}`}
                    width={800}
                    height={450}
                    className='rounded-md border border-2 border-rose-400/30'
                    priority={index < 10}
                    quality={index === 0 ? 100 : 60}
                    loading={index < 10 ? 'eager' : 'lazy'}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
