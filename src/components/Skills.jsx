import React from 'react'

import CPP from '../assets/C++.png';
import Python from '../assets/Python.png';
//import Java from '../assets/java.png';
import Tensorflow from '../assets/Tensorflow.png';
import GCP from '../assets/gcp.png';
import GitHub from '../assets/github.png';
import Terraform from '../assets/terraform.png';
//import Mongo from '../assets/mongo.png';

export default function Skills() {
  return (

    <div name='skills' className='w-full h-screen bg-[#7F00FF] text-gray-300'>
      <div className="container"> 
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={CPP} alt="HTML icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={Python} alt="HTML icon" />
                  <p className='my-4'>Python</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={Java} alt="HTML icon" />
                  <p className='my-4'>Java</p>
              </div> */}
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={Tensorflow} alt="HTML icon" />
                  <p className='my-4'>Tensorflow</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={GitHub} alt="HTML icon" />
                  <p className='my-4'>Github</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={GCP} alt="HTML icon" />
                  <p className='my-4'>GCP</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={Mongo} alt="HTML icon" />
                  <p className='my-4'>Mongo DB</p>
              </div> */}
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' style={{height:'100px'}} src={Terraform} alt="HTML icon" />
                  <p className='my-4'>Terraform</p>
              </div>
          </div>
      </div>
      </div>
    </div>

  )
}
