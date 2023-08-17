import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <section className="py-20">
            <div className="container mx-auto text-center">
                <Slider {...settings}>
                    <div>
                        <div className="border-4 mx-6">
                            <h3 className="text-2xl">title</h3>
                            <span>Clients name</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="border-4 mx-6">
                            <h3 className="text-2xl">title</h3>
                            <span>Clients name</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="border-4 mx-6">
                            <h3 className="text-2xl">title</h3>
                            <span>Clients name</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                    <div>
                        <div className="border-4 mx-6">
                            <h3 className="text-2xl">title</h3>
                            <span>Clients name</span>
                            <p className="text-xl">“thank you for realizing the idea and highly recommend it for those of you who want to create a system”</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}