'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MyEvents = () => {
    const [events, setEvents] = useState<any[]>([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('/api/authevents')
                setEvents(res.data);

            } catch (error) {
                
            }
        }

        fetchEvents();
     }, []);
  return (
   <>
    <div>
        <h1>MyEvents</h1>

        <div>
            {events.map((data) => (
                <li>{data.fullname}</li>
            ))}
        </div>
    </div>
   </>
  )
}

export default MyEvents