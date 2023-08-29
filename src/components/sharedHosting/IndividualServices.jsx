import React from 'react'

function IndividualServices(props) {
    const { image, title, desc } = props;
    return (
        <div className='max-w-lg mx-auto'>
            <img src={image} className='w-52' alt="title" />
            <h2 className='text-2xl md:4xl my-5'>{title}</h2>
            <p className='text-base md:text-xl text-justify'>{desc}</p>
        </div>
    )
}

export default IndividualServices