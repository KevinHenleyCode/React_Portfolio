import React from 'react'
import Nav from './Nav'

function Header() {
    return(
        <div className='bg-red-200'>
            <div className='flex justify-center py-3 text-4xl'>Portfolio</div>
            <Nav/>
        </div>
    )
}

export default Header