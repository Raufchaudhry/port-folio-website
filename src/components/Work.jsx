import React from 'react'
import WorkImg from '../assets/Weather-App.png'
import ProductImg from '../assets/Product-design.png'
import DesignImg from '../assets/Product-design-ad.png'
import CheckImg from '../assets/Checkout-page-pay.png'
import NikeImg from '../assets/nike card.png'
import NavbarImg from '../assets/Nav-bar.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300  bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 '>// Check out some of my recent work</p>
            </div>
                 { /* Container*/}
                     <div 
                      className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                        {/* grid items*/}
                        
                        <div style={{backgroundImage:`url(${WorkImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                 Weather App                              

                                </span>
                                <div className='pt-8 text-center'>
                                    <a  href="/src/assets/Weather-App.png">
                                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    <a >
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'></button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${ProductImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
        Product Card                             

                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/src/assets/Product-design.png">
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${DesignImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
            Product card Ad Design                            

                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/src/assets/Product-design-ad.png">
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${CheckImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Checkout Page Design                               

                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/src/assets/Checkout-page-pay.png">
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${NikeImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Nike Card Design

                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/src/assets/nike card.png">
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        <div style={{backgroundImage:`url(${NavbarImg})`}} 
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                            {/* hover effects */}
                            <div className='opacity-0 group-hover:opacity-100'>
                                <span className='text-2xl font-bold text-white tracking-wider'>
                                Navigation Bar                              

                                </span>
                                <div className='pt-8 text-center'>
                                    <a href="/src/assets/Nav-bar.png">
                                        <button className='text-center rounded-lg px-4 py3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                    </a>
                                   
                                </div>
                            </div>
                        </div>
                     </div>

        </div>

    </div>
  )
}

export default Work