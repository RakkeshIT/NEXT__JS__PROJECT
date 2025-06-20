'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CreateEvent = () => {
    const router = useRouter()
    const initialState = {
        eventname: '',
        description: '',
        handlername: '',
        round: '',
        firstround: '',
    };
    const [eventData, setEventData] = useState(initialState);
    const serchParams = useSearchParams()
    const eventId = serchParams.get('id')
    useEffect(() => {
        const fetchEvents = async () => {
            if (eventId) {
                try {
                    const res = await axios.get(`/api/events/${eventId}`)
                    setEventData(res.data)
                } catch (error) {
                    console.log("Event is Not Fetched", error);
                }
            }
        }
        fetchEvents()
    }, [eventId])


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEventData((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (eventId) {
                await axios.patch(`/api/events/${eventId}`, { id: eventId, ...eventData })
                alert("Event Updated")
            } else {
                await axios.post('/api/events', eventData)
                alert("Event Added")
            }
            setEventData(initialState);
            router.push('/admin/list/eventlist')
        } catch (error) {
            alert('Soething Wrong', error)
        }
    }
    return (
        <>
            <Link href='/admin/list/eventlist' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Event List
                </span>
            </Link>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="eventname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
                    <input name='eventname' type="text" id="eventname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Web Development" required value={eventData.eventname} onChange={handleChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Description</label>
                    <input name='description' type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Create a Responsive Web Site" required value={eventData.description} onChange={handleChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="handlername" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Handler Name</label>
                    <input name='handlername' type="text" id="handlername" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Rakkesh Kumar" required value={eventData.handlername} onChange={handleChange} />
                </div>
                <div className="mb-5">
                    <label htmlFor="round" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Round</label>
                    <input name='round' type="text" id="round" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ex: Rakkesh Kumar" required value={eventData.round} onChange={handleChange} />
                </div>
                <div className='mb-5'>
                        <label htmlFor="firstround" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Round Date</label>
                        <input name='firstround' type="date" id="firstround" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={eventData.firstround} onChange={handleChange} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {eventId ? <span>Update Event</span> : <span>Create Event</span>}
                </button>
            </form>
        </>
    )
}

export default CreateEvent