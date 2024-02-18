import React, { useEffect, useState } from 'react'
import PricingCard from './PricingCard';
import '../home.css';
function Exclusive() {
    const [sharedHosting, setSharedHosting] = useState([])
    const [emailHosting, setEmailHosting] = useState([])
    const [unManagedVps, setUnmanagedVps] = useState([])
    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => {
                setSharedHosting(data?.sharedHosting)
                setEmailHosting(data?.email_hosting)
                setUnmanagedVps(data?.unManagedVps)
            })
    }, [])
    // const monthly = cardData?.slice(0, 3);
    const sharedHostingAnnually = sharedHosting?.slice(3, 6);
    const emailHostingAnnually = emailHosting?.slice(3, 6);
    // 

    const [tab, setTab] = useState(1);
    const handleclck = (tabNo) => {
        setTab(tabNo)
    }
    return (
        <section className='py-20'>
            <div className="container mx-auto px-2">
                <div className="content">
                    <h1 className='text-center text-4xl font-semibold text-[#1C1C1C]'>Our Exclisive Serverces</h1>
                    <div className="tabs-main mt-10 border-b">
                        <div className="tabs flex gap-5 justify-center">
                            <button onClick={(() => handleclck(1))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-3 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 1 ? "opacity-90" : "opacity-100"}`}>Shared Hosting</button>
                            <button onClick={(() => handleclck(2))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-3 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 2 ? "opacity-90" : "opacity-100"}`}>Unmanaged VPS</button>
                            <button onClick={(() => handleclck(3))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-3 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 3 ? "opacity-90" : "opacity-100"}`}>Email Hosting</button>
                        </div>
                    </div>
                    <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 1 ? "block" : "hidden"}`}>
                        {
                            // annual shared Hosting
                            sharedHostingAnnually?.map((cardItem, idx) => (
                                <PricingCard cardData={cardItem} key={idx}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 2 ? "block" : "hidden"}`}>
                        {
                            unManagedVps?.map((cardItem, idx) => (
                                <PricingCard cardData={cardItem} key={idx}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 3 ? "block" : "hidden"}`}>
                        {
                            // annual email hosting table
                            emailHostingAnnually?.map((cardItem, idx) => (
                                <PricingCard cardData={cardItem} key={idx}></PricingCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Exclusive