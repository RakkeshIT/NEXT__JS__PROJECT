
import React from 'react'
import styles from '@/app/styles/Auth.module.css';
import Link from 'next/link';
const page = () => {
  return (
    <>
         <div className={`bg-gray-50 dark:bg-indigo-700 ${styles.Container}`}>
                <div className={`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ${styles.box}`}>

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                ✨ Login Your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" >
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">🤵 Email</label>
                                    <input type="email" name="email" id="email" placeholder="example@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                       <button type='submit' className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        Send Link
                                    </span>
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    You Don&apos;t have account ? <Link href="/client/auth/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create Account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
    </>
  )
}

export default page