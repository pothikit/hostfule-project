import React from 'react'
import PageBanner from '../shared/pageBanner/PageBanner'
import aboutAnimation from "../../asstes/aboutAnimation.json"
import webserver from "../../asstes/webserver.jpg"

function AboutUs() {
    return (
        <main>
            <section className='bg-slate-200'>
                <div className="container mx-auto">
                    <PageBanner animationfile={aboutAnimation} animationPadding={"p-2 lg:p-10"} pageTitle={["About ", <span className='text-primary'>H</span>, "ostFlu Web Services"]}></PageBanner>
                </div>
            </section>
            <section className='py-20'>
                <div className='container mx-auto'>
                    <div>
                        <img src={webserver} alt="web server" className='max-w-[400px] rounded-md float-left mr-4' />
                        <p className='text-slate-600 md:text-lg'>Founded in 2018, HostFlu has quickly established itself as a leading provider of web services. A subsidiary of Fluresta, HostFlu is the brainchild of Ashiqur Rahman, a seasoned professional with a decade of experience in the industry.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Leadership and Vision</strong>
                            Ashiqur Rahman, the founder and CEO, serves as the backbone of HostFlu. His broad experience and profound industry comprehension have been vital in shaping the company's vision and strategy. His leadership has been instrumental in guiding HostFlu towards its goal of providing first-rate web services.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Services Offered: </strong>
                            HostFlu provides an extensive range of services designed to cater to the varied requirements of its clientele. These include:
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Web Hosting: </strong>
                            HostFlu provides reliable and secure web hosting services, ensuring that websites are accessible around the clock.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Managed VPS: </strong>
                            HostFlu offers managed VPS services for clients requiring more control and flexibility. Clients can experience the advantages of a private server without the burden of handling its management.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Unmanaged VPS: </strong>
                            For tech-savvy clients who prefer to have complete control over their servers, HostFlu provides unmanaged VPS services. </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Email Hosting: </strong>
                            Our email hosting service ensures businesses can communicate effectively with their customers and stakeholders.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Dedicated Server: </strong>
                            We offer dedicated servers to ensure optimal performance for businesses with high-traffic websites.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Domain Registration: </strong>We help businesses establish their online presence by providing domain registration services.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Privacy Protection: </strong>Understanding the importance of privacy, we offer privacy protection services to safeguard our clients' personal information.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>SSL Certificate: </strong>We offer SSL certificates to safeguard sensitive information and facilitate secure transactions. </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>WordPress Customization: </strong>Recognizing the popularity of WordPress, we offer WordPress customization services to help businesses create unique and engaging websites. </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Remote Assistance: </strong>
                            We provide remote assistance to ensure that clients can seamlessly navigate their digital journey.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>WordPress Migration: </strong>  For businesses looking to switch to WordPress, HostFlu offers WordPress migration services.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong> Customer Support: </strong> We are proud of our exceptional customer service, available 24/7 to assist clients with questions or issues. This commitment to customer service sets HostFlu apart from its competitors.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Security: </strong>  Recognizing the significance of security in the contemporary digital landscape, we implement state-of-the-art security protocols to protect client data and ensure the steadfast integrity of our websites.</p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Scalability: </strong>
                            Our services are designed to grow with your business. Whether you're a small business just starting or a large corporation with high traffic volumes, HostFlu has a solution to meet your needs.
                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Affordability: </strong>

                            Despite offering premium services, we strive to keep our prices competitive. This renders it an appealing option for businesses of varying sizes.

                        </p>
                        <p className='text-slate-600 md:text-lg mt-2'>
                            <strong>Innovation: </strong> We are always looking for ways to improve our services. Staying abreast of the most recent trends and technologies in the web services industry, the company ensures that its clients receive optimal solutions.
                        </p>

































                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutUs