import React from 'react'

function Nav({ currentPage, pageChange }) {
    return(
            <div className='flex flex-col sm:items-end sm:bg-transparent bg-red-900 items-center mr-auto py-2 sm:py-4'>
                <ul className='flex flex-col items-center sm:flex-row sm:justify-around'>
                    <li className='sm:mr-32 sm:bg-red-900 p-1 sm:rounded-md sm:shadow-sm'><a href="#AboutMe" onClick={() => pageChange ('AboutMe')} className={currentPage === 'AboutMe' ? 'text-blue-300' : 'text-black hover:text-blue-300 font-bold'}>About Me</a></li>
                    <li className='sm:mr-32 sm:bg-red-900 p-1 sm:rounded-md sm:shadow-sm'><a href="#Portfolio" onClick={() => pageChange ('Portfolio')} className={currentPage === 'Portfolio' ? 'text-blue-300' : 'text-black hover:text-blue-300 font-bold'}>Portfolio</a></li>
                    <li className='sm:mr-32 sm:bg-red-900 p-1 sm:rounded-md sm:shadow-sm'><a href="#Contact" onClick={() => pageChange ('Contact')} className={currentPage === 'Contact' ? 'text-blue-300' : 'text-black hover:text-blue-300 font-bold'}>Contact</a></li>
                    <li className='sm:mr-32 sm:bg-red-900 p-1 sm:rounded-md sm:shadow-sm'><a href="#Resume" onClick={() => pageChange ('Resume')} className={currentPage === 'Resume' ? 'text-blue-300' : 'text-black hover:text-blue-300 font-bold'}>Resume</a></li>
                </ul>
        </div>
    )
}


export default Nav