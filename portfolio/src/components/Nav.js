import React from 'react'

function Nav({ currentPage, pageChange }) {
    return(
            <div className='flex flex-col sm:items-end sm:bg-transparent bg-yellow-500 items-center mr-auto py-2 sm:py-4'>
                <ul className='flex flex-col items-center sm:flex-row sm:justify-around'>
                    <li className='sm:mr-20 sm:bg-yellow-500 p-1 sm:rounded-md sm:shadow-sm'><a href="#AboutMe" onClick={() => pageChange ('AboutMe')} className={currentPage === 'AboutMe' ? 'text-white' : 'text-black hover:text-white font-bold'}>About Me</a></li>
                    <li className='sm:mr-20 sm:bg-yellow-500 p-1 sm:rounded-md sm:shadow-sm'><a href="#Portfolio" onClick={() => pageChange ('Portfolio')} className={currentPage === 'Portfolio' ? 'text-white' : 'text-black hover:text-white font-bold'}>Portfolio</a></li>
                    <li className='sm:mr-20 sm:bg-yellow-500 p-1 sm:rounded-md sm:shadow-sm'><a href="#Contact" onClick={() => pageChange ('Contact')} className={currentPage === 'Contact' ? 'text-white' : 'text-black hover:text-white font-bold'}>Contact</a></li>
                    <li className='sm:mr-20 sm:bg-yellow-500 p-1 sm:rounded-md sm:shadow-sm'><a href="#Resume" onClick={() => pageChange ('Resume')} className={currentPage === 'Resume' ? 'text-white' : 'text-black hover:text-white font-bold'}>Resume</a></li>
                </ul>
        </div>
    )
}


export default Nav