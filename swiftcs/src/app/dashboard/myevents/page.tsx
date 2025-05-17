'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface eventProps {
    eventname: string,
    _id: string
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">{event.eventname}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
        </>
    )
}

export default MyEvents