import React, { useState } from 'react'
import Nav from './Nav'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function Container() {

    const [currentPage, setPage] = useState('AboutMe')

    const render  = () => {
        if (currentPage === 'AboutMe'){
            return <AboutMe/>
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio/>
        }
        if (currentPage === 'Contact'){
            return <Contact/>
        }
            return <Resume/>
    }
    
    const pageChange = (page) => setPage(page)

    return (
        <div className=''>
            
            <Nav currentPage={currentPage} pageChange={pageChange}/>
            {render()}

        </div>
    )



}
