import React from 'react'
import heroImg from "../../asstes/shutterstock.png"
import { BsFillCheckSquareFill } from 'react-icons/bs'
function Hero() {
    return (
        <section className='py-8 px-2 sm:py-16'>
            <div className='container mx-auto'>
                <div className="hero grid grid-cols-1 lg:grid-cols-3 gap-4 items-center px-3 md:px-0">
                    <div className='lg:col-span-2'>
                        <div className="hero-title">
                            <h1 className='text-2xl sm:text-4xl lg:text-6xl flex flex-col gap-5 font-bold spca'>
                                <span className='block text-primary'>Your Digital Presence, </span>
                                {/* <span className='block'></span> */}
                                <span>Our Reliable Hosting</span>
                            </h1>
                            <p className='text-base text-black my-6 max-w-xl'>Experience seamless website performance and unbeatable uptime, backed by our cutting-edge hosting infrastructure with our domain hosting services.</p>
                            {/* list item hero */}
                            <ul className='space-y-5'>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Cloud Linux</span>
                                </li>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Lite Speed</span>
                                </li>
                                <li className='flex gap-5'>
                                    <span className='text-2xl'><BsFillCheckSquareFill className='text-primary' /></span>
                                    <span>Free SSL</span>
                                </li>
                            </ul>
                            <div className="buttons mt-10 space-x-5">
                                <button className='hover:bg-slate-400 py-3 px-5 rounded-lg border bg-slate-200 duration-300 hover:text-white'>Get Serrated</button>
                                <button className='hover:bg-slate-400 py-3 px-5 rounded-lg border bg-slate-200 duration-300 hover:text-white'>Help Me Choose</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={heroImg} alt="" className='w-full max-w-[calc(100%-200px)] md:max-w-full mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero