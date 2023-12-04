import React from 'react';

const ServerLocation = ({ serverLocation }) => {
    const { flagImg, country, capital, locationImg } = serverLocation;
    return (
        <div className='shadow-lg rounded-lg locationCard p-5 sm:py-5 relative'>
            <div className='md:space-y-1 pt-24'>
                <img src={flagImg} alt={country} className='w-16 md:w-20' />
                <p className='text-sm font-semibold'>{country}</p>
                <h3 className='md:text-xl font-semibold text-slate-500'>{capital}</h3>
            </div>
            <div className='absolute top-0 right-0 max-w-[75%] bg-red-100 h-full -z-10 rounded-bl-full'>
                <img src={locationImg} className='rounded-bl-full w-full h-full' alt="" />
            </div>
        </div>
    );
};

export default ServerLocation;