import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css"

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        slidesToScroll: 1
    };
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <Slider {...settings} className="">
                    <div>
                        <div className="mx-5 py-8 px-5 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-5 py-8 px-5 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-5 py-8 px-5 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>

                    <div>
                        <div className="mx-5 py-8 px-5 rounded-2xl shadow-2xl">
                            <h3 className="text-2xl">Mr Jorce</h3>
                            <span>Retail Company</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>



                </Slider>
            </div>
        </section>
    );
}