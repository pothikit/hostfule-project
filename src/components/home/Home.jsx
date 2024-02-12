import React from 'react'
import Hero from './Hero'
import DomainSeach from './domainSeach'
import Threcard from './Threcard'
import Exclusive from './exclusive/Exclusive'
import WhyChoseUsSupport from './WhyChoseUsSupport'
import UserOriented from './UserOriented'
import MapGlobal from './MapGlobal'
import Faq from './faqAccordion/Faq'
import "./home.css";
import Testimonial from '../aboutUs/Testimonila'

function Home() {
    return (
        <main className=''>
            <Hero></Hero>
            <DomainSeach></DomainSeach>
            <Threcard></Threcard>
            <Exclusive></Exclusive>
            <WhyChoseUsSupport></WhyChoseUsSupport>
            <UserOriented></UserOriented>
            <MapGlobal></MapGlobal>
            <Faq></Faq>
            <Testimonial></Testimonial>
        </main>
    )
}

export default Home