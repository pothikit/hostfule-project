import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";

import { FaEnvelope } from "react-icons/fa";
import ScrollToTop from '../ScrollToTop';

export const Navbar = () => {
    const [dropdown, setDropdown] = useState(null);
    const [mini, setMini] = useState(null)
    const screen = window.innerWidth;
    const handleNav = (e, navNo) => {
        e.stopPropagation();
        if (screen > 768) {
            setDropdown(null)
        }
        else if (dropdown !== navNo) {
            setDropdown(navNo)
        }
        else {
            setDropdown(!dropdown)
        }
    };
    const handleClikSubMenu = (e) => {
        setMini(900)
    }
    return (
        <ul className='flex flex-col md:flex-row gap-1 lg:gap-14 md:items-center space-y-5 md:space-y-0'>
            < ScrollToTop top={mini} />
            {/* webhosting with dorpdown */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 1)}>
                {/* webhosting */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='md:group-hover:text-primary text-lg font-normal'>Web Hosting</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 1 ? "block" : "hidden"}`}>
                    <ul className='flex flex-col sm:flex-row shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/* Shared Hosting */}
                            <Link to="/shared-hosting" onClick={(e) => e.stopPropagation()} className='hover:text-primary'><h4 className='text-base text-left px-10 whitespace-nowrap'>Shared Hosting</h4></Link>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link to="/shared-hosting" onClick={handleClikSubMenu} className='hover:text-primary'>Mini</Link></li>
                                <li className='font-normal'><Link to="" className='hover:text-primary'>Starter</Link></li>
                                <li className='font-normal'><Link to="" className='hover:text-primary'>Professional</Link></li>
                                <li className='font-normal'><Link to="" className='hover:text-primary'>Business</Link></li>
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        <li className='space-y-5'>
                            {/*   Reseller Hosting */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>Reseller Hosting</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -1</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -2</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>RSP -3</Link></li>
                            </ul>
                        </li>
                        <li className='space-y-5'>
                            {/*   Reseller Hosting */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>E-mail Hosting</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>StartUp</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Micro Team</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Team Plus</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>CloudMail Express</Link></li>
                            </ul>
                        </li>


                    </ul>
                </div>
            </li>
            {/* dedicated server with dorpdown */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 2)}>
                {/* Dedicated */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>Dedicated Servers</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 2 ? "block" : "hidden"}`}>
                    <ul className='flex shadow-sm flex-wrap md:flex-nowrap shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5 sm:w-1/2 md:w-auto w-full'>
                            {/* By Region */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>By Region</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>North America</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Europe</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>South America</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Asia</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Africa</Link></li>
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        <li className='space-y-5 sm:w-1/2 md:w-auto w-full'>
                            {/*   By Options */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>By Options</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega md:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>1 Gbps Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Unmetered Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>10Gbps Bandwidth</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Dedicated GPU</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>IPv6</Link></li>
                            </ul>
                        </li>
                        <li className='space-y-5 mb-3 sm:w-full md:w-auto w-full'>
                            {/*    Popular Locations */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap sm:mt-10 md:mt-0'>Popular Locations</h4>
                            <ul className='flex gap-5 sm:flex-nowrap flex-wrap whitespace-nowrap drop-mega'>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10 flex-1 lg:flex-auto'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Paris</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>France</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Netherlands</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Montreal</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Canada</Link></li>
                                </ul>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10 flex-1 lg:flex-auto'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Los Angeles</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>United-States</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>London</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>United Kingdom</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Germany</Link></li>
                                </ul>
                            </ul>
                        </li>
                    </ul>
                </div>
            </li>
            {/* Domain */}
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 3)}>
                {/* Domain */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>Domain</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 3 ? "block" : "hidden"}`}>
                    <ul className='flex flex-wrap sm:flex-nowrap shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/* Shared Hosting */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>Registration</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega sm:border-r px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>domain registration</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>domain Search</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Privacy Protection</Link></li>
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        <li className='space-y-5'>
                            {/*   Reseller Hosting */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap mt-10 sm:mt-0'>Domain Service</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Transfer</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Reselle</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain priceing</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </li>
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 4)}>
                {/* Other Services */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>Other Services</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* web-hosting dropdown */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 4 ? "block" : "hidden"}`}>
                    <ul className='flex flex-wrap sm:flex-nowrap shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/*   Exclusive Services */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap'>Exclusive Services</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>SSL Certificate</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Remote assistant</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Bulk SMS</Link></li>
                            </ul>
                        </li>
                        {/* Reseller hosting */}
                        <li className='space-y-5'>
                            {/*   Wordpress */}
                            <h4 className='text-base text-left px-10 whitespace-nowrap mt-10 sm:mt-0'>VPS & Wordpress</h4>
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>

                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Managed VPS</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Unmanaged VPS</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>wordpress customization</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>wordpress migration</Link></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </li>
            <li className='flex flex-col md:flex-row items-start md:items-center gap-2 font-bold text-base group relative' onClick={(e) => handleNav(e, 5)}>
                {/* about us */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <Link className='group-hover:text-primary text-lg font-normal'>About us</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                </div>
                {/* about us */}
                <div className={`drop-down static md:absolute md:group-hover:block pt-6 top-6 md:-translate-x-[40%] p-4 ${dropdown === 5 ? "block" : "hidden"}`}>
                    <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                        <li className='space-y-5'>
                            {/* Shared Hosting */}
                            {/* <h4 className='text-base text-left px-10 whitespace-nowrap'></h4> */}
                            <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Our Company</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>About Our Services</Link></li>
                                <li className='font-normal'><Link className='hover:text-primary capitalize'>Payment Method</Link></li>
                                <li className=''><a href="mailto:hostflu@gmail.com" className='flex sm:hidden items-center gap-2 md:gap-4'><FaEnvelope />Contact us</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </li>
        </ul>
    )
}
