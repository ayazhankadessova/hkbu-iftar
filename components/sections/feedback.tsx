import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export function Feedback() {
  return (
    <section
      id='feedback'
      className='w-full px-8 md:px-20 lg:px-40 py-14 bg-white flex flex-col md:flex-row justify-center items-start gap-10'
    >
      <div className='flex-1 flex flex-col justify-start items-start gap-6'>
        <h2 className='text-yellow-600 text-5xl font-pinyon font-bold leading-tight'>
          Feedback Form
        </h2>
        <p className='text-green-950'>
          Share your thoughts and suggestions with us.
        </p>
      </div>

      <div className='flex-1 flex flex-col justify-center items-start gap-10 w-full'>
        <div className='w-full space-y-2'>
          <label className='text-green-950 text-sm font-medium'>Name</label>
          <Input
            placeholder='Enter your name'
            className='bg-white border border-black/10'
          />
        </div>

        <div className='w-full space-y-2'>
          <label className='text-green-950 text-sm font-medium'>
            WhatsApp Number
          </label>
          <Input
            placeholder='Enter your WhatsApp Number'
            className='bg-white border border-black/10'
          />
        </div>

        <div className='w-full space-y-2'>
          <label className='text-green-950 text-sm font-medium'>Feedback</label>
          <Textarea
            placeholder='Leave your feedback here'
            className='bg-white border border-black/10'
          />
        </div>

        <Button className='bg-red-300 hover:bg-rose-400 text-white'>
          Submit Feedback
        </Button>
      </div>
    </section>
  )
}
