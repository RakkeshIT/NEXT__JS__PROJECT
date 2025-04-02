'use client'
import useAuthUser from '@/hooks/useAuthUser';
import axios from 'axios';
import { Dropdown, DropdownItem } from 'flowbite-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
const UserDashboard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);
  // Dropdown
  const [dropOpen, setDropOpen] = useState(false);

  const pathName = usePathname();
  const { user } = useAuthUser();

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout')
      router.push('/client/auth/login')
    } catch (error) {
      console.log("User Logut Fail");
    }
  }
  return (
    <>
      <div className='bg-white h-full text-black'>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-300">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button data-drawer-target="logo-sidebar" onClick={() => setIsOpen(!isOpen)} data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-violet-500 rounded-lg sm:hidden hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                  <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
                  </svg>
                </button>
                <Link href="https://flowbite.com" className="flex ms-2 md:me-24">
                  {/* Image setup Place */}
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-purple-600 ">Swift Admin Pannel</span>
                </Link>
              </div>
              <div className="flex items-center">
                <div className="flex items-center ms-3 gap-3">
                  <div>
                    {user?.role === 'user' ? (<Link href='/dashboard'>Dashboard</Link>) : (<Link href='/admin'>Panel</Link>)}
                  </div>
                  <div>
                    <Dropdown label={user?.name} inline>
                      <DropdownItem>
                        <Link href='' onClick={handleLogout}>Logout</Link>
                      </DropdownItem>
                    </Dropdown>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0   ${isOpen ? "translate-x-0" : "-translate-x-full"}`} aria-label="Sidebar">
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white text-black">
            <ul className="space-y-2 font-medium">
              <li>
                <Link href="/dashboard" className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-violet-500 dark:hover:bg-violet-200 ${pathName === '/dashboard' ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className={`lucide lucide-layout-dashboard ${pathName === '/dashboard' ? 'text-white' : 'text-violet-500'}`}><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>
                  <span className="ms-3">Dashboard</span>

                </Link>
              </li>

              {/* Content Managing */}
              <li>
                <button onClick={() => setDropOpen(!dropOpen)} className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg group hover:bg-violet-500 dark:hover:bg-violet-200 transition duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-ungroup text-violet-500"><rect width="8" height="6" x="5" y="4" rx="1" /><rect width="8" height="6" x="11" y="14" rx="1" /></svg>
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Events</span>
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                {dropOpen && (
                  <ul id="dropdown" className="py-2 space-y-2">
                    <li>
                      <Link href="/client/eventpage" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-violet-500 dark:hover:bg-violet-200">Current Events</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/eventregister" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-violet-500 dark:hover:bg-violet-200">Events Registration</Link>
                    </li>
                    <li>
                      <Link href="/dashboard/myevents" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-violet-500 dark:hover:bg-violet-200">My Events</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-violet-500 dark:hover:bg-violet-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-gem text-violet-500"><path d="M6 3h12l4 6-10 13L2 9Z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Results</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-violet-500 dark:hover:bg-violet-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" className="lucide lucide-log-out text-violet-500"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
export default UserDashboard