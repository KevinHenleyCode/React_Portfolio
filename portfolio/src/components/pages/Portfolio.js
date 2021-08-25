import React from 'react'
import BestWebsite from '../../images/Ducking_Best_Website.png'
import passwordGen from '../../images/PassWord_Generator.png'
import readmeGen from '../../images/README_Generator.png'
import Ecommerce from '../../images/Ecommerce_Backend.png'
import Quiz from '../../images/Coding_Quiz.png'
import Bar from '../../images/Aggretsukos_Karaoke.png'

function Project(props) {
    return <p>{props.title}</p>
}

function Portfolio() {
    return(
        <div className='flex flex-col justify-center m-auto h-auto mt-auto mt-20 py-4 px-10 sm:py-10 w-11/12 lg:w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>Portfolio</h2>
                
                        <div className='flex items-center flex-col mx-4'>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Ducking Awesome Soundboard'/></h3>
                                <img className='mb-2' src={BestWebsite} alt="Website picture"/>
                                <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/Ducking-Awesome-Soundboard">Site</a>
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
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://www.youtube.com/watch?v=0kXE9iUG1rg&ab_channel=KevinHenley">Video</a>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/README_Generator">GitHub</a>
                                 <p className="flex justify-start text-gray-200 ">- The point of this project was to get a better understanding of Node and the NPM system. This was done using the inquirer
                                package to make a README Generator from the console</p>
                            </div>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Ecommerce Backend'/></h3>
                                <img className="mb-2" src={Ecommerce} alt="Website picture"/>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://www.youtube.com/watch?v=3Fyd8C7vyHI&ab_channel=KevinHenley">Video</a>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/ecommerce_backend">GitHub</a>
                                 <p className="flex justify-start text-gray-200 ">- Using Express and Insomnia to connect to an ecommerce database. I am able to view, create, update and delete data from the tables</p>
                            </div>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Coding Quiz'/></h3>
                                <img className="mb-2" src={Quiz} alt="Website picture"/>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://kevinhenleycode.github.io/Coding_Quiz/">Site</a>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/Coding_Quiz">GitHub</a>
                                 <p className="flex justify-start text-gray-200 ">- The objective of this project was to work with taking in user input, buttons and localStorage</p>
                            </div>

                            <div className="flex flex-col justify-center bg-black my-4 mx-2 border-4 shadow-sm border-red-900 p-2 w-full md:h-full">
                                <h3 className="flex justify-center mb-2 text-red-500 text-2xl"><Project title = 'Aggretsukos Karaoke'/></h3>
                                <img className="mb-2" src={Bar} alt="Website picture"/>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://aggretsukos-bar.herokuapp.com/">Site</a>
                                 <a className="flex justify-start mb-2 underline text-green-200 hover:text-red-500" href="https://github.com/KevinHenleyCode/aggretsukos-bar">GitHub</a>
                                 <p className="flex justify-start text-gray-200 ">- Aggretsukos is a website designed to elevate karaoke bar experiences for both employees and guests. 
                                 Guests are able to create a log-in and order food/beverage items, 
                                 they are given approximate wait times for these items and are able to view their order history, 
                                 they can make song requests and view the request history of the night, and receive a notification when their turn is next</p>
                            </div>
                        
                        </div>
                
            </div>
        </div>
    )
}


export default Portfolio