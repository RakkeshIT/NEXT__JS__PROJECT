'use client'
import Button from '@/components/Custom/Button';
import Table from '@/components/Custom/Table';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
const CandidateList = () => {
  const [getEvents, setGetEvents] = useState<any[]>([]);
  const [getUserByEvents, setGetUserByEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState('');
  const router = useRouter()
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

  const fetchUserByEvent = async (eventname: string) => {
    try {
      const res = await axios.get(`/api/eventsregister?eventname=${eventname}`);
      setGetUserByEvents(res.data.users)
    } catch (error) {
      console.log('Error');

    }
  }

  const deletAllData = async () => {
    try {
      const res = await axios.delete('/api/deleteallcandidatelist', { params: { eventname: selectedEvent } })
      if (res.status == 200) {
        alert('data deleted')
        setGetUserByEvents([])
      }
    } catch (error) {
      console.log(error);

    }
  }

  const column = ['ID', 'CandidateName', 'Email', 'AleterEmail', 'EventName', 'RoundName', 'Date', 'Class', 'Semester', 'Result']
  const userData = getUserByEvents.map((user, index) => ({
    ID: index + 1,
    CandidateName: <span>{user.fullname}</span>,
    Email: <span>{user.email}</span>,
    AleterEmail: <span>{user.alteremail}</span>,
    EventName: <span>{user.eventname}</span>,
    RoundName: <span>{user.roundname}</span>,
    Date: <span>{user.date}</span>,
    Class: <span>{user.classname}</span>,
    Semester: <span>{user.semester}</span>,
    Result: <span>{user.Result}</span>,
  }))

  const downloadPDF = () => {
    if (!selectedEvent || getUserByEvents.length == 0) {
      alert("Please Select any Event")
      return
    }

    const doc = new jsPDF()
    doc.setFontSize(16)
    doc.text(`Candidate List for ${selectedEvent}`, 14,15)

    const column = ['ID', 'CandidateName', 'Email', 'AleterEmail', 'EventName', 'RoundName', 'Date', 'Class', 'Semester', 'Result']
    const userData = getUserByEvents.map((user, index) => ([
      index + 1,
      user.fullname,
      user.email,
      user.alteremail,
      user.eventname,
      user.roundname,
      user.date,
      user.classname,
      user.semester,
      user.Result,
  ]))

  autoTable(doc, {
    head: [column],
    body:userData,
    startY: 25
  })

  doc.save(`Canditade List for ${selectedEvent}`)

}
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
        <div className='flex justify-between'>
          <h1>Event Name is <span className='text-sky-500 font-bold'>{selectedEvent}</span></h1>
          <Button label='Delete All' onClick={deletAllData} />
          <Button label='Download PDF' onClick={downloadPDF} />
        </div>

        <Table columns={column} data={userData} />
      </div>
    </div>
  </>
)
}

export default CandidateList