import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#7F00FF]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 text-2xl'>Hi, myself</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RAHUL PATEL
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        👨🏻‍💻I'm a graduate Computer Science student at NYU, Courant</p>
       
        <div>
            <a href='https://media.licdn.com/dms/document/media/D4E2DAQGkbN5JjrnTGw/profile-treasury-document-pdf-analyzed/0/1689607592207?e=1691020800&v=beta&t=QoD2XSxu8s8iBTqSeGQYbgeM5R6B4ETkpNUXcGs7Qhw'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Resume
            <span className='duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </a>
        </div>
      </div>
    </div>
  )
}
