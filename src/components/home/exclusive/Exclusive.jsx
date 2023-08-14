import React, { useState } from 'react'
import PricingCard from './PricingCard';
import data from '../../../data.json'

function Exclusive() {
    const cardData = data.exclusive;
    const firstThreeData = cardData.slice(0, 3);
    const [tab, setTab] = useState();
    const handleclck = (tabNo) => {
        setTab(tabNo)
    }
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="content">
                    <h1 className='text-center text-4xl font-semibold text-[#1C1C1C]'>Our Exclisive Serverces</h1>
                    <div className="tabs-main border-b border-primary mt-10">
                        <div className="tabs flex gap-5 justify-center">
                            <button onClick={(() => handleclck(1))} className={`px-6 text-white py-4 bg-gradient-to-tr from-primary to-secondary w-60 rounded-xl rounded-b-none ${tab === 1 ? "opacity-70" : "opacity-100"}`}>Shared Hosting</button>
                            <button onClick={(() => handleclck(2))} className={`px-6 text-white py-4 bg-gradient-to-tr from-primary to-secondary w-60 rounded-xl rounded-b-none ${tab === 2 ? "opacity-70" : "opacity-100"}`}>VPS</button>
                            <button onClick={(() => handleclck(3))} className={`px-6 text-white py-4 bg-gradient-to-tr from-primary to-secondary w-60 rounded-xl rounded-b-none ${tab === 3 ? "opacity-70" : "opacity-100"}`}>Email Hosting</button>
                        </div>
                    </div>
                    <div className="tab-content grid grid-cols-1 md:grid-cols-3 mt-14 gap-32">
                        {
                            firstThreeData.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Exclusive