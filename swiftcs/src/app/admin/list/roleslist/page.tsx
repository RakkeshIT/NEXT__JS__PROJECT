'use client'
import Table from '@/components/Custom/Table'
import axios from 'axios';
import { permission } from 'process';
import React, { useEffect, useState } from 'react'

interface Role {
  _id: string;
  rolename: string,
  permission: string[],
}
const RolesList = () => {
  const [roleData, setroleData] = useState<Role[]>([]);
  const [allPermissions, setAllPermissions] = useState<string[]>([]);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [rolePermissions, setRolePermissions] = useState<string[]>([]);
  const [updatedPermissions, setUpdatedPermissions] = useState<string[]>([]);
  const [isChanged, setIsChanged] = useState(false);
  useEffect(() => {
    const getAllPermissions = async () => {
      try {
        const res = await axios.get('/api/permissions');
        setAllPermissions(res.data.map((perm) => perm.name));
      } catch (error) {

      }
    }
    const getRoles = async () => {
      try {
        const res = await axios.get('/api/roles')
        if (Array.isArray(res.data.roles)) {
          setroleData(res.data.roles)
        }
      } catch (error) {
        console.error("Error", error)
      }
    }
    getAllPermissions();
    getRoles();
  }, []);

  const handleSubmit = async (roleId: string, permission: string) => {
    try {
      const res = await axios.put('/api/role/updatepermissions', {
        roleId,
        permission,
      })

      if (res.status === 200) {
        setroleData((prev) =>
          prev.map((role) =>
            role._id === roleId ? { ...role, permission: role.permission.filter((perm) => perm !== permission) }
              : role
          )
        )
      }
    } catch (error) {

    }
  }

  const handleChange = (roleId: string) => {
    const selected = roleData.find((role) => role._id === roleId);
    setSelectedRole(selected || null);
    setRolePermissions(selected ? selected.permission : [])
    setUpdatedPermissions(selected ? selected.permission : [])
    setIsChanged(false)
  }

  const togglePermissions = (permission: string) => {
    let updatedList;

    if (updatedPermissions.includes(permission)) {
      updatedList = updatedPermissions.filter((perm) => perm !== permission)
    } else {
      updatedList = [...updatedPermissions, permission]
    }

    setUpdatedPermissions(updatedList)
    setIsChanged(true)
  }

  const updatePermissions = async () => {
    if (!selectedRole) return;
    try {
      const res = await axios.put('/api/role/assignpermission', {
        roleId: selectedRole._id,
        permission: updatedPermissions,
      })

      if (res.status === 200) {
        setRolePermissions(updatedPermissions)
        setIsChanged(false)
        alert('updated')
      }
    } catch (error) {
      alert('Error')
    }
  }
  return (
    <>
      <div>
        <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
        <select id="countries"
          onChange={(e) => handleChange(e.target.value)}
          defaultValue=''
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled>Select Role</option>
          {roleData.map((role) =>
            <option value={role._id} key={role._id}>{role.rolename}</option>
          )}
        </select>
        {selectedRole && (
          <div className='flex gap-4 flex-wrap'>
            {allPermissions.map((perm, index) =>
              <div className=' flex items-center mb-4 mt-6' key={index}>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    checked={updatedPermissions.includes(perm)}
                    onChange={() => togglePermissions(perm)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {perm}
                  </label>
              </div>
            )}
          </div>

        )}

        <button type='submit' className='bg-green-500 py-2 px-9 rounded-md mb-6 mt-6' onClick={updatePermissions}>
          Update Permission
        </button>
      </div>
      <ul  className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-6'>
        {roleData.map((role, index) =>
          <div key={index} className='bg-white/30 backdrop-blur-md mb-4 px-6 py-2'>
              <h1 className='text-sky-400 font-bold mb-4'>{role.rolename}</h1>
              <p className='mb-2'>
                {Array.isArray(role.permission) ? (
                  role.permission.map((perm, index) => (
                    <div className='flex  justify-between' key={index}>
                      <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" checked={true} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{perm}</label>
                      </div>

                      <div>
                        <button onClick={() => handleSubmit(role._id, perm)} className='bg-red-600 px-8 rounded-md'>Remove</button>
                      </div>
                    </div>
                  ))
                ) : (<p>No Permissions</p>)}
              </p>
          </div>
        )}
      </ul>
      {/* <Table columns={[]} data={[]}/> */}
    </>
  )
}

export default RolesList