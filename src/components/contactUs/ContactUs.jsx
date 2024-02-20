import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import PageHelmet from '../shared/PageHelmet';
import contactUsAnimation from "../../asstes/contactus.json"
import PageBanner from './../shared/pageBanner/PageBanner';
import aboutus from "../../asstes/contatct.png"
const ContactUs = () => {
    const formData = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ebpnsge', 'template_v5q4i9s', formData.current, {
            publicKey: 'JJ2lWw0m6ENhakgfh',
        })
            .then(
                () => {
                    // console.log('SUCCESS!');
                    Swal.fire({
                        icon: "success",
                        title: "Thank you! We will reach you.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    e.target.reset();
                },
                (error) => {
                    Swal.fire(error)
                },
            );
    }
    return (
        <>
            <PageHelmet pageTitle="contact us"></PageHelmet>
            <main>
                <PageBanner className="py-10" animationHeight="h-96" animationfile={contactUsAnimation} pageTitle={["Contact us", <span className='text-primary'> <br className='hidden md:block' /> 7/24</span>]}></PageBanner>
                <section className='bg-slate-200 py-20'>
                    <div className="container mx-auto">
                        <div className='grid md:grid-cols-2 gap-5 md:grid-9 items-center justify-center'>
                            <div className=''>
                                <img src={aboutus} alt="about" className='w-full lg:w-2/3 mx-auto rounded-lg' style={{ transform: "rotateY(180deg)" }} />
                            </div>
                            <form onSubmit={handleSubmit} ref={formData} className='bg-slate-50 p-3 sm:p-5 md:p-8 shadow rounded-lg'>
                                <div className='space-y-8'>
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input name='name' type="text" required placeholder='Name' className='w-full p-2 outline-0 border' />
                                    </div>
                                    <div>
                                        <label htmlFor="">Email</label>
                                        <input name='email' type="email" required placeholder='Email' className='w-full p-2 outline-0 border' />
                                    </div>
                                    <div>
                                        <label htmlFor="">Write Your Message</label>
                                        <textarea name='message' required row="10" placeholder='Message' className='w-full p-2 outline-0 border' ></textarea>
                                    </div>
                                </div>
                                <input type="submit" value="Submit" className='py-2 px-5 md:px-10 bg-primary text-white mt-6 hover:bg-opacity-80 duration-200 cursor-pointer' />
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactUs