import React from 'react'
import GitHub from '../icons/github_icon.png'
import LinkedIn from '../icons/linkedin_icon.png'
import StackOverflow from '../icons/stackoverflow_icon.png'

function Footer() {
    return(
        <div className='bg-gray-500 mt-auto my-20 py-10'>
        <ul className='flex justify-around'>
            <li><a href="https://github.com/KevinHenleyCode"><img className='w-10' src={GitHub} alt="img" /></a></li>
            <li><a href="https://www.linkedin.com/in/kevin-henley/"><img className='w-10' src={LinkedIn} alt="img" /></a></li>
            <li><a href="https://stackoverflow.com/users/16102427/kevinhenleycode?tab=profile"><img className='w-10' src={StackOverflow} alt="img" /></a></li>
        </ul>
        </div>
    )
}


export default Footer