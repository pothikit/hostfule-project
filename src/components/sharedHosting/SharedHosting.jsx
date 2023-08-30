import React from 'react'
import "./sharedHosting.css"
import director from "../../asstes/direction.png";
import data from '../../data.json';
import PricingCard from '../home/exclusive/PricingCard';
import { useState } from 'react';
import architect from "../../asstes/architect.png"
import IndividualServices from './IndividualServices';
import cpanel from "../../asstes/shared-Cpanel.png";
import linux from "../../asstes/linux.png";
import ssl from "../../asstes/freeSSL.png";
import wordpresskit from "../../asstes/WordpressKit.png";
import freeMigration from "../../asstes/free-migration.png";

function SharedHosting() {
    const cardData = data.exclusive;
    const firstThreeData = cardData.slice(0, 3);
    const secondthree = cardData.slice(3, 6);
    const [toggle, setToggle] = useState(true);

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <main className=''>
            <section className='bg-gray-100 py-10'>
                <div className="banner py-10 md:py-20 h-[40vh] md:h-[60vh]">

                </div>
            </section>
            <section className='py-28 bg-white'>
                <div className="container mx-auto px-2">
                    <div className="text-center">
                        <h2 className='text-xl md:text-2xl'>Discover the Perfect Hosting Plan for Your Business</h2>
                        <h4 className='text-base md:text-xl my-5'>Discover the Perfect Hosting Plan for Your Business</h4>
                        {/* toggle buttons */}
                        <div className='flex items-center justify-center gap-2 md:gap-6 my-14'>
                            <span className={`font-normal ${toggle ? "text-gray-500" : "text-primary"}`}>Billed Monthly</span>
                            <button className={`w-20 rounded-full bg-primary h-10 border-4 border-gray-300 flex ${toggle ? "justify-end" : "justify-start"}`} onClick={toggleHandler}>
                                <span className='h-8 bg-white w-8 block rounded-full'></span>
                            </button>
                            <span className={`font-normal ${toggle ? "text-primary" : "text-gray-500"}`}>Billed Annually</span>
                            <div className='p-2 bg-[#ff9e0333] px-5 rounded-full border border-primary relative -top-7 -right-4'>
                                <span>5% OFF</span>
                                <img src={director} alt="director" className='absolute -left-10 w-10 top-5' />
                            </div>
                        </div>
                    </div>
                    {/* pricing cards */}
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "grid" : "hidden"}`}>
                        {
                            firstThreeData.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                    <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "hidden" : "grid"}`}>
                        {
                            secondthree.map((cardItem) => (
                                <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                            ))
                        }
                    </div>
                </div>
                {/* container */}
            </section>
            <section className='bg-[#F6F6F6] py-20'>
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-10 items-center">
                        <div className='lg:col-span-3'>
                            <p className='text-base sm:text-xl text-justify leading-9'>Experience seamless web hosting with our cutting-edge shared hosting service. At HostFlu we prioritize your online presence. Our robust infrastructure ensures lightning-fast loading times, guaranteeing an uninterrupted browsing experience for your visitors. Enjoy the simplicity of shared resources, making hosting affordable without compromising quality. With 24/7 expert support, your technical concerns are ours to handle, leaving you to focus on your core business. Benefit from one-click installations, automatic updates, and top-notch security features, safeguarding your data and customers' trust. Elevate your website's performance and reliability with our shared hosting – the smart choice for businesses aiming for digital success.</p>
                        </div>
                        <div className='lg:col-span-2'>
                            <img src={architect} alt="architect" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-32'>
                <div className="container mx-auto px-2">
                    <div className='grid grid-cols gap-20'>
                        <div>
                            <img src="" alt="Shared Hosting" />
                            <div>
                            </div>
                            <IndividualServices image={cpanel} title="C Panel" desc="cPanel is a powerful and versatile web hosting control panel that provides users with a wide range of tools and features to manage their websites. With its user-friendly interface, robust security measures, and extensive customization options, cPanel has become the go-to choice for web developers"></IndividualServices>

                            <IndividualServices image={linux} title="Cloud Linux" desc="CloudLinux is a lightweight operating system based on the Linux kernel and targeted at servers, with focus on scalability, security.It provides a stable and secure platform for running applications in the cloud. CloudLinux is a popular choice for cloud providers, including Amazon Web Services, Microsoft Azure, and Google Cloud Platform."></IndividualServices>

                            <IndividualServices image={ssl} title="Free SSL" desc="SSL stands for secure Socket Layer. It is a protocol that allows encrypted communication over a public network. SSL is also used to authenticate websites and users, and protects data from unauthorized access. It is widely used to secure online transactions and other sensitive information."></IndividualServices>

                            <IndividualServices image={wordpresskit} title="WordPresskit" desc="WordPresskit is a company that offers plugins for website creation using WordPress. Their products are designed to make it easier to manage your WordPress website, like installing themes and plugins. They also offer tutorials and support to help you along the way."></IndividualServices>

                            <IndividualServices image={freeMigration} title="Free Migration" desc="We offer a free website migration service, which allows you to transfer your website from another hosting provider to HostFlu. We offer this migration service to ensure that your website is up and running smoothly on HostFlu."></IndividualServices>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SharedHosting