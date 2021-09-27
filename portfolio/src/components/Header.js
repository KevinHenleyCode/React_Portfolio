import React from 'react'
import Container from './Container'


function Header() {
    return(
        <div>
            <header className='flex justify-center py-3 text-white text-6xl bg-black h-20 shadow-2xl sticky top-0 z-50'>Portfolio</header>
             <Container className='relative'/>
        </div>
    )
}

export default Header