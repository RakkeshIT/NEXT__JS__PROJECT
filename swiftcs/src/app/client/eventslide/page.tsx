'use client'
import React, { useEffect, useState } from 'react'
import Styles from '../../styles/EventPage.module.css'
import axios from 'axios';
import Card from '@/components/Custom/Card';
const EventSlide = () => {
  const [allEvent, setAllEvent] = useState<any[]>([]);
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get('/api/events');
      setAllEvent(res.data)
    }

    fetchEvent();
  }, []);
  return (
    <>
        <div className={`text-center w-full h-64 flex items-center justify-center ${Styles.Container}`}>
                {allEvent.map((value) => (
                  <Card customClass='bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg grid ' title={value.eventname} description={value.description} href={''}/>
                ))}
        </div>
    
    </>
  )
}

export default EventSlide