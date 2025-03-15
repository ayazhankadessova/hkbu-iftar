'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import MobileNav from '@/components/mobile-nav'
import headerNavLinks from '@/config/headerNavLinks'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by their vertical position
        const intersectingEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const rectA = a.target.getBoundingClientRect()
            const rectB = b.target.getBoundingClientRect()
            return rectA.top - rectB.top
          })

        // If we have any intersecting entries
        if (intersectingEntries.length > 0) {
          const firstSection = intersectingEntries[0]

          setActiveSection(firstSection.target.id)
        }
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    )

    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      // console.log(
      //   'Found sections:',
      //   Array.from(sections).map((s) => s.id)
      // )
      sections.forEach((section) => {
        observer.observe(section)
      })
    }, 10)

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: 'smooth',
      })
    }
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <header className='w-full px-8 md:px-10 lg:px-14 h-20 bg-white border-b border-rose-400/90/30 flex justify-between items-center sticky top-0 z-50'>
      <div className='flex items-center'>
        <Image src='/logo.png' alt='Logo' width={85} height={50} />
      </div>

      <div className='flex gap-6 items-center'>
        {activeSection && activeSection !== 'top' && (
          <span
            className={cn(
              'md:hidden text-sm font-medium transition-colors relative',
              'underline underline-offset-4 underline-thickness-2 decoration-rose-400/90 font-medium'
            )}
          >
            {capitalizeFirstLetter(activeSection)}
          </span>
        )}

        <NavigationMenu className='hidden md:flex'>
          <NavigationMenuList className='gap-6'>
            {Object.values(headerNavLinks).map((dialog) => (
              <NavigationMenuItem key={dialog.title}>
                <Link href={dialog.href} legacyBehavior passHref>
                  <a
                    href={dialog.href}
                    onClick={(e) => scrollToSection(e, dialog.href)}
                    className={cn(
                      'text-sm font-medium transition-colors relative',
                      activeSection === dialog.href.slice(1)
                        ? 'text-primary font-bold after:content-[""] after:block after:h-0.5 after:bg-rose-400/90 after:absolute after:-bottom-1 after:left-0 after:right-0'
                        : 'hover:text-rose-400/90 text-primary'
                    )}
                  >
                    {dialog.title}
                  </a>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'
