import React from 'react'
import Container from "./Container";

function Header() {
    return(
        <div className='bg-red-200'>
            <div className='flex justify-center py-3 text-4xl'>Portfolio</div>
             <Container/>
        </div>
    )
}

export default Header