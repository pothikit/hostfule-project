import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const ContactUs = () => {
    const formData = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ebpnsge', 'template_v5q4i9s', formData.current, {
            publicKey: 'JJ2lWw0m6ENhakgfh',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    Swal.fire("Thank Your! We will reach you as soon as possible")
                },
                (error) => {
                    Swal.fire(error)
                },
            );
    }
    return (
        <main>
            <div className="container mx-auto">
                <form onSubmit={handleSubmit} ref={formData} className='max-w-[600px] mt-10 bg-slate-50 p-3 sm:p-5 md:p-8 shadow rounded-lg'>
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
                            <textarea name='message' required row={5} placeholder='Email' className='w-full p-2 outline-0 border' ></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className='py-2 px-5 md:px-10 bg-primary text-white mt-6 hover:bg-opacity-80 duration-200 cursor-pointer' />
                </form>
            </div>
        </main>
    )
}

export default ContactUs