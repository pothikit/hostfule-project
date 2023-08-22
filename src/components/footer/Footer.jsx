import React from 'react'
import logo from "../../asstes/footer-logo.png"
import "./footer.css"

function Footer() {
    return (
        <footer className='pt-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-32">
                    {/* col maind div */}
                    <div>
                        <div className="col-title mb-8">
                            <img src={logo} alt="Hostflu" className='pb-5' />
                            <hr className='w-[55%] -m-1' />
                        </div>
                        <p className='text-gray-100 leading-7 font-extralight text-justify'>Namecheap exists to help EVERYONE get, make, and achieve more online with less cost, hassle, and head
                            aches. We offer everything you need to get online and thrive, from domains to. e online with less cost, hassle, ane online with less cost, hassle, an   </p>
                    </div>
                    {/* col maind div */}
                    {/* col main div start */}
                    <div>
                        <div className="col-title mb-8">
                            <h3 className='text-xl border-b pb-4 text-white'>Web Hosting</h3>
                        </div>
                        <ul className='list-disc space-y-4 text-white'>
                            <li>Web Hosting</li>
                            <li>Wordpress Hosting</li>
                            <li>VPS Hosting</li>
                            <li>Managed VPS Hosting</li>
                            <li>Dedicated Hosting</li>
                        </ul>
                    </div>
                    {/* col main div end */}
                    {/* col main div start */}
                    <div>
                        <div className="col-title mb-8">
                            <h3 className='text-xl border-b pb-4 text-white'>Cloud Server</h3>
                        </div>
                        <ul className='list-disc space-y-4 text-white'>
                            <li>Web Hosting</li>
                            <li>Wordpress Hosting</li>
                            <li>VPS Hosting</li>
                            <li>Managed VPS Hosting</li>
                            <li>Dedicated Hosting</li>
                        </ul>
                    </div>
                    {/* col main div end */}
                    {/* col main div start */}
                    <div>
                        <div className="col-title mb-8">
                            <h3 className='text-xl border-b pb-4 text-white'>Domain</h3>
                        </div>
                        <ul className='list-disc space-y-4 text-white'>
                            <li>Web Hosting</li>
                            <li>Wordpress Hosting</li>
                            <li>VPS Hosting</li>
                            <li>Managed VPS Hosting</li>
                            <li>Dedicated Hosting</li>
                        </ul>
                    </div>
                    {/* col main div end */}
                </div>
            </div>
            {/* container */}
        </footer>
    )
}

export default Footer