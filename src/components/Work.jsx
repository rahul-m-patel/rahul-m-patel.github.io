import React from 'react'
import SAP from '../assets/SAP.png'
import DB from '../assets/DB.png'

export default function Work() {
    return (

        <div name='work' className='w-full h-screen bg-[#7F00FF] text-gray-300'>
            <div className="container"> 
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Work Experience
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                     
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='mx-auto' style={{ height: '150px' }} src={DB} alt="HTML icon" />
                    </div>
                    <div>
                        <p><p className='font-bold'>Developer Analyst [July 2021 - Aug 2022]</p>
                            - Automated deploying and transforming publisher’s data into a desired format to GCP. Onboarded 7 publishers within a year. <br></br>
                            - Have experience in setting up cloud infrastructure using Terraform.<br></br>
                            - Created Airflow DAGs on GCP Composer to automate a task. <br></br>
                        </p>
                    
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                     
                    <div className='sm:text-right text-4xl font-bold'>
                        <img className='mx-auto' style={{ height: '100px' }} src={SAP} alt="HTML icon" />
                    </div>
                    <div>
                        <p><p className='font-bold'>SDE Intern [Aug 2020 - Dec 2020]</p>
                            - Reduced company costs by 40% by automating hibernation of Postgres RDS instances on AWS when not in use. <br></br>
                            - Developed a solution for migrating data from MongoDB to Postgres, SAP HANA.
                        </p>
                    </div>
                    
                </div>

            </div>
            </div>
        </div>

    )
}
