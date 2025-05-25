'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface eventProps {
  fullname:string,
  email:string,
  alteremail:string,
  eventname: string,
  _id: string,
  date: Date,
}
const MyEvents = () => {
  const [events, setEvents] = useState<eventProps[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('/api/auth/checkevents');
        if (res.status === 200) {
          setEvents(res.data.events)
        }
      } catch (error) {
        console.log("Event is Not Fetch", error);
      }
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">🎉 My Registered Events</h1>

        {events.length === 0 ? (
          <p className="text-center text-gray-600">You have not registered for any events.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 hover:scale-105 transform transition-all duration-100 rounded-md py-2 px-2">
                <h1 className='text-center font-bold text-white'>Event Details</h1>
                <p className="font-semibold  mb-2"><span className='text-white'>🤵 Name:</span> <span className='text-gray-900 font-semibold'>{event.fullname}</span></p>
                <p className="font-semibold  mb-2"><span className='text-white'>📧 Email:</span> <span className='text-gray-900 font-semibold'>{event.email}</span></p>
                <p className="font-semibold  mb-2"><span className='text-white'>🎓 Student Email: </span> <span className='text-gray-900 font-semibold'>{event.alteremail}</span></p>
                <p className="font-semibold  mb-2"><span className='text-white'>✨ Event Name: </span> <span className='text-gray-900 font-semibold'>{event.eventname}</span></p>
                <p className="font-semibold  mb-2"><span className='text-white'>📅 Date:</span> <span className='text-gray-900 font-semibold'>{event.date}</span></p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MyEvents