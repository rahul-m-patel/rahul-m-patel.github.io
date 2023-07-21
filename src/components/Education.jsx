import React from 'react'
import BITS from '../assets/BITS_Pilani.png'
import NYU from '../assets/NYU.png'

export default function Education() {
    return (
        
        <div name='education' className='w-full h-screen bg-[#7F00FF] text-gray-300'>
            <br></br>
            <br></br>
            <br></br>
            <div className="container"> 
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Education
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='mx-auto' style={{ height: '120px' }} src={BITS} alt="HTML icon" />
                    </div>
                    <div>
                        <p><p className='font-bold'>BE (Hons) Computer Science [Aug 2017 - May 2021]</p>
                            Grade: 9.01/10<br></br>
                            Coursework:<br></br>
                            - Data Structures and Algorithms<br></br>
                            - Database<br></br>
                            - Operating System<br></br>
                            {/* - Information Retrieval<br></br>
                            - Artificial Intelligence<br></br>
                            - Computer Networks<br></br> */}
                            </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='mx-auto' src={NYU} alt="HTML icon" />
                    </div>
                    <div>
                        <p><p className='font-bold'>Masters in Computer Science [Sept 2022 - May 2024]</p>
                            Coursework:<br></br>
                            {/* - Algorithms<br></br> */}
                            - Linear Algebra, Probability and Statistics<br></br>
                            - Operating Systems<br></br>
                            - Data Science for Business<br></br>
                            {/* - Programming Languages */}
                        </p>
                    </div>

                </div>

            </div>
            </div>
        </div>
    )
}
