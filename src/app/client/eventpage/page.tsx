'use client'
import React, { useEffect, useState } from 'react'
import styles from '@/app/styles/EventPage.module.css';
import Link from 'next/link';
import axios from 'axios';
const EventPage = () => {
  const [eventStore, setEventStore] = useState<any[]>([]);
  
  const fetchEventDetails = async () => {
    try {
      const response = await axios.get('/api/events');
      setEventStore(response.data)
    } catch (error) {
      console.log("Error in Fetch Event Details ",error);
      
    }
  }
  useEffect(() => {
    
    fetchEventDetails();
  }, []);

  return (
    <>
      <div className={`${styles.container}`}>
        <div className='ms-52'>
          <h1 className='text-white font-bold text-4xl text-center'>All Events</h1>
          <div>
            <Link className='text-white font-semibold hover:text-red-500 hover:transition-all hover:duration-500' href=''>Home</Link> <span> / </span> <span className='font-semibold text-red-500 '>Event</span>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className={`${styles.EventContainer}`}>
        <div className="min-h-screen bg-white flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Upcoming Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full max-w-7xl">
            {eventStore.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 p-6 flex flex-col justify-between h-[200px] w-full"
              >
                <div>
                  <h2 className="text-xl font-bold mb-2">{event.eventname}</h2>
                  <p className="text-sm text-gray-200 mb-4 line-clamp-3">{event.description}</p>
                </div>
                <div className="flex flex-col">
                  <span className="bg-white text-indigo-600 px-3 py-1 text-xs font-semibold rounded-full w-fit">{event.firstround}</span>
                  <span className="text-sm italic mt-2">{event.round}</span>
                  <p className="text-gray-100 text-sm mt-1">Handled by: <span className="font-semibold">{event.handlername}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventPage