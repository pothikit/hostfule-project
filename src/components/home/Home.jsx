import React from 'react'
import Hero from './Hero'
import DomainSeach from './domainSeach'
import Threcard from './Threcard'
import Exclusive from './exclusive/Exclusive'
import WhyChoseUsSupport from './WhyChoseUsSupport'

function Home() {
    return (
        <main>
            <Hero></Hero>
            <DomainSeach></DomainSeach>
            <Threcard></Threcard>
            <Exclusive></Exclusive>
            <WhyChoseUsSupport></WhyChoseUsSupport>
        </main>
    )
}

export default Home