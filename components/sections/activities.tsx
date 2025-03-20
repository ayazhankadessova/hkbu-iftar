'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ActivityItemProps, activitiesData } from '@/data/activities-data'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogHeader,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog'
import { Maximize2, X, ArrowUpRight } from 'lucide-react'

function ActivityItem({
  id,
  title,
  description,
  link,
  href,
}: ActivityItemProps) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-rose-400/30'>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className='w-24 h-24 rounded-md flex items-center justify-center cursor-pointer transition-transform hover:scale-105 relative group'>
            <Image
              src={`/activities/${id}.png`}
              alt='Activity'
              width={200}
              height={200}
              className='w-full h-full object-cover rounded-md border border-black/5'
            />
            <div className='absolute bottom-2 right-2 opacity-80 group-hover:opacity-100 transition-opacity'>
              <div className='bg-yellow-600/50 p-1 rounded-full'>
                <Maximize2 className='w-3 h-3 text-white' />
              </div>
            </div>
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className='max-w-[70vw] sm:max-w-[65vw] md:max-w-[60vw] lg:max-w-[40vw] rounded-md'>
          <AlertDialogHeader className='p-0'>
            <div className='relative'>
              <Image
                src={`/activities/${id}.png`}
                alt='Activity'
                width={800}
                height={600}
                className='w-full h-auto rounded-lg'
              />
              <AlertDialogCancel className='absolute top-1 right-2 rounded-full w-4 h-4 p-3 bg-rose-400/70 hover:bg-rose-400/90 border-2 border-black/5'>
                <X className='h-4 w-4 text-green-950' />
              </AlertDialogCancel>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className='sm:justify-center'>
            <p className='text-sm text-muted-foreground'>{title}</p>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className='flex-1 space-y-2'>
        {link && href ? (
          <Link href={href} className='group'>
            <h3 className='text-green-950 text-xl font-medium'>
              {title}{' '}
              {link && (
                <span className='text-sm font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
                  <ArrowUpRight className='w-4 h-4 text-green-950' />
                </span>
              )}
            </h3>
          </Link>
        ) : (
          <h3 className='text-green-950 text-xl font-medium'>
            {title}
          </h3>
        )}

        <p className='text-green-950/70 text-sm'>{description}</p>
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
        <h1 className='text-yellow-600 text-5xl font-pinyon font-bold text-center max-w-lg'>
          Activities
        </h1>
      </div>

      <div className='w-full space-y-8'>
        {activitiesData.map((item, index) => (
          <ActivityItem
            key={`activity-item-${index}`}
            id={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            href={item.href}
          />
        ))}
      </div>
    </section>
  )
}
