// data/scheduleData.ts
export interface ScheduleItem {
  icon: string
  title: string
  time: string
}

export const scheduleData: ScheduleItem[] = [
  { icon: '📝', title: 'Registration', time: '6:00PM-6:15PM' },
  { icon: '🕌', title: 'Adhan', time: '6:37PM' },
  { icon: '🍽️', title: 'Dinner', time: '6:40PM' },
  { icon: '📚', title: 'Ramadan Presentations', time: '7:00PM' },
  { icon: '🎮', title: 'Activities', time: '7:20PM' },
  { icon: '🎁', title: 'Lucky Draw', time: '7:50PM' },
  { icon: '💬', title: 'Sharings', time: '8:00PM' },
  { icon: '👋', title: 'Event End', time: '8:15PM' },
]
