import React, { useEffect, useState } from 'react'
import supportImg from "../../asstes/support.png"
function WhyChoseUsSupport() {
    const [ourService, setOurService] = useState([])
    // const ourService = data.choseService;
    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setOurService(data?.choseService))
    }, [])
    return (
        <>
            <section className='py-20'>
                <div className="container mx-auto px-2">
                    <h1 className='text-center text-2xl md:text-4xl mb-20 font-semibold'>Why Choose Our Service !</h1>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-20'>
                        {
                            ourService?.map((data) => (
                                <div className='py-4 sm:py-10 px-1 sm:px-5 lg:px-10 text-center serviceBox rounded-lg cursor-pointer' key={data.id}>
                                    <img src={`${data.icon}`} className='mx-auto' alt={data.title} />
                                    <h2 className='text-md md:text-2xl my-4 font-semibold'>{data.title}</h2>
                                    <p className='sm:text-justify'>{data.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='py-52 support-bg bg-slate-200 relative mb-10'>
                <div className='absolute top-0 left-0 h-full w-full flex'>
                    <div className='h-full flex-1 bg-gradient-to-r from-primary to-secondary rounded-r-full'></div>
                    <div className='h-full flex-1 hidden sm:block'></div>
                </div>
                <div className='absolute left-0 top-0 h-full w-full flex items-center'>
                    <div className="container mx-auto px-2">
                        <div className="support grid sm:grid-cols-2 justify-center items-center">
                            <div>
                                <h2 className='text-2xl md:text-4xl text-white mb-9'>Support</h2>
                                <p className='text-white md:text-lg'>
                                    We know how important it is to have reliable and fast domain hosting services for your online presence. That’s why we offer 24/7 days support to our customers.
                                </p>
                            </div>
                            <div className='text-center'>
                                <img src={supportImg} alt='' className='ml-auto' width="300" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChoseUsSupport