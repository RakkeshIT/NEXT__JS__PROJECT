'use client'
import React from 'react'
import styles from '@/app/styles/EventPage.module.css';
import Link from 'next/link';
const ResultsPage = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className='ms-52'>
          <h1 className='text-white font-bold text-4xl text-center'>All Results</h1>
          <div>
            <Link className='text-white font-semibold hover:text-red-500 hover:transition-all hover:duration-500' href=''>Home</Link> <span> / </span> <span className='font-semibold text-red-500 '>Results</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultsPage