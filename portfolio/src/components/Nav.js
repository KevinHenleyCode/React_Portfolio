import React from 'react'

function Nav({ currentPage, pageChange }) {
    return(
        <div className='bg-gray-500 mr-auto py-2 sm:py-4'>
        <ul className='flex flex-col items-center sm:flex-row sm:justify-around'>
            <li><a href="#AboutMe" onClick={() => pageChange ('AboutMe')} className={currentPage === 'aboutMe' ? 'underline text-blue-400' : 'text-black hover:text-blue-300'}>About Me</a></li>
            <li><a href="#Portfolio" onClick={() => pageChange ('Portfolio')} className={currentPage === 'portfolio' ? 'underline text-blue-400' : 'text-black'}>Portfolio</a></li>
            <li><a href="#Contact" onClick={() => pageChange ('Contact')} className={currentPage === 'contact' ? 'underline text-blue-400' : 'text-black'}>Contact</a></li>
            <li><a href="#Resume" onClick={() => pageChange ('Resume')} className={currentPage === 'resume' ? 'underline text-blue-400' : 'text-black'}>Resume</a></li>
        </ul>
        </div>
    )
}


export default Nav