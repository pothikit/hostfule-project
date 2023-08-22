import * as React from "react";
import logo from "../../hostflu-logo.png"
import "./header.css"
import { FaEnvelope, FaWhatsappSquare } from "react-icons/fa";
// import { RxAvatar } from "react-icons/rx";
import { } from "react-icons/md";
import { Link } from 'react-router-dom';
import { Navbar } from "./Navbar";

export const Header = () => {
    return (
        <>
            <header className=''>
                <div className="top-header py-1">
                    <div className="container mx-auto">
                        <ul className='flex justify-end items-center gap-12 text-white text-lg'>
                            <li className=''><a href="https://wa.me/+8801719375526" className='flex items-center gap-4'><span className="rotate-[270deg]"><FaWhatsappSquare /></span>+8801719375526</a></li>
                            <li className=''><a href="mailto:hostflu@gmail.com" className='flex items-center gap-4'><FaEnvelope />Contact us</a></li>
                            <Link to="https://my.hostflu.com/register.php" target="_blank" className="p-1 border border-black border-opacity-40 hover:text-black hover:border-white duration-500 px-4 text-white rounded-md text-base">CLIENT PORTAL</Link>
                        </ul>
                    </div>
                </div>

            </header>
            {/* navbar */}
            <nav className='border-b border-primary border-opacity-20 py-3 sticky top-0 bg-white z-50'>
                <div className="container mx-auto">
                    <div className="navigation-menu flex justify-between items-center py-2">
                        <div className="logo">
                            <Link to="/"><img src={logo} alt="Logo" width='150' /></Link>
                        </div>
                        <Navbar></Navbar>
                    </div>
                </div>
            </nav>
        </>
    )
}
