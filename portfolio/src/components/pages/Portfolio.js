import React from 'react'
import BestWebsite from '../../images/Ducking_Best_Website.png'
import passwordGen from '../../images/PassWord_Generator.png'
import readmeGen from '../../images/README_Generator.png'

function Project(props) {
    return <p>{props.title}</p>
}

function Portfolio() {
    return(
        <div className='flex flex-col justify-center m-auto h-auto mt-auto my-20 py-4 px-10 sm:py-10 w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>Portfolio</h2>
                
                        <div className='flex items-center flex-col mx-4'>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Ducking Awesome Soundboard'/></h3>
                                <img className='mb-2' src={BestWebsite} alt="Website picture"/>
                                <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://kevinhenleycode.github.io/Group_Project_1/">Site</a>
                                <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500 mb-2" href="https://github.com/KevinHenleyCode/Group_Project_1">GitHub</a>
                                <p className="flex justify-start text-gray-200 ">- Team Mongoose has build an unique soundboard thats allows the stressed indvidual to let go of some frustration. This app
                                runs in the browser and features dynamic HTML and CSS (Bulma), while retrieving data from two different server side APIs
                                (VoiceRSS and FOAAS). This has a clean and polished, responsive user interface that adapts to multiple screen sizes. The
                                soundboard is interactive, as it requries user input to work. It uses the local storage to save the names until a reset
                                is desired.</p>
                            </div>
                        
                            <div className="flex flex-col justify-center bg-black content-top my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Password Generator'/></h3>
                                <img className="mb-2" src={passwordGen} alt="Website picture"/>
                                <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://kevinhenleycode.github.io/Password_Generator/">Site</a>
                                <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/Password_Generator">GitHub</a>
                                <p className="flex justify-start text-gray-200 ">- The point of this project was to get more familiar with JavaScript by creating a password generator</p>
                            </div>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'README Generator'/></h3>
                                <img className="mb-2" src={readmeGen} alt="Website picture"/>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/README_Generator">Site</a>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/README_Generator">GitHub</a>
                                 <p className="flex justify-start text-gray-200 ">- The point of this project was to get a better understanding of Node and the NPM system. This was done using the inquirer
                                package to make a README Generator from the console</p>
                            </div>
                        
                        </div>
                
            </div>
        </div>
    )
}


export default Portfolio