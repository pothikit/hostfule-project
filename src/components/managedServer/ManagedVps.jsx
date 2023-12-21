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
    return (
        <main>
            <PageBanner animationfile={managedvpsAnimation} pageTitle={["Hassle-Free ", <span className='text-primary' key={1}>M</span>, "anaged VPS Hosting"]} animationName=""></PageBanner>
            <section className='py-20 custom-slider'>
                <div className="container mx-auto">
                    <div className='max-w-[1000px] mx-auto bg-white border rounded-md' style={{ boxShadow: "5px 5px 30px 5px #ddd" }}>
                        <div className='p-3'>
                            <div className='bg-white p-6'>
                                <Slider min={1} max={6} step={1} duration={2000} value={rangevalue} onChange={handleChange} className='cursor-pointer' />

                                <div className='flex justify-between items-center font-bold'>
                                    <h2><span className='hidden md:inline'>Storage</span> 1GB</h2>
                                    <h2><span className='hidden md:inline'>Storage</span> 2GB</h2>
                                    <h2><span className='hidden md:inline'>Storage</span> 4GB</h2>
                                    <h2><span className='hidden md:inline'>Storage</span> 8GB</h2>
                                    <h2><span className='hidden md:inline'>Storage</span> 16GB</h2>
                                    <h2><span className='hidden md:inline'>Storage</span> 32GB</h2>
                                </div>
                            </div>
                        </div>
                        <div className='border mt-7 p-6 bg-slate-100 grid grid-cols-1 lg:grid-cols-3 gap-7'>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:col-span-2 p-3'>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>Core</span>
                                    <h2>{rangeData?.cpu_core}</h2>
                                </div>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>Ram</span>
                                    <h2>{rangeData?.ram}</h2>
                                </div>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>Storage</span>
                                    <h2>{rangeData?.ssd_space}</h2>
                                </div>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>Bandwidth</span>
                                    <h2>{rangeData?.bandwidth}</h2>
                                </div>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>thread</span>
                                    <h2>{rangeData?.thread}</h2>
                                </div>
                                <div className='border rounded-md shadow flex items-center justify-between bg-white py-6 px-3'><span>IP</span>
                                    <h2>{rangeData?.ip_address}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='p-4 border rounded-md shadow-md'>
                                    <h3 className='border-b pb-4 mb-4'>Managed</h3>
                                    <div className='border-b pb-4 md-4 text-center'>
                                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'><span className=''>Price</span> <span>{rangeData?.price}</span></h1>
                                        <button className='bg-primary text-white px-3 py-1 md:py-2 text-xl md:px-10 mt-5 rounded-md'>Order Now</button>
                                    </div>
                                    <div className='mt-3'>
                                        <h3 className='font-medium'>Available Location</h3>
                                        <h3 className='text-sm'>(Slelct During checkout)</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};
export default ManagedServer;