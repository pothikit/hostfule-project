import React, { useEffect, useState } from 'react'
import termsAnimation from "../../asstes/termsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function TermsOfService() {
    const [tabNumber, setTabNumber] = useState(0);
    const [termsData, setTermsData] = useState([])
    useEffect(() => {
        fetch("termsandConditions.json")
            .then(res => res.json())
            .then(data => setTermsData(data))
    }, [])

    const handleTab = (newTabNumber) => {
        setTabNumber(newTabNumber);
        console.log(newTabNumber)
    };
    const handleNext = () => {
        const newTabNumber = (tabNumber + 1) % 2; // Assuming you have 2 tabs
        setTabNumber(newTabNumber);
    };
    const handlePrev = () => {
        const newTabNumber = (tabNumber - 1 + 2) % 2; // Assuming you have 2 tabs
        setTabNumber(newTabNumber);
    };
    return (
        <main>
            <section className=''>
                <div className='bg-slate-300'>
                    <PageBanner animationfile={termsAnimation} animationPadding={"p-2 lg:p-10"} pageTitle={["Terms Of ", <span key={500} className='text-primary'>S</span>, "ervices ", "And Conditions"]}></PageBanner>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto">
                    <div className='rounded-md border p-3 md:p-10'>
                        {
                            termsData?.map((items, idx) => (
                                <Tabs key={idx} className="flex gap-10" selectedIndex={tabNumber} onSelect={handleTab}>
                                    <TabList className="flex flex-col w-2/12 gap-10 border-r px-7">
                                        <Tab className="border-none cursor-pointer text-lg font-semibold">{items?.headings}</Tab>
                                    </TabList>
                                    <div>
                                        <h3 className='text-xl md:text-3xl lg:text-4xl text-slate-700 mb-10 font-semibold'>Terms of Our Services</h3>
                                        <TabPanel>
                                            <h3 className='text-xl font-semibold mb-6'>{idx + 1}. {items?.headings}</h3>
                                            <p className='text-slate-700 leading-8 text-lg'>{items?.explain}</p>
                                        </TabPanel>
                                        <div className='mt-6 flex gap-10'>
                                            <button className='px-3 md:px-10 py-2 bg-slate-500 text-white rounded-full' onClick={handlePrev}>prev</button>
                                            <button className='px-3 md:px-10 py-2 bg-slate-500 text-white rounded-full' onClick={handleNext}>next</button>
                                        </div>
                                    </div>
                                </Tabs>
                            ))
                        }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default TermsOfService