'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EventRegister = () => {
    const [getEvent, setGetEvent] = useState<any[]>([]);
    const [formData, setFormData] = useState<any>({
        fullname: '',
        email: '',
        eventname: '',
        roundname: '',
        classname: '',
        year: '',
        semester: '',
    });
    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const res = await axios.get('/api/events');
                setGetEvent(res.data)
            } catch (error) {
                console.log("Event is Error");
            }
        }
        fetchEvent()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('/api/eventsregister', formData);

            if(res.status === 200){
                alert('Data Submited')
            }else{
                alert('Something Wrong')
            }
        } catch (error) {
            console.log("Error");
            
        }
    }
    return (
        <>
            <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                <div className="container max-w-screen-lg mx-auto">
                    <div>
                        <h2 className="font-semibold text-xl text-gray-600">Event Registeration Form</h2>
                        <p className="text-gray-500 mb-6">Register the Multiple Events with Your Intrest</p>
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Student Details</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
    
                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input type="text" name="fullname" value={formData.fullname} onChange={handleChange} id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="address">Select Event</label>
                                            <select value={formData.eventname} onChange={handleChange} id="countries_disabled" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" name='eventname'>
                                                <option value='' disabled>Select Role</option>
                                                {getEvent.map((name, index) => (
                                                    <option key={index} value={name.eventname}>{name.eventname}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="roundname">Select Round</label>
                                            <input type="text" name="roundname" value={formData.roundname} onChange={handleChange} id="roundname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="roundname">Date</label>
                                            <input type="text" name="roundname" id="roundname" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="classname">Class</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input type='text' name="classname" value={formData.classname} onChange={handleChange} id="classname" placeholder="class" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label htmlFor="year">Year</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input type='text' name="year" value={formData.year} onChange={handleChange} id="year" placeholder="year" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                            </div>
                                        </div>
                                        <div className="md:col-span-1">
                                            <label htmlFor="semester">Semester</label>
                                            <input type="text" name="semester" onChange={handleChange} value={formData.semester} id="semester" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>
    
                                        <div className="md:col-span-5 text-right">
                                            <div className="inline-flex items-end">
                                                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="https://www.buymeacoffee.com/dgauderman" target="_blank" className="md:absolute bottom-0 right-0 p-4 float-right">
                            <img src="https://www.buymeacoffee.com/assets/img/guidelines/logo-mark-3.svg" alt="Buy Me A Coffee" className="transition-all rounded-full w-14 -rotate-45 hover:shadow-sm shadow-lg ring hover:ring-4 ring-white" />
                        </a> */}
                </div>
            </div>
    
        </>
    )
}



export default EventRegister