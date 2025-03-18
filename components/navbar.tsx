// File: components/navbar.tsx
"use client"
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MoonStar, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
// import { ThemeToggle } from './theme-toggle'
import { useState } from 'react'

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Menu', href: '/menu' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Link href='/' className='flex items-center gap-2'>
            <MoonStar className='h-6 w-6 text-emerald-600' />
            <span className='font-bold text-xl'>Uni Iftar</span>
          </Link>
        </div>

        <nav className='hidden md:flex gap-6 items-center'>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-sm font-medium text-muted-foreground transition-colors hover:text-green-950'
            >
              {link.name}
            </Link>
          ))}
          <Button className='bg-emerald-600 hover:bg-emerald-700 text-white'>
            <Link href='/register'>Register</Link>
          </Button>
          {/* <ThemeToggle /> */}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='md:hidden'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-6 w-6' />
              <span className='sr-only'>Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <div className='flex flex-col space-y-4 mt-8'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className='text-lg font-medium hover:text-emerald-600'
                >
                  {link.name}
                </Link>
              ))}
              <Button className='bg-emerald-600 hover:bg-emerald-700 text-white mt-4'>
                <Link href='/register' onClick={() => setIsOpen(false)}>
                  Register
                </Link>
              </Button>
              <div className='mt-4'>
                {/* <ThemeToggle /> */}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
