'use client'
import React from 'react';
import styles from '../../styles/ContactPage.module.css';
import { Contact3D } from '@/components/Animations/Contact';
import Link from 'next/link';

const ContactPage = () => {
  const Links = [
    { label: 'Current Events', href: '/client/about' },
    { label: 'Upcoming Events', href: '/client/contact' },
    { label: 'Events Status', href: '/client/event' },
    { label: 'Results', href: '' },
    { label: 'Login', href: '' },
    { label: 'Create Account', href: '' },
    { label: 'Dashboard', href: '' },
  ]
  const Contact = [
    {label:'swiftcs@gmail.com',href:''},
    {label:'8336276373',href:''},
    {label:'Google Form',href:''},
    {label:'LinkedIn',href:''},

  ]
  const groupedLinks = [];
  for (let i = 0; i < Links.length; i += 2) {
    groupedLinks.push([Links[i], Links[i + 1] || null])
  }
  return (
    <>
      <div className={`${styles.Container}`}>
        <div>
          <Contact3D />
        </div>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 md:gap-10 lg:gap-32'>
          <div>
            <h1 className='font-bold text-sky-600 mb-5'>Importents Links</h1>
            <div>
              {groupedLinks.map(([first, second], index) => (
                <div className='grid grid-cols-2 ' key={index}>
                  <Link className='mb-3 hover:underline hover:text-sky-700 hover:transition-all hover:duration-200 hover:decoration-sky-800 hover:font-medium' href={first.href}>{first.label}</Link>
                  {second ?( <Link className='mb-3 hover:underline hover:text-sky-700 hover:transition-all hover:duration-200 hover:decoration-sky-800 hover:font-medium'  href={second.href}>{second.label}</Link>):(<span></span>)}
                </div>
              ))}
            </div>
          </div>
          <div >
            <h1 className='font-bold text-sky-600 mb-5'>Contact Info</h1>
            {Contact.map((items,index) => (
              <div key={index}>
                <Link className='mb-3 hover:underline hover:text-sky-700 hover:transition-all hover:duration-200 hover:decoration-sky-800 hover:font-medium'  href=''>{items.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage;