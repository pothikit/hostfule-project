import React from 'react'
import data from '../../data.json'
import whmcs from "../../asstes/whmcs.png"
import cpanel from "../../asstes/cpanel.png"

function UserOriented() {
    let UserOriData = data.UserOriented;
    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="section-top text-center mb-20">
                    <h1 className='text-2xl md:text-[2.5rem] font-semibold text-center text-primary mb-9'>User Oriented Control Panel</h1>
                    <p>Intuitive and easy to use, cPanel help you to manage a web hosting account with maximum efficiency.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                    {
                        UserOriData.map((item) => (
                            <div className='flex gap-5' key={item.id}>
                                <div className='mt-2'>
                                    <img className='' src={item.url} alt={item.title} />
                                </div>
                                <div className='flex-1'>
                                    <h3 className="title text-2xl font-semibold">{item.title}</h3>
                                    <p className='mt-3'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="twoImg grid grid-cols-1 md:grid-cols-2 py-10 gap-20">
                    <div className='flex justify-end py-20 items-start'><img src={whmcs} className='w-9/12 h-[130%]' alt="WhmCS" /></div>
                    <div className='flex justify-start py-20 items-start'><img src={cpanel} className='w-9/12 h-[130%]' alt="cpanel" /></div>
                </div>
            </div>
        </section>
    )
}

export default UserOriented