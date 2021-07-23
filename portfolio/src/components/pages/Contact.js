import React from 'react'

function Contact() {
    return(
         <div className='flex flex-col justify-center m-auto h-auto mt-auto mt-20 py-4 px-10 sm:py-10 w-11/12 lg:w-1/2'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                    <h2 className='flex justify-center bg-black text-white text-xl sm:text-5xl py-2'>Contact</h2>
                <div className='px-4 my-5'>
                    <form className='flex flex-col justify-center font-bold text-sm sm:text-xl'>
                        <label htmlFor="name">Name:</label> <br/>
                        <input type="text" name='name' size="auto" className='mb-4' /> <br/>
                        <label htmlFor="email">Email:</label> <br/>
                        <input type="email" name='email' size="auto" className='mb-4'/> <br/>
                        <label htmlFor="message" name='message'>Enter your message here:</label> <br/>
                        <textarea name="message" cols="auto" rows="10" required className='mb-4 resize'></textarea> <br/>
                        <button className='text-white bg-red-900 px-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact