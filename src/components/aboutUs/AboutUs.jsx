import React, { useEffect, useState } from 'react'
import PageBanner from '../shared/pageBanner/PageBanner'
import aboutAnimation from "../../asstes/aboutAnimation.json"
import about1 from "../../asstes/about1.jpg"
import mision from "../../asstes/vision.jpg"
import vision from "../../asstes/mission.jpg"
import Testimonial from './Testimonila'
import Swal from 'sweetalert2'
import "./about.css"
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import PageHelmet from '../shared/PageHelmet'

function AboutUs() {
    const [payment, setPayment] = useState([])
    const [allteam, setAllTeam] = useState([])
    useEffect(() => {
        fetch("paymentData.json")
            .then(res => res.json())
            .then(data => setPayment(data.payment))
    }, [])
    // fetching team data
    useEffect(() => {
        fetch("paymentData.json")
            .then(res => res.json())
            .then(data => setAllTeam(data.team))
    }, [])
    const handlePayment = (items) => {
        Swal.fire({
            html: `
           <div>
                <div class="qrCode flex justify-between flex-col sm:flex-row w-full p-2">
                    <div><img src='${items.qrCode}'/></div>
                    <div class="flex justify-start flex-col items-start gap-4">
                         <h3 class="font-bold mt-5">Account No: </h3><input value=${items?.account_number} readonly class="border p-1 outline-0 text-xl"/>
                    </div>
                 </div>
                 <div>
                    <h3 class="text-left font-bold text-2xl mt-4">${items?.rule}</h3>
                    <ul class="flex flex-col gap-3 items-start mt-5 list-disc list-inside">
                      <li class="text-left">${items ? items?.desc1 : null}</li>
                      <li class="text-left">${items ? items?.desc2 : null}</li>
                      <li class="text-left">${items ? items?.desc3 : null}</li>
                      <li class="text-left">${items ? items?.desc4 : null}</li>
                      <li class="text-left">${items ? items?.desc5 : null}</li>
                      <li class="text-left">${items ? items?.desc6 : null}</li>
                    </ul>
                 </div>
            </div>
        `,
            width: "750px",
            imageUrl: items.bank_logo,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Cancel",
            showCloseButton: true
        });
    }
    // <span onClick="(handleCopy)" class="text-2xl relative right-10">&#10063;</span>
    return (
        <>
            <PageHelmet pageTitle="About Us"></PageHelmet>
            <main>
                <section className='bg-slate-200'>
                    <div className="container mx-auto">
                        <PageBanner animationfile={aboutAnimation} animationHeight="sm:h-[400px]" animationPadding={"p-2 lg:p-10"} pageTitle={["About ", <span key={56454} className='text-primary'>H</span>, "ostFlu ", <br key={1} className='hidden md:block'></br>, "Web Services"]}></PageBanner>
                    </div>
                </section>
                <section className='py-20 px-2'>
                    <div className='container mx-auto'>
                        <div>
                            <div className='flex flex-col justify-center md:flex-row gap-5 items-center py-5'>
                                <div className='md:flex-1'>
                                    <img src={about1} alt="web server" className='w-full mx-auto rounded-md ' />
                                </div>
                                <div className='md:flex-1 md:text-lg'>
                                    <p>The journey of our company started in 2018 by the hands of Mr. Ashiqur Rahman, which was originally called Titanhost. Later, in 2023, we changed the name to HostFlu. We operate our operations from Mymensingh city, and we have many clients in and outside the country who are satisfied with our services. Our skilled staff are always committed to ensuring the highest level of service to our clients at all times with their utmost knowledge, skills, and experience. We are committed to providing you with the service you need with honesty and trustworthiness in a very short time, which will build a good relationship between you and us. We have a skilled and dedicated support team to monitor all your issues round the clock who will understand and solve your problems seriously.</p>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center md:flex-row gap-5 items-center py-5'>
                                <div className='md:flex-1 md:text-lg'>
                                    <b className='mb-2'>Vision</b>
                                    <p> We know that new technologies, which are more efficient and long-lasting than the previous technologies, are constantly coming into the world of information technology. Therefore, to provide the highest quality service to our clients, we continuously keep an eye on the latest technology through research, which ensures the highest level of service to our clients, and over time, that puts us ahead of others. With our dedication to innovation, we strive to anticipate your needs and exceed your expectations, ensuring that our services remain unmatched in the industry.</p>
                                </div>
                                <div className='md:flex-1'>
                                    <img src={vision} alt="web server" className='max-w-[500px] mx-auto rounded-md ' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-center md:flex-row gap-5 items-center py-5'>
                                <div className='md:flex-1'>
                                    <img src={mision} alt="web server" className='max-w-[450px] mx-auto rounded-md ' />
                                </div>
                                <div className='md:flex-1 md:text-lg'>
                                    <b className='mb-2'>Mission</b>
                                    <p> Through the use of information technology, we want to create more employment in the country. Our main objective is to reach the young generation with our services like domain registration, web hosting, WordPress customization, WordPress migration, content development, international payment gateway consultation, etc. Our dreams are not just about ourselves, our dreams are about a country because we know without information technology human being cann`t develop their country.</p>
                                </div>

                            </div>


                        </div>
                    </div>
                </section>
                <section className='py-20 px-1'>
                    <div className="container mx-auto">
                        <h1 className="text-center text-slate-700 text-2xl md:text-[40px] mb-20 font-semibold">Our Team</h1>
                        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-10 overflow-hidden px-4 py-10'>
                            {
                                allteam?.map((items, idx) => (
                                    <div key={idx} className='p-[2px] bg-slate-300 rounded-md relative group overflow-hidden'>
                                        <img src={items?.image} alt={items?.name} className='rounded-md' />
                                        <div className='absolute left-0 -bottom-full group-hover:bottom-0 duration-300 px-2 text-white h-full w-full bg-black flex flex-col justify-end bg-opacity-50 rounded-md'>
                                            {/* <p className='text-white font-bold px-3 text-xl text-center'>{items?.proverbs}</p> */}
                                            <ul className='px-2 flex justify-evenly gap-2 file flex-wrap mb-7'>
                                                <li className='hover:rotate-[360deg] duration-300 p-3'><a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.fbUrl}>
                                                    <FaFacebook size={25} /></a>
                                                </li>
                                                <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                    <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.linkedinUrl}>
                                                        <FaLinkedin size={25} />
                                                    </a>
                                                </li>
                                                <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                    <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={`https://wa.me/${items?.whatsApp}`}><FaWhatsapp size={25} /></a>
                                                </li>
                                                <li className='hover:rotate-[360deg] duration-300 p-3'>
                                                    <a target='_blank' className='hover:text-blue-400 duration-200' rel='noreferrer' href={items?.gitHub}><FaGithub size={25} /></a>
                                                </li>
                                            </ul>
                                            <div className='pb-5 text-center'>
                                                <h3 className="text-xl font-bold">{items.name}</h3>
                                                <h4 className='text-primary font-semibold'>{items?.designation}</h4>
                                                <h4 className='font-semibold'>{items?.organization}</h4>
                                            </div>
                                        </div>
                                        <div className='absolute bottom-0 left-0 px-4 w-full py-3 group-hover:-bottom-full text-white bg-black bg-opacity-50 duration-700'>
                                            <h3 className="text-xl font-bold">{items.name}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='py-20 bg-slate-50 px-1'>
                    <div className="container mx-auto">
                        <h1 className="text-center text-slate-700 text-2xl md:text-[40px] mb-5 font-semibold">Payment Gatway</h1>
                        <p className='text-xl text-slate-700 text-center mb-3'>Click to view payment details</p>
                        <div className='payment-option grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 mt-10'>
                            {
                                payment?.map((items, idx) => (
                                    <button onClick={() => handlePayment(items)} key={idx} className="gatway bg-white flex border items-center justify-center p-2 sm:p-5 cursor-pointer rounded-lg">
                                        <img src={items?.bank_logo} alt={items?.bank_name} className='w-1/2' />
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className='py-10 bg-slate-50'>
                    <Testimonial></Testimonial>
                </section>
            </main>
        </>
    )
}

export default AboutUs