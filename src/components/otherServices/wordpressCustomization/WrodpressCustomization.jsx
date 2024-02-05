import { } from '@lottiefiles/react-lottie-player'
import React, { useState } from 'react'
import PageBanner from '../../shared/pageBanner/PageBanner'
import wordpressAnimation from '../../../asstes/wordpressAnimation.json'
import customization from '../../../asstes/customization.png'

import data from '../../../data.json';
import PricingCard from '../../home/exclusive/PricingCard'
function WrodpressCustomization() {
    const cardData = data.exclusive;
    const firstThreeData = cardData.slice(0, 3);
    const secondthree = cardData.slice(3, 6);
    const thirdThree = cardData.slice(6, 9);
    const [tab, setTab] = useState(1);

    const handleclck = (tabNo) => {
        setTab(tabNo)
    }

    return (
        <main>
            <section className='py-20 bg-slate-200'>
                <PageBanner animationfile={wordpressAnimation} animationHeight="h-96" pageTitle={["Wordpress Customization"]}></PageBanner>
            </section>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-7 items-center">
                        <div>
                            <img src={customization} alt="Word press customization" className="w-full md:max-w-[90%] p-2 sm:p-5 md:p-8 lg:p-10" />
                        </div>
                        <div>
                            <div>
                                <p className="md:text-xl md:leading-normal text-justify">
                                    HostFlu, a company specializing in SSL certificates, celebrates its third anniversary in the field of online security. SSL certificates are essential in creating secure links between web servers and users’ browsers, defending against potential dangers like data manipulation and unauthorized interception. HostFlu has adapted to the evolving landscape of cybersecurity, offering robust and up-to-date security solutions. They have expertise in navigating the Public Key Infrastructure (PKI), which ensures encryption and decryption of information with utmost security. HostFlu offers various types of SSL certificates tailored to meet the unique security needs and business requirements of each client. They also adopt a proactive approach to certificate management, ensuring timely renewal and mitigating potential risks. With three years of experience, HostFlu is dedicated to staying ahead in the cybersecurity landscape and providing a secure digital future for businesses and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* paricing table */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-4xl capitalize text-primary text-center font-semibold mb-14">Price Table</h2>
                    <div className="content">
                        {/* <h1 className='text-center text-4xl font-semibold text-[#1C1C1C]'>Our Exclisive Serverces</h1> */}
                        <div className="tabs-main mt-10 border-b">
                            <div className="tabs flex gap-5 justify-center">
                                <button onClick={(() => handleclck(1))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 1 ? "opacity-90" : "opacity-100"}`}>Shared Hosting</button>
                                <button onClick={(() => handleclck(2))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 2 ? "opacity-90" : "opacity-100"}`}>VPS</button>
                                <button onClick={(() => handleclck(3))} className={`sm:px-6 text-sm sm:text-xl text-gray-700 py-2 sm:py-4 bg-gray-200 hover:bg-gray-400 hover:text-white duration-200 w-60 rounded-lg rounded-b-none ${tab === 3 ? "opacity-90" : "opacity-100"}`}>Email Hosting</button>
                            </div>
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 1 ? "block" : "hidden"}`}>
                            {
                                firstThreeData.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 2 ? "block" : "hidden"}`}>
                            {
                                secondthree.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                        <div className={`tab-content grid grid-cols-1 lg:grid-cols-3 mt-14 gap-24 max-w-[90%] mx-auto ${tab === 3 ? "block" : "hidden"}`}>
                            {
                                thirdThree.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WrodpressCustomization