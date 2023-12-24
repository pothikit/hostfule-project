import React, { useEffect, useState } from 'react';
import managedvpsAnimation from "../../asstes/managedvpsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import { PiCpu } from "react-icons/pi";
import { FaMemory } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { MdStorage } from "react-icons/md";
import { RiCpuFill } from "react-icons/ri";
import { HiLocationMarker } from "react-icons/hi";
import { BiSolidCommentCheck } from "react-icons/bi";
const ManagedServer = () => {
    const [rangevalue, setRangValue] = useState(1)
    const [data, setData] = useState([])
    const [tabelData, setTableData] = useState([])
    const [os, setOs] = useState([])
    // const [isDragging, setIsDragging] = useState(false);

    const handleChange = value => {
        // console.log(value)
        setRangValue(value)
    }
    useEffect(() => {
        fetch(`manageVpsData.json`)
            .then(res => res.json())
            .then(data => setData(data?.rangeSlider))
    }, [])
    // fetching table data
    useEffect(() => {
        fetch(`manageVpsData.json`)
            .then(res => res.json())
            .then(data => setTableData(data?.tabelData))
    }, [])
    // fetching all os
    useEffect(() => {
        fetch(`manageVpsData.json`)
            .then(res => res.json())
            .then(data => setOs(data?.operating_system))
    }, [])
    // console.log(tableData)
    // get ram amount and messourement
    const rangeData = data.find((items) => items.id === rangevalue)

    function getAmountAndMeasurement(stringdata) {
        const words = stringdata?.split(" ");
        const amount = words?.shift(); // Remove and get the first word (amount)
        const rest = words?.join(" "); // Join the remaining words into the rest string
        return { amount, rest };
    }
    // console.log()
    const rams = getAmountAndMeasurement(rangeData?.ram)
    const ssd_space = getAmountAndMeasurement(rangeData?.ssd_space)
    const bandwidth = getAmountAndMeasurement(rangeData?.bandwidth)
    const ip_address = getAmountAndMeasurement(rangeData?.ip_address)
    return (
        <main>
            <section className='bg-slate-200'>
                <PageBanner animationfile={managedvpsAnimation} pageTitle={["Hassle-Free anaged VPS ", <span className='text-primary' key={1}>H</span>, "osting"]} animationName="" animationPadding="p-32"></PageBanner>
                <div className='py-20'>
                    <h1 className="mt-20 text-2xl md:text-4xl lg:text-7xl font-bold text-center">Under Construction</h1>
                    {/* <Construction></Construction> */}
                </div>
            </section>
            <section className='pb-10'>
                <div className="container mx-auto">
                    <div className='max-w-[1100px] mx-auto bg-white rounded-xl sm:-mt-28 px-1 md:px-0'>
                        <div className='px-2 mt-5 sm:px-8 border pb-24 pt-10 rounded-md' style={{ boxShadow: "5px 5px 30px 5px #eee" }}>
                            <div>
                                <div className='bg-white sm:p-6'>
                                    <Slider min={1} max={6} step={1} duration={2000} value={rangevalue} onChange={handleChange} className='cursor-pointer' />
                                    <div className='flex justify-between items-center font-bold'>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 1GB</h2>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 2GB</h2>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 4GB</h2>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 8GB</h2>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 16GB</h2>
                                        <h2 className=''><span className='hidden md:inline'>Storage</span> 32GB</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='border rounded-md mt-20 p-2 sm:p-6 bg-slate-100 bg-red bg-opacity-80 grid grid-cols-1 lg:grid-cols-3 gap-7'>
                                <div className='lg:col-span-2'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2 text-lg'><PiCpu className='text-gray-600' size={36} /> Core</span>
                                            <h2 className='font-bold text-xl md:text-2xl'>{rangeData?.cpu_core}</h2>
                                        </div>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2'><FaMemory className='text-gray-600' size={36} /> Ram</span>
                                            <h2 className='font-bold text-xl md:text-2xl'>{rams?.amount} <span className='text-base font-thin'>{rams.rest}</span></h2>
                                        </div>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2'><MdStorage className='text-gray-600' size={36} />
                                                Storage</span>
                                            <h2 className='font-bold text-xl md:text-2xl'>{ssd_space?.amount}<span className='text-base font-thin'> {ssd_space.rest}</span></h2>
                                        </div>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2'>
                                                <SlSpeedometer className='text-gray-600' size={36} />
                                                Bandwidth</span>

                                            <h2 className='font-bold text-xl md:text-2xl'>{bandwidth?.amount} <span className='text-base font-thin'>{bandwidth.rest}</span></h2>
                                        </div>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2'> <RiCpuFill className='text-gray-600' size={36} /> thread</span>
                                            <h2 className='font-bold text-xl md:text-2xl'>{rangeData?.thread}</h2>
                                        </div>
                                        <div className='border rounded-md border-slate-400 flex items-center justify-between text-lg bg-white py-4 px-3'>
                                            <span className='flex items-center gap-2'><HiLocationMarker className='text-gray-600' size={36} /> IP</span>
                                            <h2 className='font-bold text-xl md:text-2xl'>{ip_address?.amount} <span className='text-base font-thin'> {ip_address.rest}</span></h2>
                                        </div>
                                    </div>
                                    <div className='py-7 grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-slate-600'>
                                        <ul className='space-y-1 text-sm'>
                                            <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                            <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                        </ul>
                                        <div className='flex md:justify-end'>
                                            <ul className='space-y-1 text-sm'>
                                                <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                                <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='px-8 py-3 border rounded-md shadow-md bg-white'>
                                        <h3 className='border-b pb-4 mb-4'>Managed</h3>
                                        <div className='border-b md-4 text-center py-8'>
                                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'><span className=''>Price</span> <span>{rangeData?.price}</span></h1>
                                            <button className='bg-green-500 hover:bg-green-700 text-white px-3 py-1 md:py-2 text-lg md:px-7 mt-5 rounded-md'>Order Now</button>
                                        </div>
                                        <div className='mt-4'>
                                            <h3 className='font-medium'>Available Location</h3>
                                            <h3 className='text-sm'>(Slelct During checkout)</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* lsit from here */}
                        <div class="rounded-md min-w-full overflow-x-auto border mt-20">
                            <table className='w-full bg-even-slate-200 divide-y'>
                                <tr className='w-full rounded-md'>
                                    <th className='pl-3 text-start py-2 text-lg'>Plan Name</th>
                                    <th className='pl-3 text-start border-x py-2 text-lg'>Speed</th>
                                    <th className='pl-3 text-start border-x py-2 text-lg'>Memory</th>
                                    <th className='pl-3 text-start border-x py-2 text-lg'>Disk Space</th>
                                    <th className='pl-3 text-start border-x py-2 text-lg'>Bandwidth</th>
                                    <th className='pl-3 text-start border-x py-2 text-lg'>Price</th>
                                    <th className='pl-3 text-start py-2 text-lg'></th>
                                </tr>
                                {
                                    tabelData?.map((items, idx) => (
                                        <tr key={idx} className='even:bg-slate-200 even:bg-opacity-70'>
                                            <td className='pl-3 py-2'>{items.plan_name}</td>
                                            <td className='pl-3 border-x py-2'>{items.speed}</td>
                                            <td className='pl-3 border-x py-2'>{items.memory}</td>
                                            <td className='pl-3 border-x py-2'>{items.disk_space}</td>
                                            <td className='pl-3 border-x py-2'>{items.bandwidth}</td>
                                            <td className='pl-3 border-x py-2'>{items.price}</td>
                                            <td className='pl-3 p-2'><button className='bg-green-500 py-2 w-full text-white rounded-md hover:bg-green-700 duration-200'>Order now</button></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                        {/* available Operating system */}
                        <div className='mt-32 border px-7 py-14 rounded-md shadow-lg'>
                            <div className=''>
                                <h1 className='font-bold text-xl sm:text-2xl mb-12 md:text-3xl lg:text-4xl text-slate-700 text-center'>CHOOSE AN OPERATING SYSTEM</h1>

                                <div>
                                    <h3 className='font-semibold mb-6 text-xl capitalize'>Server distributions</h3>
                                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5'>
                                        {
                                            os?.sever_distibution?.map((items, idx) => (
                                                <div key={idx} className='border text-center p-3 bg-slate-100 rounded-md hover:scale-110 duration-200'>
                                                    <img src={items.operating_system_logo} alt={items?.operating_system} className='w-20 mx-auto' />
                                                    <h2 className='mt-3 md:text-xl'>{items?.operating_system}</h2>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8'>
                                <div className='mt-10'>
                                    <div>
                                        <h3 className='font-semibold mb-6 text-xl capitalize'>Vizualization distributions</h3>
                                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5'>
                                            {
                                                os?.vizualization_distibution?.map((items, idx) => (
                                                    <div key={idx} className='border text-center p-3 bg-slate-100 rounded-md hover:scale-110 duration-200'>
                                                        <img src={items.operating_system_logo} alt={items?.operating_system} className='w-20 mx-auto' />
                                                        <h2 className='mt-3 md:text-xl'>{items?.operating_system}</h2>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-10'>
                                    <div>
                                        <h3 className='font-semibold mb-6 text-xl capitalize'>Desktop distributions</h3>
                                        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-5'>
                                            {
                                                os?.desktop_distibution?.map((items, idx) => (
                                                    <div key={idx} className='border text-center p-3 bg-slate-100 rounded-md hover:scale-110 duration-200'>
                                                        <img src={items.operating_system_logo} alt={items?.operating_system} className='w-20 mx-auto' />
                                                        <h2 className='mt-3 md:text-xl'>{items?.operating_system}</h2>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>         </main>
    );
};
export default ManagedServer;