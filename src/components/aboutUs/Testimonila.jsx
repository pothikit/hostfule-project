import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderImg from "../../asstes/testimonial1.jpg";
import tarikeamin from "../../asstes/tarikemin.jpg";
import fauhad from "../../asstes/faude.jpg";
import saidulhasan from "../../asstes/saidulhasan.jpg";


export default function Testimonial() {

    const settings = {
        infinite: true,
        arrow: true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="py-20 testimonial">
            <div className="container mx-auto text-center px-12 sm:px-8">
                <div className="section-top">
                    <h1 className="text-center text-primary text-xl sm:text-2xl md:text-[40px] mb-10 font-semibold">What Customers Say About Us</h1>
                    <p>What our customers have to say about our service, check below!</p>
                </div>
                <div className="mt-5">
                    <Slider {...settings}>
                        <div>
                            <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div sm:h-[480px] h-[320px]">
                                <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                    <img src={sliderImg} alt="" className="mx-auto w-20 h-20 z-20 shadow-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl md:text-2xl mt-10 font-medium">Mohsin Alam</h3>
                                <span className="block mt-2 text-gray-500">Web Developer</span>
                                <p className="text-sm md:text-base xl:text-xl mt-4 text-gray-600">
                                    HostFlu is a domain and hosting company based in Bangladesh which runs by some passionate server for enthusiast’s people. Those who need best customer support, want to pay the bill using Bangladeshi local payment gateway can buy their domain and hosting from <a className="text-primary" href="https://hostflu.com">hostflu.com</a>

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div sm:h-[480px] h-[320px]">
                                <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                    <img src={tarikeamin} alt="" className="mx-auto w-20 h-20 z-10 shadow-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl md:text-2xl mt-10 font-medium">MD Tarik Eamin</h3>
                                <span className="block mt-2 text-gray-500">Senior UI/UX Designer</span>
                                <p className="text-sm md:text-base xl:text-xl mt-4 text-gray-600">
                                    {/* <a className="text-primary" href="https://HostFlu.com">HostFlu.com</a> */}
                                    I have to give a shoutout to HostFlu for being such a great help me in getting my website up and running! Their domain and hosting services are super easy to use and manage, so I didn't have to stress about any of the technical staff. Seriously, I recommend them to anyone who wants to purchase domain and hosting service.

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div sm:h-[480px] h-[320px]">
                                <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                    <img src={fauhad} alt="" className="mx-auto w-20 h-20 z-10 shadow-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl md:text-2xl mt-10 font-medium">Abdullah Al Fouad imran</h3>
                                <span className="block mt-2 text-gray-500">Senior Developer</span>
                                <p className="text-sm md:text-base xl:text-xl mt-4 text-gray-600">
                                    <a className="text-primary" href="https://HostFlu.com">HostFlu.com</a> has been a fantastic hosting provider for my website. Optimum uptime and their support team is always there to assist whenever I have any issues. Pricing is competitive too. Highly recommend!

                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="mx-3 sm:mx-5 py-10 sm:py-16 px-5 rounded-2xl shadow-2xl carousel-div sm:h-[480px] h-[320px]">
                                <div className="-mt-28 slider-imgDiv bg-white w-24 h-24 flex items-center mx-auto rounded-full">
                                    <img src={saidulhasan} alt="" className="mx-auto w-20 h-20 z-10 shadow-2xl rounded-full" />
                                </div>
                                <h3 className="text-xl md:text-2xl mt-10 font-medium">Saidul Hasan</h3>
                                <span className="block mt-2 text-gray-500">Project Manager</span>
                                <p className="text-sm md:text-base xl:text-xl mt-4 text-gray-600">
                                    I have to give a shoutout to HostFlu for being such a great help me in getting my website up and running! Their domain and hosting services are super easy to use and manage, so I didn't have to stress about any of the technical staff. Seriously, I recommend them to anyone who wants to purchase domain and hosting service.

                                </p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section >
    );
}