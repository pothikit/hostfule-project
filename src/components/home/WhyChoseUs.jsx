import React, { } from 'react'
import data from "../../data.json"
function WhyChoseUs() {
    const ourService = data.choseService;
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <h1 className='text-center text-4xl mb-20 font-semibold'>Why Choose Our Service !</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-32'>
                    {
                        ourService.map((data) => (
                            <div className='py-10 px-20 text-center serviceBox rounded-lg cursor-pointer' key={data.id}>
                                <img src={`${data.icon}`} className='mx-auto' alt={data.title} />
                                <h2 className='text-2xl my-4 font-semibold'>{data.title}</h2>
                                <p>{data.description}</p>
                            </div>
                        ))

                    }
                </div>
            </div>
        </section>
    )
}

export default WhyChoseUs