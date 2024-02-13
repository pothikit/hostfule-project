
import React, { useEffect, useState } from 'react'
import Loading from '../shared/loading/Loading';
import DetailsbyOptions from '../dedicatedServer/locationDatatable/DetailsbyOptions';
import PageHelmet from '../shared/PageHelmet';

const ByTenGbps = () => {
    const [country, setCountry] = useState([])
    const [loading, setLoadin] = useState(false)
    const [displayData, setDisplayData] = useState(50)
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
    const tenGbps = detail?.filter(items => (items.networkSpeed === "10 Gbps"))
    const handleDisplayData = () => {
        setDisplayData(displayData + 50)
    }
    if (!loading) {
        return <div className='py-20'><Loading></Loading></div>
    }
    return (
        <>
            <PageHelmet pageTitle="10 Gbps Bandwidth"></PageHelmet>
            <main>
                <section className='sticky top-16'>
                    <div className="container mx-auto sm:py-3 bg-opacity-90 sm:rounded-lg mt-2 bg-primary">
                        <h1 className='font-bold text-white text-xl md:text-2xl lg:text-3xl text-center'>10 Gbps Bandwidth</h1>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto">
                        <div className=''>
                            {
                                tenGbps?.slice(0, displayData).map((speedDataTabel, idx) => (
                                    <DetailsbyOptions loading={loading} key={idx} tableData={speedDataTabel}></DetailsbyOptions>
                                ))
                            }
                        </div>
                        <div className='text-center my-10'>
                            {
                                displayData < tenGbps.length && <button className='py-2 px-4 hover:bg-opacity-80 rounded-lg md:px-6 bg-primary rounded-mg text-white' onClick={handleDisplayData}>Load more</button>
                            }
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ByTenGbps