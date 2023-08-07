import React from 'react'
import logo from "../../hostflu-logo.png"
import "./header.css"
import { FaHouseUser, FaPhoneVolume, FaEnvelope } from "react-icons/fa";

export const Header = () => {
    return (
        <header className=''>
            <div className="top-header">
                <div className="container mx-auto">
                    <ul className='flex justify-end items-center gap-12 text-white text-lg'>
                        <li className='flex items-center gap-4'><FaHouseUser /> Home</li>
                        <li className=''><a href="tel:+8801719375526" className='flex items-center gap-4'><FaPhoneVolume />+880 1719-375526</a></li>
                        <li className=''><a href="mailto:hostflu@gmail.com" className='flex items-center gap-4'><FaEnvelope />hostflu@gmail.com</a></li>


                    </ul>
                </div>
            </div>
            <nav className=''>
                <div className="container">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
