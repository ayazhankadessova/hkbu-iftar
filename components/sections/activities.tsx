import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ActivityItemProps, activitiesData } from '@/data/activities-data'

function ActivityItem({ id, title, description, link }: ActivityItemProps) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-rose-400/30'>
      <div className='w-24 h-24 rounded-md flex items-center justify-center'>
        <Image
          src={`/activities/${id}.png`}
          alt='Activity'
          width={200}
          height={200}
          className='w-full h-full object-cover rounded-md border border-black/5'
        />
      </div>
      <div className='flex-1 space-y-2'>
        <Link href={'/public'} className='block group'>
          <h3 className='text-green-950 text-xl font-medium'>
            {title}
            {link && (
              <span className='text-sm font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
                <i className='fa-regular fa-arrow-up-right-from-square'></i>{' '}
              </span>
            )}
          </h3>
        </Link>
        <p className='text-green-950/70'>{description}</p>
      </div>
    </div>
  )
}

export function Activities() {
  return (
    <section
      id='activities'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-[url(/green-bg.png)] bg-cover bg-center flex flex-col justify-center items-center gap-10'
    >
      <div className='w-full flex flex-col justify-start items-center gap-6'>
        <h2 className='text-yellow-600 text-5xl font-pinyon font-bold text-center max-w-lg'>
          Activities
        </h2>
      </div>

      <div className='w-full space-y-8'>
        {activitiesData.map((item, index) => (
          <ActivityItem
            key={`activity-item-${index}`}
            id={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  )
}
