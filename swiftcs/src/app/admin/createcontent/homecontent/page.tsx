'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from '@/components/Custom/Table';
import Button from '@/components/Custom/Button';
import InputBox from '@/components/Custom/InputBox';
import EditBox from '@/components/admin/EditInput';
const HomeContent = () => {
  const [text, setText] = useState('');
  const [textTwo, setTextTwo] = useState('');
  const [store, setStore] = useState<any[]>([]);
  const [isEnable, setIsEnable] = useState(false);
  const [isEnableTwo, setIsEnableTwo] = useState(false);
  // Editing Box Enable
    const enableEdit = () => {
      setIsEnable(!isEnable);
      console.log(isEnable);
    }
    const enableEditTwo = () => {
      setIsEnableTwo(!isEnableTwo);
      console.log(isEnableTwo);
    }
  const fetchData = async () => {
     try {
      const response = await axios.get('/api/HomeApi');
      setStore(response.data)
     } catch (error) {
        console.log("Data Fetching Error",error);
        
     }
  }
  useEffect(() => {
    fetchData();
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/HomeApi', {TextOne:text, TextTwo: textTwo})
      if(response){
        alert("Data Was Added")
      }else{
        alert("Something Wrong")
      }
    } catch (error) {
      alert("Please Check your Connection")
    }
  }
  const deleteText = async (id:String) => {
    try {
     const response =  await axios.delete('/api/HomeApi', {params: {id}})
     if(response.status === 200){
        alert("Delete Successfully")
       setStore(store.filter((val) => val._id !== id));
     }else{
      console.log(response.data.message);
      
     }
    } catch (error) {
      console.log(error);
    }
  }
  // Create a Table Columns
  const column = ["Id", "Text","TextTwo", "Delete"]
  const data = store.map((val,index) => ({
    Id: index + 1,
    Text: isEnable ? (<EditBox label='Update' value={val.TextOne} onChange={(e)=> setText(e.target.value)}/>) : <span className='cursor-pointer' onClick={enableEdit}>{val.TextOne}</span>,
    TextTwo:isEnableTwo ? (<EditBox label='Update' value={val.TextTwo} onChange={(e) => setTextTwo(e.target.value)}/>) : <span className='cursor-pointer' onClick={enableEditTwo}>{val.TextTwo}</span>, 
    Delete: <Button label='Delete' onClick={()=> deleteText(val._id)}/>
  }))
  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="home" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Home Text 1</label>
          <input type="text" id="home" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={text} onChange={(e) => setText(e.target.value)}  />
        </div>
        <div className="mb-5">
          <label htmlFor="home" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Home Text 2</label>
          <input type="text" id="home" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required value={textTwo} onChange={(e) => setTextTwo(e.target.value)}  />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
      <Table columns={column} data={data}/>
  
    </>
  )   
}

export default HomeContent