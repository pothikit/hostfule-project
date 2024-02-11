import React, { useEffect, useState } from 'react'
// import DetailsbyOptions from '../dedicatedServer/locationDatatable/DetailsbyOptions'
import Loading from './../shared/loading/Loading';
import DetailsbyOptions from '../dedicatedServer/locationDatatable/DetailsbyOptions';

const ByUnmetered = () => {
    const [country, setCountry] = useState([])
    const [loading, setLoadin] = useState(false)
    const [displayData, setDisplayData] = useState(100)
    useEffect(() => {
        fetch("../locationdata.json")
            .then(res => res.json())
            .then(data => {
                setCountry(data.countries)
                setLoadin(true)
            })
    }, [])
    // find cities from all data
    let cities = []
    for (let i = 0; i <= country?.length; i++) {
        country[i]?.city?.map(items => cities.push(items))
    }
    // find all details from all data
    let detail = []
    for (let i = 0; i <= cities?.length; i++) {
        cities[i]?.details?.map(details => detail.push(details))
    }
    const unMetered = detail?.filter(items => (items.maximumSpeed === "Unmetered"))
    const handleDisplayData = () => {
        setDisplayData(displayData + 100)
    }
    if (!loading) {
        return <div className='py-20'><Loading></Loading></div>
    }
    return (
        <section>
            <div className="container mx-auto">
                <div className=''>
                    {
                        unMetered?.slice(0, displayData).map((speedDataTabel, idx) => (
                            <DetailsbyOptions loading={loading} key={idx} tableData={speedDataTabel}></DetailsbyOptions>
                        ))
                    }
                </div>
                <div className='text-center my-10'>
                    {
                        displayData < unMetered.length && <button className='py-2 px-4 hover:bg-opacity-80 rounded-lg md:px-6 bg-primary rounded-mg text-white' onClick={handleDisplayData}>Load more</button>
                    }
                </div>
            </div>
        </section>
    )
}

export default ByUnmetered