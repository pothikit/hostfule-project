import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";

export const Navbar = () => {
    return (
        <div className='text-black'>
            <ul className='flex gap-14 items-center'>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Web Hosting</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>VPS</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Email Hosting</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Cloud Server</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Demo</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Domain</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Shared Hosting</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>VPS</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>Email Hosting</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>SSL</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200' />
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute cursor-pointer hidden group-hover:block pt-8 top-0">
                        <ul className=' bg-gradient-to-tr from-primary to-secondary text-white p-6 flex-col flex shadow-xl shadow-gray-400 gap-5 rounded'>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>.com</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>org</Link></li>
                            <li className='hover:opacity-70'><Link className='whitespace-nowrap'>.net</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'><Link>Contact</Link><BiSolidDownArrow className='group-hover:rotate-180 duration-200' />
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
