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
                            <div className='p-10 bg-gray-200 rounded-lg' key={data.id}>
                                <img src={`${data.icon}`} alt={data.title} />
                                <h2>{data.title}</h2>
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