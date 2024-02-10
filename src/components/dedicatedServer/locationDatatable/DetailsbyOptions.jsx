import React, { } from 'react'
import Loading from '../../shared/loading/Loading'

const DetailsbyOptions = ({ tableData: details, loading }) => {

    if (!loading) {
        return <Loading></Loading>
    }
    return (
        <div className='shadow-lg border flex xl:px-6 mt-3 rounded-md flex-col xl:flex-row p-2 xl:p-0 flex-start xl:items-center items-start'>
            <div className='whitespace-nowrap ml-5 xl:ml-0 py-3 xl:max-w-[150px]'><span className='inline xl:hidden'>Server Id :</span> {details.id}</div>
            <div className='grid grid-cols-1 xl:grid-cols-6 gap-3 items-center xl:py-2 xl:p-0 font-semibold w-full'>
                <div className='flex items-start flex-row-reverse xl:flex-row justify-end xl:justify-start text-start gap-3 ml-5 xl:ml-0 xl:pl-10 xl:items-center'>
                    <img src={details.brand} alt="" className='w-14' />
                    <div className='flex flex-col'>
                        <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.cpu}</span>
                        <span className='font-thin text-xs'>{details?.ghz}</span>
                    </div>
                </div>
                <div className='flex gap-2 xl:flex-col xl:text-center font-thin ml-5 xl:ml-0 xl:pl-10'>
                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.ram}</span>
                    <span>{details.ddr}</span>
                </div>
                <div className='flex xl:flex-col font-thin ml-5 xl:ml-0 xl:pl-6'>
                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details.storage}</span>
                    <span>{details?.alternativeStorage}</span>
                </div>
                <div className='flex gap-2 xl:flex-col font-thin ml-5 xl:ml-0 xl:pl-6'>
                    <span className='font-bold xl:font-thin text-lg xl:text-base'>{details?.networkSpeed}</span>
                    <span>{details?.maximumSpeed}</span>
                    <span className='italic'>{details?.fairUse}</span>
                </div>
                <div className='ml-5 xl:ml-0 xl:pl-6'>
                    <del className='font-thin'>{details?.oldPrice}</del>
                    <h2 className='flex font-extrabold text-lg xl:text-base'>${details?.newPrice}</h2>
                </div>
                <div className='md:ml-7'>
                    <a target='_blank' rel="noreferrer" href="https://m.me/198137493375467">
                        <button className='bg-[#6c757d] hover:bg-slate-600 duration-300 py-2 px-4 rounded-md text-white w-full xl:w-auto'>Check Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DetailsbyOptions