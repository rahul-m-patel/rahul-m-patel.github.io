import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';


export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#7F00FF]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-green-100 text-2xl'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#99ecf1]'>
          RAHUL PATEL
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#4bebad]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#4bebad] py-4 max-w-[700px]'>
        👨🏻‍💻Graduate Computer Science student at NYU, Courant</p>
       
        <div>
            <a href='https://drive.google.com/file/d/1RuSlLhittzpfM0gaSnEp4U--Q6l9iYZc/view?usp=sharing'>
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
