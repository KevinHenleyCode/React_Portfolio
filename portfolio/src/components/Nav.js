import React from 'react'

function Nav({ currentPage, pageChange }) {
    return(
        <div className='bg-red-900 mr-auto shadow-sm py-2 sm:py-4'>
        <ul className='flex flex-col items-center sm:flex-row sm:justify-around'>
            <li><a href="#AboutMe" onClick={() => pageChange ('AboutMe')} className={currentPage === 'AboutMe' ? 'underline text-white' : 'text-black hover:text-blue-300 font-bold'}>About Me</a></li>
            <li><a href="#Portfolio" onClick={() => pageChange ('Portfolio')} className={currentPage === 'Portfolio' ? 'underline text-white' : 'text-black hover:text-blue-300 font-bold'}>Portfolio</a></li>
            <li><a href="#Contact" onClick={() => pageChange ('Contact')} className={currentPage === 'Contact' ? 'underline text-white' : 'text-black hover:text-blue-300 font-bold'}>Contact</a></li>
            <li><a href="#Resume" onClick={() => pageChange ('Resume')} className={currentPage === 'Resume' ? 'underline text-white' : 'text-black hover:text-blue-300 font-bold'}>Resume</a></li>
        </ul>
        </div>
    )
}


export default Nav