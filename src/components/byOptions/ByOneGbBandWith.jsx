import React, { useEffect, useState } from 'react'
import DetailsbyOptions from '../dedicatedServer/locationDatatable/DetailsbyOptions'
import Loading from './../shared/loading/Loading';


const ByOneGbBandWith = () => {
    const [country, setCountry] = useState([])
    const [loading, setLoadin] = useState(false)
    useEffect(() => {
        fetch("../locationdata.json")
            .then(res => res.json())
            .then(data => {
                setCountry(data.countries)
                setLoadin(true)
            })
    }, [])

    let cities = []
    for (let i = 0; i <= country?.length; i++) {
        country[i]?.city?.map(items => cities.push(items))
    }
    let detail = []
    for (let i = 0; i <= cities?.length; i++) {
        cities[i]?.details?.map(details => detail.push(details))
    }
    const ongbpsSpeed = detail?.filter(items => (items.networkSpeed === "1 Gbps"))
    // console.log(ongbpsSpeed)
    if (!loading) {
        return <div className='py-20'><Loading></Loading></div>
    }
    return (
        <main>
            <section>
                <div className="container mx-auto">
                    <div className=''>
                        {
                            ongbpsSpeed?.map((speedDataTabel, idx) => (
                                <DetailsbyOptions loading={loading} key={idx} tableData={speedDataTabel}></DetailsbyOptions>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ByOneGbBandWith