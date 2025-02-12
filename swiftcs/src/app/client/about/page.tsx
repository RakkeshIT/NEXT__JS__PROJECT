import React from 'react'
import styles from '@/app/styles/AboutPage.module.css'
import Image from 'next/image'
import AboutBanner from '@/assets/images/pages/AboutBanner.png'
const AboutPage = () => {
  return (
    <div className={`${styles.Container} p-12` }>
      <div className='About__Image'>
        <Image
          src={AboutBanner}
          alt='About Banner'
          width={500}
          layout='responsive'
          priority
        />
      </div>
      <div className='About__Text w-4/6'>
        <h1 className='font-bold text-4xl py-5 text-slate-700'>About Page</h1>
       <ul className='text-justify'>
        <li>Students Wings for Information Technology (SWIFT) is the annual flagship event of the Computer Science Department, bringing together students to showcase their skills, creativity, and passion for technology.</li>
        <li>SWIFT is a dynamic platform that features both technical and non-technical events, fostering innovation, collaboration, and competitive spirit.</li>
        <li>From coding competitions, hackathons, and tech quizzes to artistic challenges, debates, and fun-filled activities, SWIFT offers something for everyone.</li>
        <li>Our mission is to inspire, educate, and empower students by providing an engaging space to explore new ideas and enhance their problem-solving abilities.</li>
        <strong>Join us in making SWIFT an unforgettable experience of learning, networking, and excitement! 🚀</strong>
       </ul>
      </div>
    </div>
  )
}

export default AboutPage