// File: app/page.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  MoonStar,
  Calendar,
  UtensilsCrossed,
  Gift,
  Image,
  MessageSquare,
  HelpCircle,
  Heart,
} from 'lucide-react'
import Link from 'next/link'
import { Hero } from '@/components/hero'
import { NavBar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FeatureCard } from '@/components/feature-card'

export default function Home() {
  return (
    <main className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900'>
      <NavBar />
      <Hero />

      <section className='container mx-auto py-16 px-4'>
        <h2 className='text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-100'>
          Welcome to Our University Iftar
        </h2>
        <p className='text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12'>
          Join us for a beautiful evening of community, reflection, and
          celebration as we break our fast together.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
          <FeatureCard
            icon={<Calendar className='h-8 w-8 text-emerald-500' />}
            title='Schedule'
            description='View the complete schedule of our Iftar event'
            link='/schedule'
          />
          <FeatureCard
            icon={<UtensilsCrossed className='h-8 w-8 text-amber-500' />}
            title='Menu'
            description="Explore the delicious food we'll be serving"
            link='/menu'
          />
          <FeatureCard
            icon={<Gift className='h-8 w-8 text-purple-500' />}
            title='Lucky Draw'
            description='Participate in our exciting lucky draw'
            link='/lucky-draw'
          />
          <FeatureCard
            icon={<Image className='h-8 w-8 text-blue-500' />}
            title='Gallery'
            description='Photos from this year and previous events'
            link='/gallery'
          />
          <FeatureCard
            icon={<MessageSquare className='h-8 w-8 text-rose-500' />}
            title='Feedback'
            description='Share your thoughts and suggestions'
            link='/feedback'
          />
          <FeatureCard
            icon={<HelpCircle className='h-8 w-8 text-teal-500' />}
            title='FAQ'
            description='Find answers to common questions'
            link='/faq'
          />
          <FeatureCard
            icon={<Heart className='h-8 w-8 text-red-500' />}
            title='Volunteer'
            description='Join our team and help organize'
            link='/volunteer'
          />
          <FeatureCard
            icon={<MoonStar className='h-8 w-8 text-indigo-500' />}
            title='Prayer Times'
            description='Prayer schedule and facilities information'
            link='/prayer-times'
          />
        </div>
      </section>

      <section className='bg-slate-800 dark:bg-slate-900 text-white py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold text-center mb-8'>Registration</h2>
          <p className='text-center max-w-2xl mx-auto mb-8'>
            Please register in advance to help us prepare accordingly. We look
            forward to welcoming you!
          </p>
          <div className='flex justify-center'>
            <Button className='bg-emerald-600 hover:bg-emerald-700 text-white'>
              <Link href='/register'>Register Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
