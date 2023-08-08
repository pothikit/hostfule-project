import * as React from "react";
import logo from "../../hostflu-logo.png"
import "./header.css"
import { FaEnvelope, FaWhatsappSquare } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <header className=''>
            <div className="top-header py-2">
                <div className="container mx-auto">
                    <ul className='flex justify-end items-center gap-12 text-white text-lg'>
                        <li className=''><a href="https://wa.me/+8801719375526" className='flex items-center gap-4'><span className="rotate-[270deg]"><FaWhatsappSquare /></span>+880 1719-375526</a></li>
                        <li className=''><a href="mailto:hostflu@gmail.com" className='flex items-center gap-4'><FaEnvelope />hostflu@gmail.com</a></li>
                        <li className=''><Link className="flex items-center gap-4" to="login"><RxAvatar />login</Link></li>
                        <li className=''><Link className="flex items-center gap-4" to="login"><RxAvatar />Registration</Link></li>
                    </ul>
                </div>
            </div>
            <nav className='border-b border-primary border-opacity-20 py-2'>
                <div className="container mx-auto">
                    <div className="navigation-menu flex justify-between items-center py-2">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="Logo" /></Link>
                        </div>
                        <Navbar></Navbar>
                    </div>
                </div>
            </nav>
        </header>
    )
}
