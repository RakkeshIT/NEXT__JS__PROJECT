'use client'
import Button from '@/components/Custom/Button';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface userlistProps {
  _id: string,
  name: string,
  role: string,
}

interface roleProps {
  _id: string,
  rolename: string
}
const UserList = () => {
  const [user, setUser] = useState<userlistProps[]>([]);
  const [role, setRole] = useState<roleProps[]>([])
  const [selectedUser, setSelectedUser] = useState<userlistProps | null>(null)
  const [updateRole, setUpdateRole] = useState<string[]>([])
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get('/api/auth/register')
        setUser(res.data)
        console.log(res.data);
      } catch (error) {
        console.log("User Not Fetched", error);
      }
    }

    const fetchRole = async () => {
      const response = await axios.get('/api/roles')
      if (Array.isArray(response.data.roles)) {
        setRole(response.data.roles)
      }
    }
    getUser()
    fetchRole()
  }, [])

  const handleChange = (userID: string) => {
    const selected = user.find((user) => user._id === userID);
    setSelectedUser(selected || null);
    setUpdateRole(selected ? selected.role : [])
  }
  return (
    <>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Users</label>
      <select id="countries"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue=''
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="" disabled>Select Role</option>
        {
          user.map((u) => (
            <option key={u._id} value={u._id}>{u.name}</option>
          ))
        }
      </select>

      {selectedUser && (
        <><ul className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6 mt-12'>
          {role.map((role, index) =>
            // eslint-disable-next-line react/jsx-key
            <p className='mb-2'>
              <div className='flex  justify-between' key={index}>
                <div className="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" checked={updateRole.includes(role.rolename)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{role.rolename}</label>
                </div>
              </div>
            </p>
          )}
        </ul><Button label='Update' /></>
      )}

    </>
  )
}

export default UserList