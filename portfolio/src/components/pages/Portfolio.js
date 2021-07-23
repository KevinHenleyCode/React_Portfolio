import React from 'react'
import BestWebsite from '../../images/Ducking_Best_Website.png'
import passwordGen from '../../images/PassWord_Generator.png'
import readmeGen from '../../images/README_Generator.png'

function Portfolio() {
    return(
        <div className='h-auto mt-auto my-20 py-4 px-10 sm:py-10'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-5xl py-2'>Portfolio</h2>
                
                        <div className='flex md:flex-row flex-col items-center mx-4'>

                            <div class="flex justify-center my-2 mx-2">
                                <img className='w-auto' src={BestWebsite} alt="Website picture"/>
                            </div>
                        
                            <div class="flex justify-center my-2 mx-2">
                                <img class="workImg" src={passwordGen} alt="Website picture"/>
                            </div>

                            <div class="flex justify-center my-2 mx-2">
                                <img class="workImg" src={readmeGen} alt="Website picture"/>
                            </div>
                        
                        </div>
                
            </div>
        </div>
    )
}


export default Portfolio