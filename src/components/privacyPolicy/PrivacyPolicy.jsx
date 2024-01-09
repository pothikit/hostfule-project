import React from 'react'
import privacyAnimation from "../../asstes/privacyAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
function PrivacyPolicy() {
    return (
        <main>
            <section className='py-10'>
                <div className="container mx-auto">
                    <PageBanner animationfile={privacyAnimation} animationHeight={"h-[200px]"}></PageBanner>
                </div>
            </section>
            <section className='py-10 bg-slate-200'>
                <div className="container mx-auto">
                    <div>
                        <h2 className='font-bold text-xl'>Privacy Policy</h2>
                        <h2 className='mt-2 text-xl '>Last Updated: 18/11/2023</h2>
                        <div className='space-y-3 mt-8 md:text-xl'>
                            <p><strong>1. Introduction</strong>
                                Welcome to HostFlu! Our Privacy Policy is here to provide you with information about how we collect, use, and disclose information that we may obtain through our website, products, and services. By utilizing the services provided by HostFlu, you are agreeing to the terms specified in this Privacy Policy.
                            </p>
                            <p>
                                <strong>2. Information We Collect</strong><br />
                                <strong>2.1 Personally Identifiable Information (PII): </strong>
                                HostFlu may collect personally identifiable information, including but not limited to
                            </p>
                            <p>
                                <strong>Contact Information: </strong>
                                Such as your name, email address, phone number, and mailing address.
                            </p>
                            <p>
                                <strong> Billing Information: </strong> Including payment details necessary for transactions.
                            </p>
                            <p><strong>Account Credentials:</strong> Usernames, passwords, and other security-related information.</p>
                            <p>
                                <strong>2.2 Non-Personally Identifiable Information: </strong>
                                HostFlu may also collect non-personally identifiable information, such as:
                            </p>
                            <p>
                                <strong>Usage Data: </strong>Information about how you interact with our website and services.
                            </p>
                            <p><strong> Device Information: </strong>Including your IP address, browser type, and operating system.
                            </p>
                            <p><strong>3. How We Use Your Information</strong>
                                HostFlu uses the collected information for various purposes, including:
                            </p>
                            <strong>Service Provision: </strong> To deliver the products and services you have requested.
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default PrivacyPolicy