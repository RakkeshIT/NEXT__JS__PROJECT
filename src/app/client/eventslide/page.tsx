'use client'

import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import gsap from 'gsap'

import {
  CalendarDays,
  ArrowUpRight
} from 'lucide-react'

const EventSlide = () => {

  const [allEvent, setAllEvent] = useState<any[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const fetchEvent = async () => {
      const res = await axios.get('/api/events')
      setAllEvent(res.data)
    }

    fetchEvent()

  }, [])

  useEffect(() => {

    if (sliderRef.current && containerRef.current) {

      const containerWidth = containerRef.current.offsetWidth
      const sliderWidth = sliderRef.current.scrollWidth

      const ctx = gsap.context(() => {

        gsap.set(sliderRef.current, {
          x: containerWidth
        })

        gsap.to(sliderRef.current, {
          x: -sliderWidth,
          duration: 80,
          ease: 'linear',
          repeat: -1,
          onRepeat: () => {
            gsap.set(sliderRef.current, {
              x: containerWidth
            })
          }
        })

      }, containerRef)

      return () => ctx.revert()
    }

  }, [allEvent])

  return (

    <section className="
      relative
      overflow-hidden
      py-24
      bg-[#050816]
    ">

      {/* Background Glow */}
      <div className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-yellow-400/20
        blur-3xl
        rounded-full
      " />

      <div className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-indigo-500/20
        blur-3xl
        rounded-full
      " />

      <div className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
      ">

        {/* Heading */}
        <div className="text-center mb-16">

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
            LIVE EVENTS
          </span>

          <h1 className="
            text-5xl
            md:text-7xl
            font-extrabold
            text-white
            leading-tight
          ">
            Upcoming
            <span className="text-yellow-400"> Events</span>
          </h1>

          <p className="
            text-gray-400
            text-lg
            max-w-2xl
            mx-auto
            mt-6
            leading-8
          ">
            Discover technical workshops, coding contests,
            hackathons, and innovation challenges happening this year.
          </p>

        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="
            overflow-hidden
            w-full
            py-10
          "
        >

          <div
            ref={sliderRef}
            className="flex w-max"
          >

            {allEvent.map((value, index) => (

              <div
                key={index}
                className="
                  relative
                  group
                  flex-shrink-0
                  w-[330px]
                  mx-5
                "
              >

                {/* Card */}
                <div className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  h-[320px]
                  hover:-translate-y-3
                  hover:border-yellow-400/40
                  transition-all
                  duration-500
                  shadow-xl
                  hover:shadow-yellow-400/10
                ">

                  {/* Gradient Hover */}
                  <div className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    bg-gradient-to-b
                    from-yellow-400/10
                    to-transparent
                    transition
                    duration-500
                  " />

                  {/* Top Icon */}
                  <div className="
                    relative
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
                    group-hover:scale-110
                    transition
                    duration-500
                  ">
                    <CalendarDays size={30} />
                  </div>

                  {/* Event Title */}
                  <h2 className="
                    relative
                    text-2xl
                    font-bold
                    text-white
                    mb-4
                    line-clamp-1
                  ">
                    {value.eventname}
                  </h2>

                  {/* Description */}
                  <p className="
                    relative
                    text-gray-400
                    leading-7
                    text-sm
                    line-clamp-4
                  ">
                    {value.description}
                  </p>

                  {/* Bottom */}
                  <div className="
                    absolute
                    bottom-8
                    left-8
                    right-8
                    flex
                    items-center
                    justify-between
                  ">

                    <div>

                      <p className="
                        text-xs
                        text-gray-500
                        mb-1
                      ">
                        Event Date
                      </p>

                      <p className="
                        text-sm
                        text-yellow-400
                        font-semibold
                      ">
                        {value.firstround}
                      </p>

                    </div>

                    <button className="
                      w-12
                      h-12
                      rounded-full
                      bg-yellow-400
                      text-black
                      flex
                      items-center
                      justify-center
                      hover:rotate-45
                      transition-all
                      duration-500
                    ">

                      <ArrowUpRight size={20} />

                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>

  )
}

export default EventSlide