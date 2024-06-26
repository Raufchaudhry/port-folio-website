import React from 'react'

import HTML from '../src/assets/html.png'
import CSS from  '../src/assets/css.png'
import JS from '../src/assets/javascript.png'
import REACT from '../src/assets/react.png'
import GITHUB from '../src/assets/github.png'
import NODEJS from '../src/assets/node.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
        {/* container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>// These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JS} alt="JS icon" />
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={REACT} alt="REACT icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={GITHUB} alt="GITHUB icon" />
                <p className='my-4'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={NODEJS} alt="NODEJS icon" />
                <p className='my-4'>NODE JS</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Skills