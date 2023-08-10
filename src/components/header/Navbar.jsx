import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { RiServerFill } from "react-icons/ri";

export const Navbar = () => {
    return (
        <div className='text-black'>
            <ul className='flex gap-14 items-center'>
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* webhosting */}
                    <Link>Web Hosting</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-12 top-5 -translate-x-[40%] p-4">
                        <ul className='text-primary flex shadow-sm shadow-gray-400 items-center p-10 rounded bg-white'>
                            {/* hsared hostin */}
                            <li className='flex flex-col items-center justify-center gap-5 border-r px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-blue-50 text-primary text-4xl rounded-full'><RiServerFill /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>Shared Hosting</Link>
                                    <h5 className='text-sm text-black'>From $50</h5>
                                </div>
                            </li>
                            {/* Reseller hosting */}
                            <li className='flex flex-col items-center justify-center gap-5 border-r px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-blue-50 text-primary text-4xl rounded-full'><FaServer /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>Reseller Hosting</Link>
                                    <h5 className='text-sm text-black'>From $50</h5>
                                </div>
                            </li>
                            <li className='flex flex-col items-center justify-center gap-5 px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-blue-50 text-primary text-4xl rounded-full'><MdMarkEmailRead /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>E-mail Hosting</Link>
                                    <h5 className='text-sm text-black'>From $50</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* webhosting */}
                    <Link>Dedicated Servers</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-8 top-5 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-400 items-start p-2 rounded bg-[#ffffffda]'>
                            <li className='flex flex-col items-center justify-center gap-5 border-r px-10 p-3'>
                                {/* By Region */}
                                <ul className='flex flex-col space-y-3 whitespace-nowrap drop-mega'>
                                    <li className='text-bold text-xl'>By Region</li>
                                    <li className='font-normal'><Link className='hover:text-primary'>North America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Europe</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>South America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Asia</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Africa</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='flex flex-col items-center justify-center gap-3 border-r px-10 p-3'>
                                {/*   By Options */}
                                <ul className='flex flex-col space-y-3 whitespace-nowrap drop-mega'>
                                    <li className='text-bold text-xl'>By Options</li>
                                    <li className='font-normal'><Link className='hover:text-primary'>1 Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Unmetered Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>10Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Dedicated GPU</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>IPv6</Link></li>
                                </ul>
                            </li>
                            <li className='flex flex-col items-center justify-center gap-5 px-10 p-3'>
                                {/*    Popular Locations */}
                                <ul className='flex gap-5 whitespace-nowrap drop-mega'>
                                    <ul className='space-y-3'>
                                        <li className='text-bold text-xl'>Popular Locations</li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Paris</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>France</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Amsterdam</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Netherlands</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Montreal</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Canada</Link></li>
                                    </ul>
                                    <ul className='mt-9 space-y-3'>
                                        <li className='font-normal'><Link className='hover:text-primary'>Los Angeles</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>United-States</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>London</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>United Kingdom</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Dusseldorf</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Germany</Link></li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                {/* domain menu */}
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Domain</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>VPS</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Email Hosting</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>SSL</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>.com</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>org</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>.net</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>About Us</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>VPS</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Email Hosting</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
