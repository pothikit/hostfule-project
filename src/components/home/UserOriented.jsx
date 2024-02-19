import React, { useEffect, useState } from 'react'
import whmcs from "../../asstes/whmcs.png"
import cpanel from "../../asstes/cpanel.png"
import Slider from 'react-slick'
// import required modules
function UserOriented() {
    const [userOriented, setUserOriented] = useState([])

    useEffect(() => {
        fetch("multipledata.json")
            .then(res => res.json())
            .then(data => setUserOriented(data?.multipledata))
    }, [])
    // slider settings
    const settings = {
        infinite: true,
        arrow: false,
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className='py-20 hidden sm:block'>
            <div className="container mx-auto px-2">
                <div className="section-top text-center mb-20">
                    <h1 className='text-2xl md:text-[2.5rem] font-semibold text-center text-primary mb-9'>User Oriented Control Panel</h1>
                    <p>Intuitive and easy to use, cPanel help you to manage a web hosting account with maximum efficiency.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20'>
                    {
                        userOriented?.map((item) => (
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
                <div className="panel-slider">
                    <Slider {...settings} className=''>
                        <div className='pointer-events-none p-3'>
                            <img src={whmcs} className='h-full' alt="WhmCS" />
                        </div>
                        <div className='pointer-events-none p-3'>
                            <img src={cpanel} className='h-full' alt="cpanel" />
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default UserOriented