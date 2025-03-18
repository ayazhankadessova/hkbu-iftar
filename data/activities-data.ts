// Activity Item Component
export interface ActivityItemProps {
  id: string 
  title: string
  description: string
  link: boolean // Whether to render a link or not (default: false)
  href?: string // Link to navigate to if 'link' prop is true (default: '')
}

export const activitiesData: ActivityItemProps[] = [
  {
    id: 'kahoot',
    title: 'Kahoot',
    description:
      'Join us for an interactive Kahoot quiz that will help participants learn about Islam, its traditions, customs, and the significance of Ramadan. It’s a fun way to test your knowledge, and you could even win exciting prizes like coupons!',
    link: false,
  },
  {
    id: 'lucky-draw',
    title: 'Lucky Draw',
    description:
      'Don’t miss our Lucky Draw, where you’ll have a chance to win fantastic books! Follow the link for detailed information about the books and discover new reads that inspire.',
    link: true,
    href: '/books',
  },
  {
    id: 'sharing',
    title: 'Sharing',
    description:
      'Participate in our open-ended sharing session where everyone can express what they love about Ramadan. From favorite customs to memorable experiences, this is a great opportunity to connect and celebrate together.',
    link: false,
  },
]
