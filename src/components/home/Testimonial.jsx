import React from "react";
import "./home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <Slider {...settings}>
                    <div>
                        <div className="mx-10 py-8 px-5 rounded-2xl shadow-2xl carousel-div">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-10 py-8 px-5 rounded-2xl shadow-2xl carousel-div">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-10 py-8 px-5 rounded-2xl shadow-2xl carousel-div">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-10 py-8 px-5 rounded-2xl shadow-2xl carousel-div">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section >
    );
}