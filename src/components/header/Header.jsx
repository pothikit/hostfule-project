import * as React from "react";
import logo from "../../hostflu-logo.png"
import "./header.css"
import { FaPhoneVolume, FaEnvelope } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className=''>
            <div className="top-header py-2">
                <div className="container mx-auto">
                    <ul className='flex justify-end items-center gap-12 text-white text-lg'>
                        <li className=''><a href="tel:+8801719375526" className='flex items-center gap-4'><FaPhoneVolume />+880 1719-375526</a></li>
                        <li className=''><a href="mailto:hostflu@gmail.com" className='flex items-center gap-4'><FaEnvelope />hostflu@gmail.com</a></li>
                        <li className=''><Link className="flex items-center gap-4" to="login"><RxAvatar />login</Link></li>
                        <li className=''><Link className="flex items-center gap-4" to="login"><RxAvatar />Registration</Link></li>
                    </ul>
                </div>
            </div>
            <nav className=''>
                <div className="container mx-auto">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}
