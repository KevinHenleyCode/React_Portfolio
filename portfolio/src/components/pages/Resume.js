import React from 'react'
import myResume from '../../assets/Kevin_Henley_Resume_2021.pdf'
import downloadIcon from '../../icons/download_icon.svg'

function Resume() {
    return(
         <div className='flex flex-col justify-center m-auto h-auto mt-auto my-20 py-4 px-10 sm:py-10 w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>Resume</h2>
                <div className='flex flex-col items-center my-5 px-20'>
                    <div className='flex flex-col justify-center mb-20'>

                    <h2 className='text-md sm:text-2xl font-bold underline'>Front End Skills:</h2> 
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>Tailwind</li>
                        <li>React</li>
                    </ul>
                    <br/>
                    <h2 className='text-md sm:text-2xl font-bold underline'>Back End Skills:</h2>
                    <ul>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul> 
                    </div>
                </div>

                <a href={myResume} download className="flex flex-col items-center">
                <img className='w-6 sm:w-10' src={downloadIcon} alt="downloadIcon"/>
                <h3 className='hover:text-red-700 text-md sm:text-xl'>Resume</h3>
                </a>
                
            </div>
        </div>
    )
}


export default Resume