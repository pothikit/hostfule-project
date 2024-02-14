import React, { useState } from 'react';
import emailHostingAnimation from "../../asstes/emailAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import PageHelmet from '../shared/PageHelmet';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { IoBookSharp } from 'react-icons/io5';
import { PiHandHeartBold } from 'react-icons/pi';
import { TbSettingsSearch } from 'react-icons/tb';
import PricingCard from '../home/exclusive/PricingCard';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaUsersCog } from 'react-icons/fa';
import { useEffect } from 'react';
import director from "../../asstes/direction.png";
import manageVps from "../../asstes/manageVps.png"
import { MdOutlineStorage } from "react-icons/md";
const EmailHosting = () => {
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setCardData(data.email_hosting))
    }, [])
    const monthly = cardData?.slice(0, 3);
    const annually = cardData?.slice(3, 6);
    const [toggle, setToggle] = useState(false);
    const toggleHandler = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <PageHelmet pageTitle="Email Hosting"></PageHelmet>
            <main>
                <PageBanner animationfile={emailHostingAnimation} animationHeight="h-[400px] sm:h-[600px]" animationPadding="p-14" className="bg-slate-200" pageTitle={["Secure, Reliable Email", <span key={1} className='text-primary'> H</span>, "osting for Business"]}></PageBanner>

                <section className='px-1 py-28 bg-slate-50' id='packeg'>
                    <div>
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>MANAGE Email HOSTING PLANS</h1>
                    </div>
                    <div className="container mx-auto px-2">
                        <div className="text-center">
                            {/* <h2 className='text-xl md:text-2xl'>Discover the Perfect Hosting Plan for Your Business</h2>
                        <h4 className='text-base md:text-xl my-5'>Discover the Perfect Hosting Plan for Your Business</h4> */}
                            {/* toggle buttons */}
                            <div className='flex items-center justify-center gap-2 md:gap-6 my-14'>
                                <span className={`font-normal ${toggle ? "text-gray-500" : "text-primary"}`}>Billed Monthly</span>
                                <button className={`w-20 rounded-full bg-primary h-10 border-4 border-gray-300 flex ${toggle ? "justify-end" : "justify-start"}`} onClick={toggleHandler}>
                                    <span className='h-8 bg-white w-8 block rounded-full'></span>
                                </button>
                                <span className={`font-normal ${toggle ? "text-primary" : "text-gray-500"}`}>Billed Annually</span>
                                <div className='p-2 bg-[#ff9e0333] px-5 rounded-full border border-primary relative -top-7 -right-4'>
                                    <span>Exclusive</span>
                                    <img src={director} alt="director" className='absolute -left-10 w-10 top-5' />
                                </div>
                            </div>
                        </div>
                        {/* pricing cards */}
                        <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "grid" : "hidden"}`} id='mini-package'>
                            {
                                annually?.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                        <div className={`tab-content grid-cols-1 lg:grid-cols-3 mt-14 gap-12 xl:max-w-[80%] mx-auto ${toggle ? "hidden" : "grid"}`}>
                            {
                                monthly?.map((cardItem) => (
                                    <PricingCard cardData={cardItem} key={cardItem.id}></PricingCard>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='bg-slate-200 py-20 px-1'>
                    <div className="container mx-auto">
                        <div className='max-w-[900px] mx-auto'>
                            <div className='flex justify-evenly flex-wrap'>
                                <div className='flex items-center gap-2 py-2'>
                                    <span><FaChalkboardTeacher size={30} /></span>
                                    <h2 className='text-xl md:text-xl'>Blacklist Monitoring</h2>
                                </div>
                                {/* horizontal border */}
                                <div className='border-r-2 py-2 sm:border-slate-500'></div>

                                <div className='flex items-center gap-2 py-2'>

                                    <span><MdOutlineStorage size={30} /></span>
                                    <h2 className='text-xl md:text-xl'>Scalable Storage</h2>
                                </div>
                                {/* horizontal border */}
                                <div className='border-r-2 py-2 sm:border-slate-500'></div>

                                <div className='flex items-center gap-2 py-2'>
                                    <span><FaUsersCog size={30} /></span>
                                    <h2 className='text-xl md:text-xl'>24/7 Technical Support</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-[#F6F6F6] py-20'>
                    <div className="container mx-auto px-2">
                        <h1 className='text-xl md:text-2xl lg:text-4xl font-bold'>Email Hosting</h1>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 items-center">
                            <div className='md:col-span-3' data-aos="fade-right">
                                <p className='text-justify sm:font-extralight md:leading-8 mt-0 md:mt-20 md:text-lg'>
                                    We have long experience on email services. We are working with postfix, dovecot, roundcube. At present, in addition to cPanel email, Carboni as an open source is occupying the market with very good features. If you want, we can prepare any size email server through Carbonio. You can feel free to mail our support team or contact live chat with your requirement.
                                </p>
                            </div>
                            <div className='md:col-span-2' data-aos="fade-left">
                                <img src={manageVps} alt="manageVps" className='w-full md:w-2/3 mx-auto' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='py-20 bg-slate-50'>
                    <div className="container mx-auto">
                        <div>
                            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-center'>Features are part of every plan.</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'>
                                {/* Features are part of every plan. */}

                                <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                    <div className='space-y-5'>
                                        <div className='flex items-center justify-center pb-5 text-slate-400'>
                                            <PiHandHeartBold size={150} />
                                        </div>
                                        <h2 className='font-bold text-lg md:text-xl'>A Professional Business Email Address</h2>
                                        <p className='leading-loose'>Create a distinctive online presence and enhance brand recognition by utilizing a personalized email address that aligns with your domain. Effortlessly configure email boxes for Sales, Support, or any other business requirement with just a few simple clicks. Ensure your messages consistently land in the recipient's inbox, safeguarded against SPAM at all times.</p>
                                    </div>
                                    {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                                </div>
                                <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                    <div className='space-y-5'>
                                        <div className='flex items-center justify-center pb-5 text-slate-400'>
                                            <FaHandshakeSimple size={150} />
                                        </div>
                                        <h2 className='font-bold text-lg md:text-xl'>Smooth email communication</h2>
                                        <p className='leading-loose'>Enjoy an extensive range of features designed to streamline your communication with clients and business partners. HostFlu operates numerous interconnected email servers equipped with automatic backups, multi-device support, and webmail access. Additionally, our advanced SPAM protection security tool effectively filters 99.98% of emails, ensuring you receive only legitimate messages.</p>
                                    </div>
                                    {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                                </div>
                                <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                    <div className='space-y-5'>
                                        <div className='flex items-center justify-center pb-5 text-slate-400'>
                                            <IoBookSharp size={150} />
                                        </div>
                                        <h2 className='font-bold text-lg md:text-xl'>Improved Inbox Delivery</h2>
                                        <p className='leading-loose'>Experiencing your crucial emails failing to reach recipients, ending up in the wrong inbox, or facing significant delays can be highly frustrating. HostFlu, assures the delivery of emails through whitelisted IP addresses with a pristine reputation, conducting frequent optimization checks to avoid any potential issues. Rest assured that your emails will consistently reach their intended recipients.</p>
                                    </div>
                                    {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                                </div>
                                <div className='border rounded-md shadow-md group p-2 md:p-8 hover:bg-slate-200 duration-200'>
                                    <div className='space-y-5'>
                                        <div className='flex items-center justify-center pb-5 text-slate-400'>
                                            <TbSettingsSearch size={150} />
                                        </div>
                                        <h2 className='font-bold text-lg md:text-xl'>Daily Offsite Backups</h2>
                                        <p className='leading-loose'>Every day, your emails are securely archived to an offsite server located in a data center on a different continent. With daily backups, you can effortlessly recover any file or email with a simple click, providing you with the reassurance that your correspondence is consistently safeguarded.</p>
                                    </div>
                                    {/* <div className='w-20 h-20 bg-slate-400 rotate-90 z-50'></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default EmailHosting;

