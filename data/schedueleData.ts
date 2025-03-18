// data/scheduleData.ts
export interface ScheduleItem {
  icon: string
  title: string
  time: string
}

export const scheduleData: ScheduleItem[] = [
  { icon: '📝', title: 'Registration', time: '6:00 PM' },
  { icon: '👥', title: 'Presentation & Discussion', time: '6:10 PM' },
  { icon: '🕌', title: 'Adhan', time: '6:37 PM' },
  { icon: '🍽️', title: 'Dinner', time: '6:50 PM' },
  { icon: '🎮', title: 'Activities', time: '7:15 PM' },
  { icon: '🎁', title: 'Lucky Draw', time: '7:40 PM' },
  { icon: '💬', title: 'Sharings', time: '8:00 PM' },
  { icon: '👋', title: 'Event End', time: '8:20 PM' },
]
