import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
import { RiFolderSharedFill } from "react-icons/ri";

export const Navbar = () => {
    return (
        <div className='text-black'>
            <ul className='flex gap-14 items-center'>
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* webhosting */}
                    <Link>Web Hosting</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-12 top-5 -translate-x-[50%] p-4 min-w-[400px]">
                        <ul className='text-primary flex shadow-sm shadow-gray-400 items-center p-10 rounded'>
                            {/* hsared hostin */}
                            <li className='flex flex-col items-center justify-center gap-5 border-r px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-gray-100 text-primary text-4xl rounded-full'><RiFolderSharedFill /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>Shared Hosting</Link>
                                    <h5>From $50</h5>
                                </div>
                            </li>
                            {/* Reseller hosting */}
                            <li className='flex flex-col items-center justify-center gap-5 border-r px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-gray-100 text-primary text-4xl rounded-full'><RiFolderSharedFill /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>Reseller Hosting</Link>
                                    <h5>From $50</h5>
                                </div>
                            </li>
                            <li className='flex flex-col items-center justify-center gap-5 px-10 hover:bg-gradient-to-tr from-primary to-secondary p-3 hover:text-white'>
                                <span className='w-20 h-20 flex items-center justify-center bg-gray-100 text-primary text-4xl rounded-full'><RiFolderSharedFill /></span>
                                <div className='text-center'>
                                    <Link className='whitespace-nowrap mb-2 block'>Reseller Hosting</Link>
                                    <h5>From $50</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Dedicated Servers</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Demo</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                        </ul>
                    </div>
                </li>
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
