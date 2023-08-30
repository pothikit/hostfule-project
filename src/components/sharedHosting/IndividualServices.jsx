import React from 'react'

function IndividualServices(props) {
    const { image, title, desc } = props;
    return (
        <div className='ietms-center flex gap-5'>
            <img src={image} className='w-40' alt={title} />
            <div>
                <h2 className='text-2xl md:4xl mb-5 font-semibold'>{title}</h2>
                <p className='text-base md:text-xl text-justify'>{desc}</p>
            </div>
        </div>
    )
}

export default IndividualServices