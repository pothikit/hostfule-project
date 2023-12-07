import React from 'react';
import { Link } from 'react-router-dom';
const ServerLocation = ({ serverLocation }) => {
    const { countryFlag, countryName, city } = serverLocation;
    // console.log(serverLocation)

    return (
        <>
            {
                city?.map((items, idx) => (
                    <Link key={idx} to={`/dedicated-servers/${items.name}-${countryName}`}>
                        <div className='shadow-lg border rounded-lg locationCard px-6 sm:py-2 relative bg-slate-50'>
                            <div className='pt-32'>
                                <img src={countryFlag} alt="" className='w-16 md:w-14' />
                                <p className='text-base text-slate-600 font-bold capitalize pt-5 -pb-5'>{countryName}</p>
                                <h3 key={idx} className='md:text-xl font-semibold capitalize'>{items.name}</h3>
                            </div>
                            <div className='absolute top-0 right-0 max-w-[75%] bg-red-100 h-full z-10 rounded-bl-full'>
                                <img key={idx} src={items.cityImg} className='rounded-bl-full w-full h-full' alt={items.name} />
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>

    );
};

export default ServerLocation;