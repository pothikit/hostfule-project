// import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import migration from '../../../asstes/wordpress-migration.png'
import { MdOutlineSecurity, MdOutlineSupportAgent } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import migrationAnimation from '../../../asstes/migration.json'
import PageBanner from './../../shared/pageBanner/PageBanner';

function WrodpressMigration() {
    return (
        <main>
            <section className='py-20'>
                <PageBanner animationfile={migrationAnimation} animationHeight="h-96" pageTitle={["Wordpress ", <span className='text-primary'>M</span>, "igration"]}></PageBanner>
            </section>
            <section className="py-20 px-2 sm:px-0 bg-slate-200">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-7 items-center">
                        <div>
                            <img src={migration} alt="Word press customization" className="w-full md:max-w-[90%] p-2 sm:p-5 md:p-8 lg:p-10" />
                        </div>
                        <div>
                            <div>
                                <p className="md:text-xl md:leading-normal text-justify">
                                    When it comes to WordPress migration, HostFlu is the company you can trust. With our years of experience in the industry, we have perfected the art of seamless WordPress migration. We recognize the significance of a seamless shift when transferring your website to a different hosting service or updating to a newer version of WordPress. That's why we offer the best WordPress migration services to ensure that your website is transferred efficiently and without any downtime.
                                    At HostFlu, we have a team of skilled professionals who are well-versed in all aspects of WordPress migration. We take the time to thoroughly assess your current website and understand your specific requirements. Whether you have a small personal blog or a large e-commerce site, we have the expertise to handle migrations of all sizes. Our team will plan the move carefully to make sure all your files, databases, themes, plugins, and settings are moved correctly. We also perform rigorous testing after the migration to guarantee that everything is functioning correctly before making your website live again. With HostFlu, you can rest assured that your WordPress migration will be handled with utmost care and precision. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* paricing table */}
            <section className="py-20 px-2 sm:px-0">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-4xl capitalize text-primary text-center font-semibold mb-14">Wordpress Migration</h2>
                    <div className="content mt-10">
                        <div className='grid md:grid-cols-3 gap-7'>
                            <div className='p-4 md:p-7 border rounded-lg hover:shadow-lg shadow duration-300'>
                                <div className='space-y-4 text-center md:space-y-8'>
                                    <span><MdOutlineSecurity size={70} className='text-primary mx-auto' /></span>
                                    <h1 className='sm:text-2xl md:text-2xl lg:text-4xl font-bold'>Risk Free</h1>
                                    <p className='sm:text-lg sm:text-justify'>Our Free WordPress Migration service is completely risk-free. We take a full backup of your website before the migration process begins.</p>
                                </div>
                            </div>
                            <div className='p-4 md:p-7 border rounded-lg hover:shadow-lg shadow duration-300'>
                                <div className='space-y-4 text-center md:space-y-8'>
                                    <span><GiSkills size={70} className='text-primary mx-auto' /></span>
                                    <h1 className='sm:text-2xl md:text-2xl lg:text-4xl font-bold'>Efficiency</h1>
                                    <p className='sm:text-lg sm:text-justify'>Our team of experts ensures a smooth and secure migration of your website with minimal downtime. We will handle the entire process for you, from taking a full backup of your site to setting it up on our servers.</p>
                                </div>
                            </div>
                            <div className='p-4 md:p-7 border rounded-lg hover:shadow-lg shadow duration-300'>
                                <div className='space-y-4 text-center md:space-y-8'>
                                    <span><MdOutlineSupportAgent size={70} className='text-primary mx-auto' /></span>
                                    <h1 className='sm:text-2xl md:text-2xl lg:text-4xl font-bold'>Support</h1>
                                    <p className='sm:text-lg sm:text-justify'>Our dedicated support team is available round the clock to assist you throughout the migration process. We’re here to answer any questions and resolve any issues you may encounter.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WrodpressMigration