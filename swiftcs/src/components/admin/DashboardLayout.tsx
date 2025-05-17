'use client'
import Link from 'next/link';
import useAuthUser from '@/hooks/useAuthUser';
import React, { ReactNode, useEffect, useState } from 'react'
import axios from 'axios';
import { useAuth } from '@/hooks/useAuth';
import { Dropdown, DropdownItem } from 'flowbite-react';
import { useRouter } from 'next/navigation';
const DashboardLayout = ({ children }: { children: ReactNode; }) => {
    const router = useRouter();
    const [role, setRole] = useState<{ rolename: string, permission: string[] } | null>(null);
    // Mobile Menu
    const [isOpen, setIsOpen] = useState(false);
    // Dropdown
    const [roleDrop, setRoleDrop] = useState(false);
    const [dropOpen, setDropOpen] = useState(false)
    const [eventDropOpen, setEventDropOpen] = useState(false)
    const [roleDropOpen, setRoleDropOpen] = useState(false)
    const [permissionsDropOpen, setPermissionsDropOpen] = useState(false)
    const [userDropOpen, setUserDropOpen] = useState(false)
    const { user } = useAuthUser();
    const { permissions } = useAuth();

    // useEffect(() => {
    //     const getPermission = async () => {
    //         try {
    //             const res = await axios.get('/admin/roles', { withCredentials: true })
    //             setRole(res.data);
    //         } catch (error) {
    //             console.log("Role Not Get");
    //             setRole(null)
    //         }
    //     }
    //     getPermission();
    // }, []);

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout')
            router.push('/client/auth/login')
        } catch (error) {

        }
    }
    return (
        <>
            <div className='text-white bg-black h-screen'>
                <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="px-3 py-3 lg:px-5 lg:pl-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-start rtl:justify-end">
                                <button data-drawer-target="logo-sidebar" onClick={() => setIsOpen(!isOpen)} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                    <span className="sr-only">Open sidebar</span>
                                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                                    </svg>
                                </button>
                                <Link href="https://flowbite.com" className="flex ms-2 md:me-24">
                                    {/* Image setup Place */}
                                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Swift Admin Pannel</span>
                                </Link>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center ms-3">
                                    <Dropdown label={user?.name} inline>
                                        <DropdownItem>
                                            <Link href='' onClick={handleLogout}>Logout</Link>
                                        </DropdownItem>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isOpen ? "translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3">Dashboard</span>
                                </Link>
                            </li>

                            {/* Content Managing */}
                            {permissions.includes('Edit Home Text') && (
                                <li>
                                    <button onClick={() => setDropOpen(!dropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Page Handlers</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                        </svg>
                                    </button>
                                    {dropOpen && (
                                        <ul id="dropdown" className="py-2 space-y-2">
                                            <li>
                                                <Link href="/admin/createcontent/homecontent" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home Page</Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            )}
                            {permissions.includes('Event Handler') &&

                                (
                                    <li>
                                        <button onClick={() => setEventDropOpen(!eventDropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                            <span className="flex-1 me-4 rtl:text-right whitespace-nowrap">Events Handlers</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        {eventDropOpen && (
                                            <ul id="dropdown" className="py-2 space-y-2">
                                                {permissions.includes('Event Creation') &&
                                                    (
                                                        <li>
                                                            <Link href="/admin/createcontent/createevent" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Event Creating</Link>
                                                        </li>
                                                    )
                                                }
                                                {
                                                    permissions.includes('Event List') && (
                                                        <li>
                                                            <Link href="/admin/list/eventlist" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Event List</Link>
                                                        </li>
                                                    )
                                                }

                                            </ul>
                                        )}
                                    </li>
                                )

                            }

                            {
                                permissions.includes('Roles Handlers') && (
                                    <li>
                                        <button onClick={() => setRoleDropOpen(!roleDropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                            <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Roles</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg>
                                        </button>
                                        {roleDropOpen && (
                                            <ul id="dropdown" className="py-2 space-y-2">
                                                {
                                                    permissions.includes('Create Role') && (
                                                        <li>
                                                            <Link href="/admin/createcontent/createrole" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Create Role</Link>
                                                        </li>
                                                    )
                                                }
                                                {
                                                    permissions.includes('Role List') && (
                                                        <li>
                                                            <Link href="/admin/list/roleslist" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Roles List</Link>
                                                        </li>
                                                    )
                                                }

                                            </ul>
                                        )}
                                    </li>
                                )
                            }

                            <li>
                                <button onClick={() => setPermissionsDropOpen(!permissionsDropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Permission</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {permissionsDropOpen && (
                                    <ul id="dropdown" className="py-2 space-y-2">
                                        <li>
                                            <Link href="/admin/createcontent/createpermission" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Create Permissions</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Permissions List</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button onClick={() => setUserDropOpen(!userDropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">User</span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {userDropOpen && (
                                    <ul id="dropdown" className="py-2 space-y-2">
                                        <li>
                                            <Link href="/admin/createcontent/createuser" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Create User</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/list/userlist" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">User List</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <button onClick={() => setRoleDrop(!roleDrop)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                                        {user?.role}
                                    </span>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </button>
                                {roleDrop && (
                                    <ul id="dropdown" className="py-2 space-y-2">
                                        <li>
                                            <Link href="/admin/eventregister" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Event Register</Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/createcontent/roles/candidatelist" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Candidate List</Link>
                                        </li>
                                        <li>
                                            <Link href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Handle Event</Link>
                                        </li>
                                    </ul>
                                )}
                            </li>


                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </aside>
                <div className="p-4 sm:ml-64 bg-black ">
                    <div className="bg-black h-full p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                        {children}
                    </div>
                </div>
            </div>


        </>
    )
}

export default DashboardLayout