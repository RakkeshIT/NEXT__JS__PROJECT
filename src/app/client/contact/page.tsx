'use client'

import React from 'react'
import Link from 'next/link'

import {
  CalendarDays,
  Clock3,
  Trophy,
  LogIn,
  UserPlus,
  LayoutDashboard,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ArrowRight
} from 'lucide-react'

import { Contact3D } from '@/components/Animations/Contact'

const ContactPage = () => {

  const Links = [
    {
      label: 'Current Events',
      href: '/client/about',
      icon: <CalendarDays size={18} />
    },

    {
      label: 'Upcoming Events',
      href: '/client/contact',
      icon: <Clock3 size={18} />
    },

    {
      label: 'Events Status',
      href: '/client/event',
      icon: <Trophy size={18} />
    },

    {
      label: 'Results',
      href: '',
      icon: <Trophy size={18} />
    },

    {
      label: 'Login',
      href: '',
      icon: <LogIn size={18} />
    },

    {
      label: 'Create Account',
      href: '',
      icon: <UserPlus size={18} />
    },

    {
      label: 'Dashboard',
      href: '',
      icon: <LayoutDashboard size={18} />
    }
  ]

  const Contact = [
    {
      label: 'swiftcs@gmail.com',
      href: '',
      icon: <Mail size={18} />
    },

    {
      label: '+91 8336276373',
      href: '',
      icon: <Phone size={18} />
    },

    {
      label: 'Google Form',
      href: '',
      icon: <FileText size={18} />
    },

    {
      label: 'LinkedIn',
      href: '',
      icon: <Linkedin size={18} />
    }
  ]

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="
            inline-block
            px-5
            py-2
            rounded-full
            border
            border-yellow-400/30
            bg-yellow-400/10
            text-yellow-400
            text-sm
            font-semibold
            tracking-wider
            mb-5
          ">
            CONTACT US
          </span>

          <h1 className="
            text-5xl
            md:text-7xl
            font-extrabold
            text-white
            leading-tight
          ">
            Connect With
            <span className="text-yellow-400"> Swift</span>
          </h1>

          <p className="
            text-gray-400
            text-lg
            max-w-3xl
            mx-auto
            mt-6
            leading-8
          ">
            Stay connected with our student community through events,
            registrations, support, and important updates.
          </p>

        </div>

        {/* Main Section */}
        <div className="
          grid
          lg:grid-cols-2
          gap-16
          items-center
        ">

          {/* 3D Animation */}
          <div className="
            flex
            justify-center
            items-center
          ">
            <Contact3D />
          </div>

          {/* Right Side */}
          <div className="space-y-10">

            {/* Important Links */}
            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            ">

              <h2 className="
                text-3xl
                font-bold
                text-white
                mb-8
              ">
                Important Links
              </h2>

              <div className="
                grid
                sm:grid-cols-2
                gap-5
              ">

                {Links.map((item, index) => (

                  <Link
                    key={index}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/5
                      transition-all
                      duration-300
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="
                        text-yellow-400
                      ">
                        {item.icon}
                      </div>

                      <span className="
                        text-gray-300
                        group-hover:text-white
                        transition
                      ">
                        {item.label}
                      </span>

                    </div>

                    <ArrowRight
                      size={18}
                      className="
                        text-gray-500
                        group-hover:text-yellow-400
                        group-hover:translate-x-1
                        transition-all
                      "
                    />

                  </Link>

                ))}

              </div>

            </div>

            {/* Contact Info */}
            <div className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              p-8
            ">

              <h2 className="
                text-3xl
                font-bold
                text-white
                mb-8
              ">
                Contact Information
              </h2>

              <div className="space-y-5">

                {Contact.map((item, index) => (

                  <Link
                    key={index}
                    href={item.href}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      px-5
                      py-4
                      hover:border-yellow-400/40
                      hover:bg-yellow-400/5
                      transition-all
                      duration-300
                    "
                  >

                    <div className="flex items-center gap-4">

                      <div className="
                        w-11
                        h-11
                        rounded-xl
                        bg-yellow-400/10
                        border
                        border-yellow-400/20
                        flex
                        items-center
                        justify-center
                        text-yellow-400
                      ">
                        {item.icon}
                      </div>

                      <span className="
                        text-gray-300
                        group-hover:text-white
                        transition
                      ">
                        {item.label}
                      </span>

                    </div>

                    <ArrowRight
                      size={18}
                      className="
                        text-gray-500
                        group-hover:text-yellow-400
                        group-hover:translate-x-1
                        transition-all
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage