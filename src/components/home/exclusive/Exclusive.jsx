import React, { useState } from 'react'
import PricingCard from './PricingCard';
import data from '../../../data.json'
import '../home.css';
function Exclusive() {
    const cardData = data.exclusive;
    const firstThreeData = cardData.slice(0, 3);
    const secondthree = cardData.slice(3, 6);
    const thirdThree = cardData.slice(6, 9);
    const [tab, setTab] = useState(1);
    const handleclck = (tabNo) => {
        setTab(tabNo)
    }
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="content">
                    <h1 className='text-center text-4xl font-semibold text-[#1C1C1C]'>Our Exclisive Serverces</h1>
                    <div className="tabs-main mt-10 border-b">
                        <div className="tabs flex gap-5 justify-center">
                            <button onClick={(() => handleclck(1))} className={`px-6 text-white py-4 tab-btn w-60 rounded-lg rounded-b-none ${tab === 1 ? "opacity-90" : "opacity-100"}`}>Shared Hosting</button>
                            <button onClick={(() => handleclck(2))} className={`px-6 text-white py-4 tab-btn w-60 rounded-lg rounded-b-none ${tab === 2 ? "opacity-90" : "opacity-100"}`}>VPS</button>
                            <button onClick={(() => handleclck(3))} className={`px-6 text-white py-4 tab-btn w-60 rounded-lg rounded-b-none ${tab === 3 ? "opacity-90" : "opacity-100"}`}>Email Hosting</button>
                        </div>
                    </div>
                    <div className={`tab-content grid grid-cols-1 md:grid-cols-3 mt-14 gap-32  ${tab === 1 ? "block" : "hidden"}`}>
                        {
                            firstThreeData.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid grid-cols-1 md:grid-cols-3 mt-14 gap-32  ${tab === 2 ? "block" : "hidden"}`}>
                        {
                            secondthree.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid grid-cols-1 md:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 3 ? "block" : "hidden"}`}>
                        {
                            thirdThree.map((cardItem) => (
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