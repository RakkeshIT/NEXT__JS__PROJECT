'use client'
import Table from '@/components/Custom/Table';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CandidateList = () => {
  const [getEvents, setGetEvents] = useState<any[]>([]);
  const [getUserByEvents, setGetUserByEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState('');

  useEffect(() => { 
    const fetchEvent = async () => {
      try {
        const res = await axios.get('/api/events');
        setGetEvents(res.data)
        console.log("Event is fetched");

      } catch (error) {
        console.log("Event isn't fetched");
      }
    }
    fetchEvent()
  }, []);

  const fetchUserByEvent = async (eventname : string) => {
    try {
      const res = await axios.get(`/api/eventsregister?eventname=${eventname}`);
      setGetUserByEvents(res.data.users)
    } catch (error) {
      console.log('Error');
      
    }
  } 
  const column = ['ID', 'CandidateName', 'Email', 'EventName', 'RoundName', 'Class','Semester']
  const userData = getUserByEvents.map((user,index) => ({
    ID:index + 1,
    CandidateName: <span>{user.fullname}</span>,
    Email: <span>{user.email}</span>,
    EventName: <span>{user.eventname}</span>,
    RoundName: <span>{user.roundname}</span>,
    Class: <span>{user.classname}</span>,
    Semester: <span>{user.semester}</span>,
  }))
  return (
    <>
      <div>
        <h1>Your CandidateList</h1>
        <select id="countries"
          defaultValue=''
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={
            (e) => {
              setSelectedEvent(e.target.value);
              fetchUserByEvent(e.target.value);
            }
          }  
        >
          <option value="" disabled>Select Event</option>
          {getEvents.map((events) =>
            <option value={events.eventname} key={events._id}>{events.eventname}</option>
          )}
        </select>


        <div className='mt-12'>
          <h1>Event Name is <span className='text-sky-500 font-bold'>{selectedEvent}</span></h1>

          <Table columns={column} data={userData} />
        </div>
      </div>
    </>
  )
}

export default CandidateList