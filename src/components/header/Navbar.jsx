import React from 'react'
import { Link } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
// import { FaServer } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
// import { RiServerFill } from "react-icons/ri";

export const Navbar = () => {
    return (
        <div className='text-black'>
            <ul className='flex gap-14 items-center'>
                {/* webhosting with dorpdown */}
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* webhosting */}
                    <Link className='group-hover:text-primary'>Web Hosting</Link><span className='text-[10px]'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-[#ffffffda] p-4 pt-0'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Shared Hosting</h4>
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
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Reseller Hosting</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-1</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-2</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-3</Link></li>
                                </ul>
                            </li>
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>E-mail Hosting</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-1</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-2</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-3</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Packge-4</Link></li>
                                </ul>
                            </li>


                        </ul>
                    </div>
                </li>
                {/* dedicated server with dorpdown */}
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* Dedicated */}
                    <Link className='group-hover:text-primary'>Dedicated Servers</Link><span className='text-[10px]'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-[#ffffffda] p-4 pt-0'>
                            <li className='space-y-5'>
                                {/* By Region */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary'>By Region</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>North America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Europe</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>South America</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Asia</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Africa</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   By Options */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary'>By Options</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>1 Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Unmetered Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>10Gbps Bandwidth</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Dedicated GPU</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>IPv6</Link></li>
                                </ul>
                            </li>
                            <li className='space-y-5 mb-3'>
                                {/*    Popular Locations */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary'>Popular Locations</h4>
                                <ul className='flex gap-5 whitespace-nowrap drop-mega'>
                                    <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                        <li className='font-normal'><Link className='hover:text-primary'>Paris</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>France</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Amsterdam</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Netherlands</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Montreal</Link></li>
                                        <li className='font-normal'><Link className='hover:text-primary'>Canada</Link></li>
                                    </ul>
                                    <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
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
                {/* VPS menu */}
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* vps */}
                    <Link className='group-hover:text-primary'>VPS</Link><span className='text-[10px]'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-[#ffffffda] p-4 pt-0'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'> Managed VPS</h4>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'> Managed VPS</h4>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* Domain */}
                    <Link className='group-hover:text-primary'>Domain</Link><span className='text-[10px]'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* web-hosting dropdown */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 -translate-x-[40%] p-4">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-[#ffffffda] p-4 pt-0'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Registration</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>domain registration</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>domain Search</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Privacy Protection</Link></li>
                                </ul>
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Transfer</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Domain Transfer</Link></li>
                                </ul>
                            </li>
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Reseller</h4>
                                <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Domain Reselle</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>

                <li className='flex items-center gap-1 font-bold text-base group relative'>
                    {/* about us */}
                    <Link className='group-hover:text-primary'>About us</Link><span className='text-[10px]'><BiSolidDownArrow className='group-hover:rotate-180 duration-200 dorp-arrow dorp-arrow' /></span>
                    {/* about us */}
                    <div className="drop-down absolute hidden group-hover:block pt-10 top-6 p-4 -right-40">
                        <ul className='flex shadow-sm shadow-gray-100 items-start rounded bg-[#ffffffda] p-4 pt-0'>
                            <li className='space-y-5'>
                                {/* Shared Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Our Company</h4>
                                {/* <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>domain registration</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>domain Search</Link></li>
                                    <li className='font-normal'><Link className='hover:text-primary'>Privacy Protection</Link></li>
                                </ul> */}
                            </li>
                            {/* Reseller hosting */}
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>About Our Services</h4>
                                {/* <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega border-r px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Domain Transfer</Link></li>
                                </ul> */}
                            </li>
                            <li className='space-y-5'>
                                {/*   Reseller Hosting */}
                                <h4 className='text-bold text-xl text-left px-10 text-primary whitespace-nowrap'>Payment Method </h4>
                                {/* <ul className='flex flex-col space-y-2 whitespace-nowrap drop-mega px-10'>
                                    <li className='font-normal'><Link className='hover:text-primary'>Domain Reselle</Link></li>
                                </ul> */}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}
