import React, { useEffect, useState } from 'react';
import "./dedicated.css"
import data from "../../data.json"
import ServerLocation from './ServerLocation';
const DedicatedServer = () => {
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        const serverData = data.dedicatedLocation;
        setServerLocation(serverData)
    }, [])
    console.log(serverLocation)
    return (
        <main>
            <div className="">
                <div className="dedicated-banner py-20 md:h-[70vh]">
                    {/* banner text */}
                </div>
                <div className="container mx-auto">
                    <div className='py-20'>
                        <h1 className='mt-20 font-bold text-xl md:text-3xl lg:text-4xl text-center'>Available Location</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-10 xl:gap-28 py-10 md:py-20'>
                            {
                                serverLocation.map((data, idx) => (
                                    <ServerLocation key={idx} serverLocation={data}></ServerLocation>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DedicatedServer;