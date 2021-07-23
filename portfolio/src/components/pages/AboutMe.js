import React from 'react'
import profilePic from '../../images/KevinHenley_Profile.jpg'

function AboutMe() {
    return(
        <div className='h-auto mt-auto my-20 py-4 px-10 sm:py-10'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-5xl py-2'>AboutMe</h2>
                <img className='container mx-auto flex justify-center my-5 w-60' src={profilePic} alt='Profile picture'/>
                <h2 className='flex justify-center my-5 text-4xl'>Kevin Henley</h2>
                <div className='my-5 px-20'>
                    <p className='text-2xl'>I started programming in college but didn’t realize until after I had graduated that that would be what I wanted to do.
                        So, I decided to attend the Rice full stack bootcamp. It has been there that I have learned HTML, CSS, JavaScript, Express, MySQL and Node. I
                        am now currently working with MongoDB and the rest of the MERN backend.</p>
                </div>
            </div>
        </div>
    )
}


export default AboutMe
