import React from 'react'

function Navebar() {
  return (
    <nav className='bg-black text-white py-4  px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between item-center'>
            <div className='text-3xl font-bold md:inline text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sanan Nawaz</div>
            <div className='space-x-6 hidden md:inline'>
                <a className='hover:text-gray-400' href='#home'>Home</a>
                <a className='hover:text-gray-400' href='#about'>About Me</a>
                <a className='hover:text-gray-400' href='#services'>Services</a>
                <a className='hover:text-gray-400' href='#projects'>Projects</a>
                <a className='hover:text-gray-400' href='#contact'>Contact</a>
            </div>
            <a href="#contact">
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect Me</button>
            </a>
        </div>
    </nav>
  )
}

export default Navebar