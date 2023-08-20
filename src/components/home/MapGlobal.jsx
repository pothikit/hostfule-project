import React from 'react'
import map from "../../asstes/map.png"
import { BiHomeAlt2 } from 'react-icons/bi'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

function MapGlobal() {
    return (
        <section className='py-20 bg-gradient-to-b from-secondary to-50%  to-primary'>
            <div className="container mx-auto">
                <div className="section-top text-center">
                    <h1 className='text-2xl md:text-[2.5rem] text-white font-semibold'>GLOBAL AVAILITY</h1>
                    <p className='text-white mt-5'>We offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands.</p>
                </div>
                <div className='flex items-center mt-24 gap-x-10 justify-center'>
                    <div className="">
                        <ul className='flex flex-col gap-9'>
                            <li className='w-16 h-16 flex items-center justify-center text-3xl text-gray-600 bg-white rounded-lg'><BiHomeAlt2 /></li>
                            <li className='w-16 h-16 flex items-center justify-center text-3xl text-gray-600 bg-white rounded-lg'><AiOutlinePlus /></li>
                            <li className='w-16 h-16 flex items-center justify-center text-3xl text-gray-600 bg-white rounded-lg'><AiOutlineMinus /></li>
                        </ul>
                    </div>
                    <div className=''>
                        <img src={map} alt="map" className='w-full' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapGlobal