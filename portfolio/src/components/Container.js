import React, { useState } from 'react'
import Nav from './Nav'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

export default function Container() {

    const [getPage, setPage] = useState('AboutMe')

    const render  = () => {
        if (getPage === 'AboutMe'){
            return <AboutMe/>
        }
        if (getPage === 'Portfolio'){
            return <Portfolio/>
        }
        if (getPage === 'Contact'){
            return <Contact/>
        }
            return <Resume/>
    }
    
    const pageChange = (page) => setPage(page)

    return (
        <div>
            
            <Nav getPage={getPage} pageChange={pageChange}/>
            {render()}

        </div>
    )



}
