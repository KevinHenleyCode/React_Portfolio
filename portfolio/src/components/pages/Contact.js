import React from 'react'

function Contact() {
    return(
         <div className='h-auto mt-auto my-20 py-4 px-10 sm:py-10'>
            <div className='mb-20 pb-10 shadow-sm bg-gray-400'>
                    <h2 className='flex justify-center bg-black text-white text-5xl py-2'>Contact</h2>
                <div className='container mx-auto flex justify-start px-4 my-5'>
                    <form className='font-bold text-lg'>
                        <label htmlFor="name">Name:</label> <br/>
                        <input type="text" name='name' size="50" className='mb-4' /> <br/>
                        <label htmlFor="email">Email:</label> <br/>
                        <input type="email" name='email' size="50" className='mb-4'/> <br/>
                        <label htmlFor="message" name='message'>Enter your message here:</label> <br/>
                        <textarea name="message" cols="50" rows="10" className='mb-4'></textarea> <br/>
                        <button className='text-white bg-red-900 px-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact