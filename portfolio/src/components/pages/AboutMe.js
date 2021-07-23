import React from 'react'
import profilePic from '../../images/KevinHenley_Profile.jpg'

function AboutMe() {
    return(
        <div className='flex flex-col justify-center m-auto h-auto mt-auto my-20 py-4 px-10 sm:py-10 w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400 w-full'>
                <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>AboutMe</h2>
                    
                <div className='flex flex-col justify-center'>
                    <img className='container mx-auto flex justify-center my-5 w-60' src={profilePic} alt='Profile picture'/>
                    <h2 className='flex justify-center my-5 text-xl sm:text-4xl'>Kevin Henley</h2>
                    <div className='flex flex-col justify-start my-5 px-5'>
                        <p className='sm:text-2xl text-sm'>I started programming in college but didn’t realize until after I had graduated that that would be what I wanted to do.
                            So, I decided to attend the Rice full stack bootcamp. It has been there that I have learned HTML, CSS, JavaScript, Express, MySQL, Node, React, GraphQL and Apollo.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe
