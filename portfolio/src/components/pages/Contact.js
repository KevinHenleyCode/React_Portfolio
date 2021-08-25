import React from 'react'

function Contact() {
    return(
         <div className='flex flex-col justify-center m-auto h-auto mt-auto mt-20 py-4 px-10 sm:py-10 w-11/12 lg:w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>Contact</h2>
                <div className='px-4 my-5'>
                    <h3>For more questions you can reach me at my GitHub or Email: </h3>
                   <ul className='flex flex-col mt-10'>
                       <li className='mb-5 list-none no-underline text-red-900 hover:text-white'><a href="https://github.com/KevinHenleyCode">GitHub</a></li>
                       <li className='list-none no-underline text-red-900 hover:text-white'><a href="mailto: kevinhenleyinfo@gmail.com">kevinhenleyinfo@gmail.com</a></li>
                   </ul>
                </div>
            </div>
        </div>
    )
}

export default Contact