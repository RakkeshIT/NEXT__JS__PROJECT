import React from 'react'
import Styles from '@/app/styles/HomePage.module.css'
import master from '@/assets/images/pages/master.png'
import Image from 'next/image'
const HomePage = () => {
  return (
    <div className={Styles.Container}>
      <div className='Text__Section'>
        <h1 className='text-xl md:text-3xl lg:text-5xl font-bold'>Student's Wings of Information Technology</h1>
        <h3 className='text-xl md:text-2xl lg:text-3xl mt-6 ms-2'>Department of Computer Science</h3>
        {/* Buttons */}
        <div className='homeButton mt-6'>
          <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About More</button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Current Events
            </span>
          </button>
        </div>
      </div>
      <div className='Image__Section'>
        <Image
          className={Styles.Animi}
          src={master} alt='Home Image'
          width={500}
          layout='responsive' 
          priority
          />
      </div>
    </div>
  )
}

export default HomePage