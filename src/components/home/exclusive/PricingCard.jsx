import React from 'react'
import '../home.css'
import { BsFillCheckSquareFill } from 'react-icons/bs'
function PricingCard({ cardData }) {


    return (
        <>
            {
                <div className="card shadow-xl pb-16 rounded-xl text-center" key={cardData.id}>
                    <div className="card-head bg-gradient-to-t from-primary to-secondary text-center p-6 rounded-t-xl rounded-b-[40px] shadow-xl ">
                        <div className='text-white'>
                            <span className="type text-xl uppercase">{cardData.type}</span>
                            <h2 className='text-4xl font-semibold my-4'>{cardData.price}</h2>
                            <span className='text-xl'>{cardData.discount}</span>
                        </div>
                    </div>
                    <div className="card-body text-center p-8">
                        <h3 className='text-2xl font-semibold my-3 card-service-name'>{cardData.serviceName}</h3>
                        <p className='text-sm'>{cardData.description}</p>
                        <ul className='max-w-fit mx-auto space-y-4 mt-5'>
                            {
                                cardData.features.map((feature) => <li className='flex items-center gap-3'><span className='text-lg'><BsFillCheckSquareFill className='text-primary' /></span><span>{feature}</span></li>)
                            }
                        </ul>
                    </div>
                    <button className='px-10 py-3 bg-gradient-to-t from-primary to-secondary rounded-xl shadow-lg mt-5 text-white'>Buy Now</button>
                </div>
            }
        </>

    )
}

export default PricingCard