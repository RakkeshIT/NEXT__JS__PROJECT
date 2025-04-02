'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CreateUser = ({requestEmail}: {requestEmail:string}) => {
    const [formData, setFormData] = useState(
        {
            name: '',
            email: '',
            password: '',
            rolename: '',
        }
    );
    const [roles, setRoles] = useState<string[]>([]);
    const router = useRouter();
    useEffect(() => {
        const fetchRole = async () => {
            try {
                const res = await axios.get('/api/roles')
                if (Array.isArray(res.data.roles)) {
                    setRoles(res.data.roles.map((role: { rolename: any; }) => role.rolename))
                    console.log("Role Fetched Successsfully");
                }else {
                    console.log("Invalid formate");
                    setRoles([])
                }

            } catch (error) {
                console.log("Roles not Fetched");
            }
        }
        fetchRole();
    }, []);



    const handleChnage = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/register', formData , {
                headers: {'request-email': 'superadmin@gmail.com'}
            })
            if(res.status === 201){
                alert('user Created')
            }else{
                alert('user Not Created')
            }
            // router.push('/admin')
        } catch (error) {
            console.log("Error",error);
        }
    }
    return (
        <>
            <form className='max-w-sm mx-auto' onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                    <input type="name" id="name" className={`bg-gray-900 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit focus:border-pink-600 `} placeholder="Rakkesh" required name="name" value={formData.name} onChange={handleChnage} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Email</label>
                    <input type="email" id="email" className={`bg-gray-900 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit focus:border-pink-600 `} placeholder="example@gmail.com"   name="email" required value={formData.email} onChange={handleChnage} />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Password</label>
                    <input type="password" id="password" className={`bg-gray-900 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-whit focus:border-pink-600 `} placeholder="**********" required name="password" value={formData.password} onChange={handleChnage} />
                </div>

                <div className="mb-5">
                    <label htmlFor="countries_disabled" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Role</label>
                    <select id="countries_disabled" className="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-900 outline-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500" name='role' value={formData.role} onChange={handleChnage}>
                        <option value=''>Select Role</option>
                        {roles.map((role) => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                </div>

                <div className='mb-5'>
                    <button type='submit' className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 py-1 px-4 rounded-md shadow-lg shadow-purple-600/50'>Create Role</button>
                </div>
            </form>
        </>
    )
}

export default CreateUser