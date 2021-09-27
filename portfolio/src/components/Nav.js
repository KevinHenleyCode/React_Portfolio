import React from 'react'


function Nav({ currentPage, pageChange }) {
    return(
            <div className='flex flex-col xl:items-end xl:bg-transparent bg-green-500 items-center mr-auto py-6 sticky top-0 z-50'>
                <ul className='flex flex-col items-center xl:flex-row sm:justify-around relative'>
                    <li className='2xl:mr-20 mr-8 xl:bg-green-500 p-1 mb-4 xl:rounded-xl xl:shadow-sm'><a href="#AboutMe" onClick={() => pageChange ('AboutMe')} className={currentPage === 'AboutMe' ? 'text-white' : 'text-black hover:text-white font-bold'}>About Me</a></li>
                    <li className='2xl:mr-20 mr-8 xl:bg-green-500 p-1 mb-4 xl:rounded-xl xl:shadow-sm'><a href="#Portfolio" onClick={() => pageChange ('Portfolio')} className={currentPage === 'Portfolio' ? 'text-white' : 'text-black hover:text-white font-bold'}>Portfolio</a></li>
                    <li className='2xl:mr-20 mr-8 xl:bg-green-500 p-1 mb-4 xl:rounded-xl xl:shadow-sm'><a href="#Contact" onClick={() => pageChange ('Contact')} className={currentPage === 'Contact' ? 'text-white' : 'text-black hover:text-white font-bold'}>Contact</a></li>
                    <li className='2xl:mr-20 mr-8 xl:bg-green-500 p-1 mb-4 xl:rounded-xl xl:shadow-sm'><a href="#Resume" onClick={() => pageChange ('Resume')} className={currentPage === 'Resume' ? 'text-white' : 'text-black hover:text-white font-bold'}>Resume</a></li>
                </ul>
        </div>
    )
}

export default Nav
