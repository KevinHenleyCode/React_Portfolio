import React from 'react'
import GitHub from '../icons/github_icon.png'
import LinkedIn from '../icons/linkedin_icon.png'
import StackOverflow from '../icons/stackoverflow_icon.png'

function Footer() {
    return(
        <div className='bg-gray-500 mt-auto my-20 py-4 sm:py-10'>
        <ul className='flex flex-col items-center sm:flex-row sm:justify-around'>
            <li className='mb-4'><a href="https://github.com/KevinHenleyCode"><img className='w-6 sm:w-10' src={GitHub} alt="img" /></a></li>
            <li className='mb-4'><a href="https://www.linkedin.com/in/kevin-henley/"><img className='w-6 sm:w-10' src={LinkedIn} alt="img" /></a></li>
            <li className=''><a href="https://stackoverflow.com/users/16102427/kevinhenleycode?tab=profile"><img className='w-6 sm:w-10' src={StackOverflow} alt="img" /></a></li>
        </ul>
        </div>
    )
}


export default Footer