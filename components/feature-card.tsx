import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

export function FeatureCard({
  icon,
  title,
  description,
  link,
}: FeatureCardProps) {
  return (
    <Link href={link}>
      <Card className='h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1'>
        <CardContent className='p-6 flex flex-col items-center text-center'>
          <div className='mb-4'>{icon}</div>
          <h3 className='text-xl font-bold mb-2'>{title}</h3>
          <p className='text-sm text-muted-foreground'>{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
