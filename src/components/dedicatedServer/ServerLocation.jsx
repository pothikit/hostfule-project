import React from 'react';

const ServerLocation = ({ serverLocation }) => {
    const { flagImg, country, capital } = serverLocation;
    return (
        <div className='shadow-lg rounded-lg locationCard p-5 py-20 sm:py-5'>
            <div className='md:space-y-3 md:pt-20 pt-10'>
                <img src={flagImg} alt={country} className='w-16 md:w-20' />
                <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-primary'>{capital}</h3>
                <p className='text-sm'>{country}</p>
            </div>
        </div>
    );
};

export default ServerLocation;