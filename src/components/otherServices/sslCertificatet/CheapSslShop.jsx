import React from 'react'
import { FaThumbsUp, FaUserGroup } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";


const CheapSslShop = () => {
    return (
        <section className='py-32 bg-slate-200 mb-32 text-white px-2 md:px-0'>
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-4xl capitalize font-semibold mb-10 text-slate-600">Why cheapSSLShop?</h2>
                <div className='space-y-4 text-slate-600'>
                    <p className='md:text-xl'>Fastest, Trusted & cheapest SSL Provider</p>
                    <p className='md:text-md'>We dedicatedly strive to offer our client the best deals on ssl certificate from trustworthy CAS through hasle free services.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-7 mt-20'>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span className=''><MdOutlineSecurity size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Security</h4>
                            <p>Our SSL certificates use the most powerful encryption available to keep your data safe. We understand that in the digital age, security is paramount, and we are committed to providing our customers with the peace of mind that their data is protected.</p>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span className=''><FaThumbsUp size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Reliability</h4>
                            <p>With HostFlu, you can count on consistent, reliable performance. Our SSL certificates are designed to work seamlessly with your website, ensuring that your online operations run smoothly.</p>
                        </div>
                    </div>
                    <div className="bg-white text-black rounded-md p-2 sm:p-4 md:p-8 lg:p-10 shadow-2xl">
                        <div className='space-y-6'>
                            <span className=''><FaUserGroup size={70} className='text-slate-500' /></span>
                            <h4 className='font-semibold text-md sm:text-lg md:text-xl lg:text-2xl'>Customer Service</h4>
                            <p>At HostFlu, we believe in putting our customers first. Our team of experts is always available to assist with any questions or concerns you may have about our SSL certificates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheapSslShop