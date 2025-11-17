'use client'
import axios from 'axios';
import React, { useState } from 'react'
const CreatePermissions = () => {
  const [permission, setPermission] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/permissions', {name: permission})
      if(res.status === 200){
        alert("Permissions is Added")
      }else(
        alert("Somethng Wrong")
      )
    } catch (error) {
      console.error("Error", error)
    }
  }
  return (
    <>
          <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="permission" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Permission Name</label>
                    <input type="permission" id="permission" className={`bg-gray-900 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit focus:border-pink-600 `} placeholder="Create Event" required value={permission} onChange={(e) => setPermission(e.target.value)}/>
                </div>
                <div className='mb-5'>
                    <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 py-1 px-4 rounded-md shadow-lg shadow-purple-600/50'>Create Role</button>
                </div>
            </form>
    </>
  )
}

export default CreatePermissions