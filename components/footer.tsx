// File: components/footer.tsx
import { MoonStar } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='bg-slate-800 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <div className='flex items-center gap-2 mb-4'>
              <MoonStar className='h-6 w-6 text-emerald-400' />
              <span className='font-bold text-xl'>Uni Iftar</span>
            </div>
            <p className='text-slate-300 text-sm'>
              Join us for a beautiful evening of community, reflection, and
              celebration as we break our fast together.
            </p>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/schedule'
                  className='text-slate-300 hover:text-white'
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link href='/menu' className='text-slate-300 hover:text-white'>
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-slate-300 hover:text-white'
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href='/register'
                  className='text-slate-300 hover:text-white'
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Contact Us</h3>
            <ul className='space-y-2 text-slate-300'>
              <li>Email: iftar@university.edu</li>
              <li>Phone: (123) 456-7890</li>
              <li>Location: Student Union Building</li>
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-lg mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='text-slate-300 hover:text-white'>
                Instagram
              </a>
              <a href='#' className='text-slate-300 hover:text-white'>
                Twitter
              </a>
              <a href='#' className='text-slate-300 hover:text-white'>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm'>
          <p>
            &copy; {new Date().getFullYear()} University Islamic Society. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
