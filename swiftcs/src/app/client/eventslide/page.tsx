'use client'
import React, { useEffect, useRef, useState } from 'react'
import Styles from '../../styles/EventPage.module.css'
import axios from 'axios';
import Card from '@/components/Custom/Card';
import gsap from 'gsap';
const EventSlide = () => {
  const [allEvent, setAllEvent] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get('/api/events');
      setAllEvent(res.data)
    }
    fetchEvent();
  }, []);

  useEffect(() => {
    if (sliderRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const sliderWidth = sliderRef.current.scrollWidth;

      const ctx = gsap.context(() => {
        gsap.set(sliderRef.current, { x: containerWidth }); // Start outside right
        
        gsap.to(sliderRef.current, {
          x: -sliderWidth,
          duration: 30, // adjust speed
          ease: 'linear',
          repeat: -1,
          repeatDelay: 0.5, // small delay before restarting
          onRepeat: () => {
            gsap.set(sliderRef.current, { x: containerWidth }); // Reset to right side again
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }
  }, [allEvent]);

  return (
    <>
      <div ref={containerRef} className={` overflow-hidden text-center w-full h-64 flex items-center justify-center ${Styles.Container}`}>
        <div ref={sliderRef} className='flex ' style={{ width: 'max-content' }}>
          {allEvent.map((value, index) => (
            <div 
              key={index}
               className="flex-shrink-0 mx-4"
            >
              <Card  customClass='bg-gradient-to-r from-purple-500 to-blue-400 backdrop-blur-md bg-opacity-30 text-white rounded-xl shadow-lg px-12 transition-transform duration-700 hover:translate-x-2 ' title={value.eventname} description={value.description} href={''} buttonText='Click' />

            </div>
          ))}

        </div>
      </div>

    </>
  )
}

export default EventSlide