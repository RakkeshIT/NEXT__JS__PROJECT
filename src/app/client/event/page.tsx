'use client'

import React from 'react'
import {
    CalendarDays,
    Trophy,
    Users,
    ClipboardCheck,
    Award,
    ListChecks,
    ArrowRight
} from 'lucide-react'

const EventPage = () => {

    const EventsData = [
        {
            title: 'Event List',
            description:
                'Explore all technical and non-technical events conducted for students.',
            icon: <ListChecks size={30} />
        },

        {
            title: 'Current Events',
            description:
                'Stay updated with ongoing competitions, workshops, and seminars.',
            icon: <CalendarDays size={30} />
        },

        {
            title: 'Event Register',
            description:
                'Quickly register for upcoming events and secure your participation.',
            icon: <ClipboardCheck size={30} />
        },

        {
            title: 'Event Results',
            description:
                'Check published results and performance rankings of completed events.',
            icon: <Trophy size={30} />
        },

        {
            title: 'Event Dates',
            description:
                'Track schedules, deadlines, and important event announcements.',
            icon: <Award size={30} />
        },

        {
            title: 'Selected List',
            description:
                'View shortlisted candidates and final selected participant details.',
            icon: <Users size={30} />
        }
    ]

    return (
        <section className="relative overflow-hidden bg-[#050816] py-24">

            {/* Background Blur Effects */}
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
                        EVENTS MANAGEMENT
                    </span>

                    <h1 className="
            text-5xl
            md:text-7xl
            font-extrabold
            text-white
            leading-tight
          ">
                        Explore Our
                        <span className="text-yellow-400"> Event Hub</span>
                    </h1>

                    <p className="
            text-gray-400
            text-lg
            max-w-3xl
            mx-auto
            mt-6
            leading-8
          ">
                        Discover student events, registrations, results, schedules,
                        and achievements through our modern event management platform.
                    </p>

                </div>

                {/* Cards */}
                <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
        ">

                    {EventsData.map((item, index) => (

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
                hover:-translate-y-3
                hover:border-yellow-400/40
                transition-all
                duration-500
                shadow-lg
                hover:shadow-yellow-400/10
              "
                        >

                            {/* Hover Gradient */}
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

                            {/* Icon */}
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
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h2 className="
                relative
                text-2xl
                font-bold
                text-white
                mb-4
              ">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="
                relative
                text-gray-400
                leading-7
              ">
                                {item.description}
                            </p>

                            {/* Button */}
                            <button className="
                relative
                mt-8
                inline-flex
                items-center
                gap-2
                text-yellow-400
                font-semibold
                hover:gap-4
                transition-all
                duration-300
              ">
                                Explore More
                                <ArrowRight size={18} />
                            </button>

                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default EventPage