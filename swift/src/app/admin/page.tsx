'use client'
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface ContentType{
  _id: string,
  title: string,
  description: string,
}
const Admin = () => {
  const [content, setContent] = useState<ContentType[]>([]);
  const fetchData = async () => {
    const {data}= await axios.get<ContentType[]>('../api/content')
    setContent(data)
    console.log(content);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleDelete = async (id: string) => {
    try {
       await axios.delete('../api/content', {
        data: {id},
      })
      
      setContent((pre)=> pre.filter((val) => val._id !== id));
    } catch (error: any) {
      console.error(error.message);
    }
  }
  return (
    <>
      <div>
        <h1>Data Fetching</h1>
        <ul>
          {content.map((val) => (
            <li key={val._id}>
              <h1>Title: {val.title} <span><Button onClick={() => handleDelete(val._id)}>Delete</Button></span></h1>
              <h1>Description: {val.description}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Admin