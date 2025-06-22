import React from 'react'
import heroImage from '../assets/home-img.jpeg'
import resume from '../assets/resume.pdf'

function Hero() {
  return (
    <div className='bg-black text-white text-center py-12'>
        <img className='mx-auto mb-8 w-48 h-48 rounded-full object-cover
        transform transition-transform duration-300 hover:scale-110  hover:shadow-[0_0_30px_10px_rgba(0,255,255,0.3)]' src={heroImage} alt="Loading..." />
         
         <h1 className='text-4xl font-bold px-6'> 
            I'm {}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sanan Nawaz</span>
            , Full-Stack Developer
         </h1>
         <p className='mt-4 text-lg text-gray-300 px-4'>I specialize building modern and responsive web applications.</p>
         <div className='mt-8 space-x-6'>

           <a href="#contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact with Me</button>
            </a>
            
            <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className='bg-gradient-to-r from-pink-700 to-yellow-700 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </a>
         </div>
    </div>
  )
}

export default Hero