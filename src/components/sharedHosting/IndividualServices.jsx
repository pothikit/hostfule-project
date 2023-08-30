import React from 'react'

function IndividualServices(props) {
    const { image, title, desc } = props;
    return (
        <div className='ietms-center flex justify-center gap-5 gap-y-10'>
            <div className='flex items-center'>
                <img src={image} className='w-20' alt={title} />
            </div>
            <div className='flex-1'>
                <h2 className='text-2xl md:4xl mb-1 font-semibold'>{title}</h2>
                <p className='text-base md:text-xl text-justify'>{desc}</p>
            </div>
        </div>
    )
}

export default IndividualServices