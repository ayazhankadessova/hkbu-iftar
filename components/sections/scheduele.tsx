import React from 'react'
import {
  scheduleData,
  ScheduleItem as ScheduleItemType,
} from '@/data/schedueleData'

function ScheduleItem({ icon, title, time }: ScheduleItemType) {
  return (
    <div className='w-full flex items-center gap-4 py-5 border-b border-rose-400/30'>
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

export function Schedule() {
  return (
    <section
      id='schedule'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-white flex flex-col justify-center items-center gap-10'
    >
      <div className='w-full flex flex-col justify-start items-center gap-6'>
        <h1 className='text-yellow-600 text-5xl font-pinyon font-bold text-center max-w-lg'>
          Schedule
        </h1>
      </div>
      <div className='w-full space-y-4'>
        {scheduleData.map((item, index) => (
          <ScheduleItem
            key={`schedule-item-${index}`}
            icon={item.icon}
            title={item.title}
            time={item.time}
          />
        ))}
      </div>
    </section>
  )
}
