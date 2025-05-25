'use client'
import Table from '@/components/Custom/Table'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '@/components/Custom/Button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const page = () => {
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [eventStore, setEventStore] = useState<unknown[]>([]);

    // Fetch Data
    const fetchData = async () => {
        try {
            const response = await axios.get('/api/events');
            setEventStore(response.data);
            console.log(response.data);
        } catch (error) {
            console.log("Something Error", error);
        }
    }
    // Use Effect
    useEffect(() => {
        fetchData();
    }, []);

    const deletEvent = async (id: string) => {
        try {
            const res = await axios.delete('/api/events', { params: { id } })

            if (res.status === 200) {
                alert('Item was Deleted')
                setEventStore(eventStore.filter((val) => val._id !== id))
            }
        } catch (error) {
            alert("Item was not deletd")
            console.log(error);

        }
    }

    // Table Column Define
    const column = ['Index', 'EventName', 'Description', 'HandlerName', 'Round', 'FirstRoundDate', 'Update', 'Actions']
    // Table Data Define
    const data = eventStore.map((events, index) => ({
        Index: index + 1,
        EventName: <span>{events.eventname}</span>,
        Description: <span>{events.description}</span>,
        HandlerName: <span>{events.handlername}</span>,
        Round: <span>{events.round}</span>,
        FirstRoundDate: <span>{events.firstround}</span>,
        Update: <Button label='Update' onClick={() => router.push(`/admin/createcontent/createevent?id=${events._id}`)} />,
        Actions: <Button label='Delete' onClick={() => deletEvent(events._id)} />
    }))
    return (
        <>
            <Link href='/admin/createcontent/createevent' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Create Event
                </span>
            </Link>
            <Table columns={column} data={data} />
        </>
    )
}

export default page