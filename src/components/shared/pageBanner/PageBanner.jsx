import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const PageBanner = ({ animationfile, pageTitle, className, animationName, animationPadding }) => {

    return (
        <section className={`px-1 md:px-0 py-5 ${className ? className : null}`}>
            <div className="container mx-auto">
                <div className='flex items-center flex-col-reverse md:flex-row justify-center pb-10 md:pb-0 gap-3'>
                    <div className='flex-1' data-aos={animationName ? animationName : "fade-right"} >
                        <h2 className='text-black text-2xl md:text-4xl lg:text-7xl font-bold lg:leading-snug'>{pageTitle}</h2>
                    </div>
                    <div className="flex-1" data-aos={animationName ? animationName : "fade-left"} >
                        <div className={`ml-auto`}>
                            <Player className={`md:h-[600px] ${animationPadding ? animationPadding : "2"}`}
                                autoplay
                                loop
                                src={animationfile}
                            >
                                <Controls buttons={['play', 'repeat', 'debug']} />
                            </Player>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageBanner;