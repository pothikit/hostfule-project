import React, { useEffect, useState } from 'react';
import managedvpsAnimation from "../../asstes/managedvpsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "./manageVps.css"
const ManagedServer = () => {
    const [rangevalue, setRangValue] = useState(1)
    const [data, setData] = useState([])
    // const [isDragging, setIsDragging] = useState(false);

    const handleChange = value => {
        // console.log(value)
        setRangValue(value)
    }
    useEffect(() => {
        fetch(`manageVpsData.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const rangeData = data.find((items) => items.id === rangevalue)

    console.log(rangeData)
    return (
        <main>
            <PageBanner animationfile={managedvpsAnimation} pageTitle={["Hassle-Free ", <span className='text-primary' key={1}>M</span>, "anaged VPS Hosting"]} animationName=""></PageBanner>

            <section className='py-20 custom-slider'>
                <div className="container mx-auto">
                    <div className='max-w-[1000px] mx-auto bg-white border rounded-md' style={{ boxShadow: "5px 5px 20px #ccc" }}>
                        <div className='p-3'>
                            <div className='bg-white'>
                                <Slider min={1} max={6} step={1} value={rangevalue} onChange={handleChange} className='cursor-pointer' />
                                <div className='flex justify-between items-center font-bold'>
                                    <h2>Storage 1GB</h2>
                                    <h2>Storage 2GB</h2>
                                    <h2>Storage 4GB</h2>
                                    <h2>Storage 8GB</h2>
                                    <h2>Storage 16GB</h2>
                                    <h2>Storage 32GB</h2>
                                </div>
                            </div>
                        </div>
                        <div className='border mt-7 p-2 py-10 bg-slate-50 grid grid-cols-1 lg:grid-cols-3 gap-7'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2 p-3'>
                                <div className='border rounded-md shadow-lg flex items-center justify-between bg-slate-300 py-5 px-3'><span>Core</span>
                                    <h2>{rangeData?.cpu_core}</h2>
                                </div>
                                <div className='border rounded-md shadow-lg flex items-center justify-between bg-slate-300 py-5 px-3'><span>Ram</span>
                                    <h2>{rangeData?.ram}</h2>
                                </div>
                                <div className='border rounded-md shadow-lg flex items-center justify-between bg-slate-300 py-5 px-3'><span>Storage</span>
                                    <h2>{rangeData?.ssd_space}</h2>
                                </div>
                                <div className='border rounded-md shadow-lg flex items-center justify-between bg-slate-300 py-5 px-3'><span>Bandwidth</span>
                                    <h2>{rangeData?.bandwidth}</h2>
                                </div>
                            </div>
                        </div>
                        <div><span>Price</span><span>{rangeData.price}</span></div>
                    </div>

                </div>
            </section>
        </main>
    );
};
export default ManagedServer;