'use client'
import Table from '@/components/Custom/Table'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

    const [eventStore, setEventStore] = useState<any[]>([]);

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

    // Table Column Define
    const column = ['Index', 'EventName', 'Description', 'HandlerName', 'Round', 'FirstRoundDate', 'SecondRoundDate', 'ThirdRoundDate']
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
    }))
    return (
        <>
            <ul>
                {eventStore.map((events, index) => (
                    <li>{events.eventname}</li>
                ))}
            </ul>
            <Table columns={column} data={data} />
        </>
    )
}

export default page