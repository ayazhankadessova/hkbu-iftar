// Activity Item Component
export interface ActivityItemProps {
  id: string 
  title: string
  description: string
  link: boolean // Whether to render a link or not (default: false)
}

export const activitiesData: ActivityItemProps[] = [
  { id: 'kahoot', title: 'Kahoot', description: 'lopemipsummm', link: false },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    description: 'lopemipsummm',
    link: true,
  },
  {
    id: 'sharing',
    title: 'Sharing',
    description: 'lopemipsummm',
    link: false,
  },
]
