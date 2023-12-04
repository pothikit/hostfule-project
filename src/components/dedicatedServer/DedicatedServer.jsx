import React, { useEffect, useState } from 'react';
import "./dedicated.css"
import data from "../../data.json"
import ServerLocation from './ServerLocation';
import { Controls, Player } from '@lottiefiles/react-lottie-player';
import bannerImgAnimation from "../../asstes/dedicated-server-banner.json"
const DedicatedServer = () => {
    const [serverLocation, setServerLocation] = useState([])
    const [searchData, setSearchData] = useState(serverLocation)
    useEffect(() => {
        const serverData = data.dedicatedLocation;
        setServerLocation(serverData)
    }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredData = serverLocation.filter((items) => items.country.toLowerCase().startsWith(e.target.value.toLowerCase()))
        setSearchData(filteredData)
    }


    return (
        <main>
            <section className='bg-slate-100 '>
                <div className="dedicated-banner container mx-auto">
                    <div className='pb-20 flex items-center flex-row-reverse justify-evenly'>
                        <div className='ml-auto md:pr-32'>
                            <Player autoplay className={``}
                                loop
                                src={bannerImgAnimation}>
                                <Controls buttons={['play', 'repeat', 'debug']} />
                            </Player>
                        </div>
                        <div className='self-end md:mb-20'>
                            <h2 className='font-bold text-xl md:text-3xl lg:text-5xl mb-10'>Dedicated Servers</h2>
                            <form className='text-center'>
                                <input onChange={handleSearch} type="text" placeholder='Search Server Location' className='text-center border-black border border-opacity-20 w-10/12 mx-auto py-2 rounded-lg px-3 outline-none text-lg' />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container mx-auto">
                    <p className='py-8 text-slte-100 md:text-lg font-sans'>A dedicated hosting service, dedicated server, or unmanaged hosting service is a type of Internet hosting in which you lease an entire server not shared with anyone. This is more flexible than shared hosting, as you will have full control over the server(s), including choice of operating system, hardware, etc. Server administration is handled by yourself in terms of software, but we provide 24/7 support for hardware related tasks.</p>
                    <div className='py-20'>
                        <h1 className='mt-20 font-bold text-xl md:text-3xl lg:text-4xl text-center'>Available Location</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-5 xl:gap-28 py-10 md:py-20'>
                            {
                                searchData.map((data, idx) => (
                                    <ServerLocation key={idx} serverLocation={data}></ServerLocation>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DedicatedServer;