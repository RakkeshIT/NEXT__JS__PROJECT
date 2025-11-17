import React from 'react'
import styles from '@/app/styles/AboutPage.module.css'
import Image from 'next/image'
import AboutBanner from '@/assets/images/pages/AboutBanner.png'
import { Flame, Gem, Hexagon, Medal, Unlink } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/Custom/Card'
const AboutPage = () => {
  return (
    <div className={`${styles.Container} p-12 max-w-7xl mx-auto`}>
      <div className={styles.About__Image}>
        <Image
          src={AboutBanner}
          alt='About Banner'
          width={500}
          layout='responsive'
          priority
          className={styles.Image}
        />
      </div>
      <div className='About__Text w-full md:w-4/6 mx-auto'>
        <h1 className='font-bold text-4xl py-5 text-slate-700 '>About Page</h1>
        {/* Create a Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 place-items-center'>
          <Card
           customClass='dark:bg-lime-50 rounded-xl shadow-lg hover:shadow-indigo-400/50 transition duration-400 ease-in-out'
          IconBg='Rounded'
          border='Indigo'
          icons={<Hexagon />}
          title={'Student Event'}
          description={'Engaging events where students showcase talent, compete, and learn together.'}
          descriptionClass='text-sm'
          buttonText={'More'}
          href={''}
          />
            <Card
           customClass='dark:bg-lime-50 rounded-xl shadow-lg hover:shadow-indigo-400/50 transition duration-400 ease-in-out'
          IconBg='Rounded'
          border='Indigo'
          icons={<Gem />}
          title={'Certifications'}
          descriptionClass='text-sm'
          description={'Recognized certifications that validate student skills and boost careers.'}
          buttonText={'More'}
          href={''}
          />
          
            <Card
           customClass='dark:bg-lime-50 rounded-xl shadow-lg hover:shadow-indigo-400/50 transition duration-400 ease-in-out'
          IconBg='Rounded'
          border='Indigo'
          icons={<Medal />}
          title={'Medals'}
          descriptionClass='text-sm'
          description={'Awards for excellence in academics, sports, and activities, inspiring success.'}
          buttonText={'More'}
          href={''}
          />
            <Card
           customClass='dark:bg-lime-50 rounded-xl shadow-lg hover:shadow-indigo-400/50 transition duration-400 ease-in-out'
          IconBg='Rounded'
          border='Indigo'
          icons={<Flame />}
          title={'Coordinators'}
          descriptionClass='text-sm'
          description={'Leaders who plan, organize, and ensure smooth event execution.'}
          buttonText={'More'}
          href={''}
          />
          </div>
      </div>

    </div>
  )
}

export default AboutPage