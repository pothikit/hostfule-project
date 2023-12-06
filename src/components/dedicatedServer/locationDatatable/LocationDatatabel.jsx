import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LocationDatatabel = () => {
    const [locationData, setLocationData] = useState([])
    const { location } = useParams();
    const country = location.split("-")[1];

    useEffect(() => {
        fetch("../locationdata.json")
            .then(res => res.json())
            .then(data => {
                setLocationData(data.countries)
            })
    }, [])
    const countryWise = locationData.filter(items => items.countryName === country)
    console.log(countryWise)
    return (
        <div className='py-20 container mx-auto'>
            <div>
                <div>
                    <ul className='flex justify-between gap-2 bg-primary py-2 px-3 rounded-md text-white font-semibold'>
                        <li className='uppercase'>CPU</li>
                        <li className='uppercase'>RAM</li>
                        <li className='uppercase'>STORAGE</li>
                        <li className='uppercase'>NETWORK</li>
                        <li className='uppercase'>PRICE</li>
                        <li className='uppercase'>Availability</li>
                    </ul>
                </div>
                {
                    countryWise.map((items) => {
                        return items.city.map((items) => (
                            items.details.map((details, idx) => (
                                (
                                    <div key={idx} className='flex items-center justify-between gap-2 border mt-2 shadow-lg py-6 px-3 rounded-md font-semibold'>
                                        <div className='flex items-center gap-3'>
                                            <img src={details.brand} alt="" className='w-14' />
                                            <div className='flex flex-col'>
                                                <span className='font-thin'>{details.cpu}</span>
                                                <span className='font-thin text-xs'>{details?.ghz}</span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col font-thin'>
                                            <span>{details.ram}</span>
                                            <span>{details.ddr}</span>
                                        </div>
                                        <div className='flex flex-col font-thin'>
                                            <span>{details.storage}</span>
                                            <span>{details?.alternativeStorage}</span>
                                        </div>
                                        <div className='flex flex-col font-thin'>
                                            <span>{details?.networkSpeed}</span>
                                            <span>{details?.maximumSpeed}</span>
                                            <span className='italic'>{details?.fairUse}</span>
                                        </div>
                                        <div>
                                            <h2><del>{details?.oldPrice}</del></h2>
                                            <h2 className='flex'>${details?.newPrice}</h2>
                                        </div>
                                        <div>
                                            <button className='bg-[#6c757d] py-2 px-4 rounded-md text-white'>Check Now</button>
                                        </div>
                                    </div>
                                )
                            ))
                        ))
                    })
                }
            </div>
        </div>
    );
};

export default LocationDatatabel;