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
  const [editRow, setEditRow] = useState<string | null>(null);
  // // Editing Box Enable
  //   const enableEdit = () => {
  //     setIsEnable(!isEnable);
  //     console.log(isEnable);
  //   }
  //   const enableEditTwo = () => {
  //     setIsEnableTwo(!isEnableTwo);
  //     console.log(isEnableTwo);
  //   }
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
  // Delete Function
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
  // Update Function
  const updateText = async(id: string, updatedTextOne:string, updatedTextTwo:string) => {
    try {
      const response = await axios.put('/api/HomeApi', {id, TextOne:updatedTextOne,TextTwo:updatedTextTwo});
      if(response.status === 200){
        setStore(store.map((item) => (item._id === id ? {...item, TextOne:updatedTextOne,TextTwo:updatedTextTwo }: item)));
       setEditRow(null);
        alert("Updated Success")
      }else{
        alert("Something wrong")
      }
    } catch (error) {
      console.error(error);
    }
  }
  // Enable Edit
  const enableEdit = (id: string, initalTextOne: string, initialTextTwo:string) => {
    setEditRow(id);
    setText(initalTextOne);
    setTextTwo(initialTextTwo);
  }
  // Create a Table Columns
  const column = ["Id", "Text","TextTwo", "Action"]
  const data = store.map((val,index) => ({
    Id: index + 1,
    Text: editRow === val._id ? (<EditBox label='Update' value={text} onChange={(e)=> setText(e.target.value)}/>) : <span className='cursor-pointer' onClick={() => enableEdit(val._id,val.TextOne,val.TextTwo)}>{val.TextOne}</span>,

    TextTwo: editRow === val._id ? (<EditBox label='Update' value={textTwo} onChange={(e) => setTextTwo(e.target.value)}/>) : <span className='cursor-pointer' onClick={() => enableEdit(val._id,val.TextOne,val.TextTwo)}>{val.TextTwo}</span>, 
    
    Action: editRow === val._id ? (
      <Button label='Update' onClick={()=> updateText(val._id, text, textTwo)}/>
    ): ( <Button label='Delete' onClick={()=> deleteText(val._id)}/>)
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