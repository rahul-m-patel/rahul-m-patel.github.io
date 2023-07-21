import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll';

export default function Navbar() {
    const [nav,setNav]=useState(false)
    const handleClick = () =>setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#7F00FF] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo" style={{width:'230px'}}/>
        </div>

        <ul className='hidden md:flex'>
            <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
            <li><Link to='education' smooth={true} duration={500}>Education</Link></li>
            <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li><Link to='work' smooth={true} duration={500}>Work</Link></li>
            <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
            <li>
            <a
              href='https://www.linkedin.com/in/rahul-m-patel/'>
            <FaLinkedin size={25} />
            </a>
            </li>
            <li>
            <a
              href='https://github.com/rahul-m-patel'>
            <FaGithub size={25} />
            </a>
            </li>
        </ul>


        <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* Mobile screen */}
        <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#7F00FF] flex flex-col justify-center items-center'
        }>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
            <li className='py-6 text-4xl'>{' '}<Link onClick={handleClick} to='education' smooth={true} duration={500}>Education</Link></li>
            <li className='py-6 text-4xl'>{' '}<Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
            <li className='py-6 text-4xl'>{' '}<Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
            <li className='py-6 text-4xl'>{' '}<Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
            <li className='py-6 text-4xl'>{' '}<a
              href='https://www.linkedin.com/in/rahul-m-patel/'>
            <FaLinkedin size={25} />
            </a></li>
            <li className='py-6 text-4xl'>{' '}<a
              href='https://github.com/rahul-m-patel'>
            <FaGithub size={25} />
            </a></li>
        </ul>
        {/* Social Media */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/rahul-m-patel/'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/rahul-m-patel'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:rmp630@gmail.com'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://media.licdn.com/dms/document/media/D4E2DAQGkbN5JjrnTGw/profile-treasury-document-pdf-analyzed/0/1689607592207?e=1691020800&v=beta&t=QoD2XSxu8s8iBTqSeGQYbgeM5R6B4ETkpNUXcGs7Qhw'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
