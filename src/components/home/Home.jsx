import React from 'react'
import Hero from './Hero'
import DomainSeach from './domainSeach'
import Threcard from './Threcard'
import Exclusive from './exclusive/Exclusive'
import WhyChoseUsSupport from './WhyChoseUsSupport'
import Testimonial from './Testimonial'
import UserOriented from './UserOriented'
import MapGlobal from './MapGlobal'

function Home() {
    return (
        <main>
            <Hero></Hero>
            <DomainSeach></DomainSeach>
            <Threcard></Threcard>
            <Exclusive></Exclusive>
            <WhyChoseUsSupport></WhyChoseUsSupport>
            <UserOriented></UserOriented>
            <MapGlobal></MapGlobal>
            <Testimonial></Testimonial>
        </main>
    )
}

export default Home