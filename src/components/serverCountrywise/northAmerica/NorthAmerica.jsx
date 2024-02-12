import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React, { useEffect, useState } from 'react'
import bannerImgAnimation from "../../../asstes/unmanageserver.json"
import CommonDisplayCountryServer from '../CommonDisplayCountryServer'
import PageHelmet from '../../shared/PageHelmet'
import PageBanner from '../../shared/pageBanner/PageBanner'
function NorthAmerica() {

    const [loading, setLoading] = useState(true)
    const [serverLocation, setServerLocation] = useState([])
    useEffect(() => {
        fetch("locationdata.json")
            .then(res => res.json())
            .then(data => {
                const mexico = (data.countries?.find((country) => country.countryName === "mexico"))
                const canada = (data.countries?.find((country) => country.countryName === "canada"))
                const usa = (data.countries?.find((country) => country.countryName === "united states"))
                const panama = (data.countries?.find((country) => country.countryName === "panama"))
                // ( && country.countryName === "united states" && country.countryName === "canada"))
                setServerLocation([mexico, canada, usa, panama])
                data && setLoading(false)
            })
    }, [])
    return (
        <>
            <PageHelmet pageTitle="North America"></PageHelmet>
            <main>
                <section className='bg-slate-100 '>
                    <PageBanner animationfile={bannerImgAnimation} animationHeight="h-[450px]"></PageBanner>
                </section>
                <CommonDisplayCountryServer loading={loading} serverLocation={serverLocation}></CommonDisplayCountryServer>
            </main>
        </>
    )
}

export default NorthAmerica