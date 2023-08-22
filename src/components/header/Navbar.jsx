import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
// import { FaServer } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
// import { RiServerFill } from "react-icons/ri";

export const Navbar = () => {
    return (
        <div className=''>
            <ul className='flex gap-14 items-center'>
                {/* webhosting with dorpdown */}
                <li className='flex items-center gap-2 font-bold text-base group relative'>
                    {/* webhosting */}
                    <Link className='group-hover:text-primary text-lg font-normal flex items-center'>Web Hosting</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>Shared Hosting</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link to="https://my.hostflu.com/index.php?rp=/store/shared-hosting/mini" className='hover:text-primary'>Mini</Link></li>
                                    <li className='font-normal'><Link to="https://my.hostflu.com/index.php?rp=/store/shared-hosting/starter" className='hover:text-primary'>Starter</Link></li>
                                    <li className='font-normal'><Link to="https://my.hostflu.com/index.php?rp=/store/shared-hosting/professional" className='hover:text-primary'>Professional</Link></li>
                                    <li className='font-normal'><Link to='https://my.hostflu.com/index.php?rp=/store/shared-hosting/business' className='hover:text-primary'>Business</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>Reseller Hosting</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
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
                <li className='flex items-center gap-2 font-bold text-base group relative'>
                    {/* Dedicated */}
                    <Link className='group-hover:text-primary text-lg font-normal'>Dedicated Servers</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                            <li className='space-y-5'>
                                {/* By Region */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>By Region</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>North America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Europe</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>South America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Asia</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Africa</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   By Options */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>By Options</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>1 Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Unmetered Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>10Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Dedicated GPU</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>IPv6</Link></li>
                                </ul>
                            </li>
                            <li className='space-y-5 mb-3'>
                                {/*    Popular Locations */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>Popular Locations</h4>
                                <ul className='flex gap-5 whitespace-nowrap drop-mega'>
                                    <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                        <li className='font-normal'><Link className='hover:text-primary capitalize'>Paris</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary capitalize'>France</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary capitalize'>Netherlands</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary capitalize'>Montreal</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary capitalize'>Canada</Link></li>
                                    </ul>
                                    <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
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
                <li className='flex items-center gap-2 font-bold text-base group relative'>
                    {/* Domain */}
                    <Link className='group-hover:text-primary text-lg font-normal'>Domain</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>Registration</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>domain registration</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>domain Search</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Privacy Protection</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>Domain Service</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Transfer</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain Reselle</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Domain priceing</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-2 font-bold text-base group relative'>
                    {/* Other Services */}
                    <Link className='group-hover:text-primary text-lg font-normal'>Other Services</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
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
                                <h4 className='text-base text-left px-10 whitespace-nowrap'>VPS & Wordpress</h4>
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
                <li className='flex items-center gap-2 font-bold text-base group relative'>
                    {/* about us */}
                    <Link className='group-hover:text-primary text-lg font-normal'>About us</Link><span className='text-[9px] opacity-75'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* about us */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 p-4 -translate-x-[30%]">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-white p-4 pt-2'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                {/* <h4 className='text-base text-left px-10 whitespace-nowrap'></h4> */}
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Our Company</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>About Our Services</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary capitalize'>Payment Method</Link></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
