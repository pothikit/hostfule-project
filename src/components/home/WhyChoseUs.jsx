import React from 'react'
import data from "../../data.json"
// import img from "../../asstes/serviceLogo/User.png"

function WhyChoseUs() {
    const whyChoseUsData = data.choseService
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <h1 className='text-center text-4xl mb-20 font-semibold'>Why Choose Our Service !</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-32'>
                    {
                        whyChoseUsData.map((data) => (
                            <div className='bg-red-200 p-10 rounded-xl' key={data.id}>
                                <img src={data.icon} alt={data.title} />
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