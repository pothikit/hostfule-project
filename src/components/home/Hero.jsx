import React from 'react'
import heroImg from "../../asstes/shutterstock.png"
function Hero() {
    return (
        <section className='py-16'>
            <div className='container mx-auto'>
                <div className="hero grid grid-cols-3 gap-4 items-center">
                    <div className='col-span-2'>
                        <div className="hero-title">
                            <h1 className='text-8xl flex flex-col gap-5 font-bold'>
                                <span className='block text-primary'>Up To 20X</span>
                                <span className='block'>Faster Web hosting</span>
                                <span>to Help Your Succeed !</span>
                            </h1>
                            <p className='text-base text-black my-6 max-w-xl'>From our easy-to-use tools, to our free website migration, to our<br />
                                unmatched Guru Crew Support, we provide everything you
                                need to create a successful website.</p>
                            {/* list item hero */}
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={heroImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero