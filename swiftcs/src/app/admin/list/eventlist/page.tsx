'use client'
import Table from '@/components/Custom/Table'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from '@/components/Custom/Button';
import { useRouter } from 'next/navigation';
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
            const res = await axios.delete('/api/events', { params: {id}  })

            if (res.status === 200) {
                alert('Item was Deleted')
                setEventStore(eventStore.filter((val) => val._id !== id))}
        } catch (error) {
            alert("Item was not deletd")
            console.log(error);
            
        }
    }

    // Table Column Define
    const column = ['Index', 'EventName', 'Description', 'HandlerName', 'Round', 'FirstRoundDate', 'SecondRoundDate', 'ThirdRoundDate', 'Update' ,'Actions']
    // Table Data Define
    const data = eventStore.map((events, index) => ({
        Index: index + 1,
        EventName: <span>{events.eventname}</span>,
        Description: <span>{events.description}</span>,
        HandlerName: <span>{events.handlername}</span>,
        Round: <span>{events.round}</span>,
        FirstRoundDate: <span>{events.firstround}</span>,
        SecondRoundDate: <span>{events.secondround}</span>,
        ThirdRoundDate: <span>{events.thirdround}</span>,
        Update: <Button label='Update' onClick={() => router.push(`/admin/createcontent/createevent?id=${events._id}`)} />,
        Actions: <Button label='Delete' onClick={() => deletEvent(events._id)} />
    }))
    return (
        <>
            <Table columns={column} data={data} />
        </>
    )
}

export default page