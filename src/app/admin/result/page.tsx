'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Results = () => {
    const [events, setEvents] = useState<any[]>([])

    //   Fetch Events
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get('/api/events')
                setEvents(res.data)
            } catch (error) {
                console.log("Events is not Fetch", error);

            }
        }

        fetchEvents()
    }, [])


    return (
        <>
            <div className=''>
                <div className=''>
                    Post Results By Events
                </div>
                <form>
                    <div className='form-group'>
                        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Events</label>
                        <select id="countries"
                            defaultValue=''
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="" disabled>Select Role</option>
                            {
                                events.map((e) => (
                                    <option key={e._id} value={e._id}>{e.eventname}</option>
                                ))
                            }
                        </select>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Results