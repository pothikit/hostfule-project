import React, { useEffect, useState } from 'react';
import managedvpsAnimation from "../../asstes/managedvpsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "./manageVps.css"
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
                <PageBanner animationfile={managedvpsAnimation} pageTitle={["Hassle-Free ", <span className='text-primary' key={1}>M</span>, "anaged VPS Hosting"]} animationName="" animationPadding="p-32"></PageBanner>
            </section>
            <section className='pb-10 custom-slider'>
                <div className="container mx-auto">
                    <div className='max-w-[1100px] mx-auto bg-white rounded-xl -mt-32'>
                        <div className='px-8 border pb-24 rounded-md' style={{ boxShadow: "5px 5px 30px 5px #eee" }}>
                            <div>
                                <div className='bg-white p-6'>
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
                            <div className='border rounded-md mt-20 p-6 bg-slate-100 bg-red bg-opacity-80 grid grid-cols-1 lg:grid-cols-3 gap-7'>
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
                                        <ul className='space-y-1'>
                                            <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                            <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                        </ul>
                                        <div className='flex justify-end'>
                                            <ul className='space-y-1'>
                                                <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                                <li className='flex items-center gap-1'><BiSolidCommentCheck size={20} />Lorem, consectetur adipisicing elit.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='px-8 py-3 border rounded-md shadow-md bg-white'>
                                        <h3 className='border-b pb-4 mb-4'>Managed</h3>
                                        <div className='border-b pb-6 md-4 text-center'>
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
                        <table className='w-full mt-20 bg-even-slate-200'>
                            <tr className='w-full '>
                                <th className='border py-2'>Plan Name</th>
                                <th className='border py-2'>Speed</th>
                                <th className='border py-2'>Memory</th>
                                <th className='border py-2'>Disk Space</th>
                                <td className='border py-2'>Bandwidth</td>
                                <th className='border py-2'>Price</th>
                                <th className='border py-2'></th>
                            </tr>
                            {
                                tabelData?.map((items, idx) => (
                                    <tr key={idx}>
                                        <td className='text-center border py-2'>{items.plan_name}</td>
                                        <td className='text-center border py-2'>{items.speed}</td>
                                        <td className='text-center border py-2'>{items.memory}</td>
                                        <td className='text-center border py-2'>{items.disk_space}</td>
                                        <td className='text-center border py-2'>{items.bandwidth}</td>
                                        <td className='text-center border py-2'>{items.price}</td>
                                        <td className='text-center border p-2'><button className='bg-green-500 py-2 w-full text-white rounded-md '>Order now</button></td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>

                </div>
            </section>
        </main>
    );
};
export default ManagedServer;