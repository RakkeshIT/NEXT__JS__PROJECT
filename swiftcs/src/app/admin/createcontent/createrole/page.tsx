'use client'
import axios from 'axios';
import React, { FormEvent, useEffect, useState } from 'react'

const CreateRole = () => {
    //    const [roles, setRoles] = useState('');
    const [formData, setFormData] = useState({
        rolename: '',
        permission: [] as string[],
    });
    const [allPermissions, setAllPermissions] = useState<string[]>([]);
    useEffect(() => {
        axios.get('/api/permissions').then(res => setAllPermissions(res.data.map(perm => perm.name)))
    }, []);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, rolename: e.target.value })
    }

    const handleCheckBoxChange = (perm: string) => {
        setFormData(prev => ({
            ...prev,
            permission: prev.permission.includes(perm)? 
            prev.permission.filter(p => p !== perm)
            :[...prev.permission, perm],
        }))
    }

    const handleSumit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/roles', formData);
            // setRoles(res.data);
            setFormData({rolename:'', permission:[]})
            if (res.status === 200) {
                alert("Roles is Added")
            } else {
                alert("Role not Added")
            }
        } catch (error) {
            console.error("Error", error);

        }
    }
    return (
        <>

            <form className='max-w-sm mx-auto' onSubmit={handleSumit}>
                <div className="mb-5">
                    <label htmlFor="rolename" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your RoleName</label>
                    <input type="rolename" id="rolename" className={`bg-gray-900 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit focus:border-pink-600 `} placeholder="Manager" required value={formData.name} onChange={handleChange} />
                </div>

                <div className='m-5'>
                    {allPermissions.map(perm => (
                        <div className="flex items-center mb-4">
                            <input id="permission" type="checkbox" className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked={formData.permission.includes(perm)} onChange={()=>handleCheckBoxChange(perm)} />
                            <label htmlFor="permission" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{perm}</label>
                        </div>
                    ))}
                </div>
                <div className='mb-5'>
                    <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 py-1 px-4 rounded-md shadow-lg shadow-purple-600/50'>Create Role</button>
                </div>
            </form>

        </>
    )
}

export default CreateRole