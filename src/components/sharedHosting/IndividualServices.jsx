import React from 'react'

function IndividualServices(props) {
    const { image, title, desc } = props;
    return (
        <div className='ietms-center flex justify-center gap-5 gap-y-10 shadow-2xl rounded-xl border relative p-10 hover:border-transparent'>
            <div className='absolute -left-8 bg-white p-2 border -top-8 rounded-lg'>
                <img src={image} className='w-12 h-12' alt={title} />
            </div>
            <div className='flex-1'>
                <h2 className='md:text-xl xl:text-2xl mb-1 font-semibold'>{title}</h2>
                <p className='text-sm lg:text-base text-justify'>{desc}</p>
            </div>
        </div>
    )
}
export default IndividualServices