import React, { useState } from 'react'
import data from "../../data.json"
import { IoIosArrowDown } from 'react-icons/io'
import "./home.css"

function Faq() {
    const [activeFaq, setActiveFaq] = useState(null)
    const faqData = data.faq.slice(0, 5);
    const second5 = data.faq.slice(5, 10);
    const handleClick = (id) => {
        if (activeFaq !== id) {
            setActiveFaq(id)
        }
        else { setActiveFaq(null) }
    }
    return (

        <section className='p-1 py-20'>
            <div className="container mx-auto">
                <h1 className="text-center faq-top text-4xl mb-16 font-semibold">Frequently asked questions</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                    <div>
                        {
                            faqData.map((faq) => (
                                < div key={faq.id} >
                                    <div className='flex items-center justify-between p-1 cursor-pointer border-b border-gray-400' onClick={() => handleClick(faq.id)}>
                                        <button className='text-xl py-1 font-medium'>{faq.question}</button>
                                        <span className={`${activeFaq ? "rotate-180" : "rotate-0"}`}><IoIosArrowDown /></span>
                                    </div>
                                    <div className={`mt-3 answer my-5 px-2 ${activeFaq === faq.id ? "activeFaq" : "answer"}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* second faq */}
                    <div>
                        {
                            second5.map((faq) => (
                                < div key={faq.id} >
                                    <div className='flex items-center justify-between p-1 cursor-pointer border-b border-gray-400' onClick={() => handleClick(faq.id)}>
                                        <button className='text-xl py-1 font-medium'>{faq.question}</button>
                                        <span className={`${activeFaq === faq.id ? "rotate-180" : "rotate-0"} text-2xl duration-200 text-primary`}><IoIosArrowDown /></span>
                                    </div>
                                    <div className={`mt-3 answer my-5 px-2 answer ${activeFaq === faq.id ? "max-h-full" : "max-h-0"}`}>
                                        {faq.answer}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Faq