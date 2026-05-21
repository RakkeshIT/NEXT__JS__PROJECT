'use client'

import React from 'react'
import Image from 'next/image'
import AboutBanner from '@/assets/images/pages/AboutBanner.png'

import {
  Flame,
  Gem,
  Hexagon,
  Medal
} from 'lucide-react'

import Card from '@/components/Custom/Card'

const AboutPage = () => {

  const AboutCards = [
    {
      icon: <Hexagon size={28} />,
      title: 'Student Event',
      description:
        'Engaging events where students showcase talent, compete, and learn together.'
    },

    {
      icon: <Gem size={28} />,
      title: 'Certifications',
      description:
        'Recognized certifications that validate student skills and boost careers.'
    },

    {
      icon: <Medal size={28} />,
      title: 'Medals',
      description:
        'Awards for excellence in academics, sports, and activities, inspiring success.'
    },

    {
      icon: <Flame size={28} />,
      title: 'Coordinators',
      description:
        'Leaders who plan, organize, and ensure smooth event execution.'
    }
  ]

  return (
    <section className="relative overflow-hidden bg-[#050816] py-20">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute inset-0 bg-yellow-400/20 blur-2xl rounded-3xl" />

            <Image
              src={AboutBanner}
              alt="About Banner"
              priority
              className="
                relative
                rounded-3xl
                border
                border-white/10
                shadow-2xl
                object-cover
                hover:scale-[1.02]
                transition-all
                duration-500
              "
            />

          </div>

          {/* Content */}
          <div>

            <span className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-yellow-400/10
              text-yellow-400
              border
              border-yellow-400/30
              text-sm
              font-semibold
              tracking-wide
              mb-6
            ">
              ABOUT US
            </span>

            <h1 className="
              text-4xl
              md:text-6xl
              font-extrabold
              leading-tight
              text-white
            ">
              Empowering Students Through
              <span className="text-yellow-400"> Innovation</span>
            </h1>

            <p className="
              text-gray-400
              mt-6
              text-lg
              leading-8
            ">
              Student’s Wings of Information Technology is a dynamic student
              community focused on innovation, leadership, learning, and
              technical excellence through events, competitions, and teamwork.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10">

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                backdrop-blur-lg
              ">
                <h2 className="text-3xl font-bold text-yellow-400">150+</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Active Students
                </p>
              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                backdrop-blur-lg
              ">
                <h2 className="text-3xl font-bold text-yellow-400">30+</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Technical Events
                </p>
              </div>

              <div className="
                bg-white/5
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                backdrop-blur-lg
              ">
                <h2 className="text-3xl font-bold text-yellow-400">100%</h2>
                <p className="text-gray-400 text-sm mt-1">
                  Student Driven
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-24">

          <div className="text-center mb-14">

            <h2 className="
              text-4xl
              md:text-5xl
              font-bold
              text-white
            ">
              What We Provide
            </h2>

            <p className="
              text-gray-400
              mt-4
              max-w-2xl
              mx-auto
            ">
              Building opportunities for students to grow, innovate,
              collaborate, and achieve excellence.
            </p>

          </div>

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          ">

            {AboutCards.map((item, index) => (

              <div
                key={index}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:-translate-y-2
                  hover:border-yellow-400/40
                  transition-all
                  duration-500
                "
              >

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-yellow-400/5
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition
                " />

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-yellow-400/10
                  border
                  border-yellow-400/20
                  flex
                  items-center
                  justify-center
                  text-yellow-400
                  mb-6
                ">
                  {item.icon}
                </div>

                <h3 className="
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                ">
                  {item.title}
                </h3>

                <p className="
                  text-gray-400
                  leading-7
                ">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutPage