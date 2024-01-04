import React, { useState } from 'react'
import termsAnimation from "../../asstes/termsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function TermsOfService() {
    const [tabNumber, setTabNumber] = useState(0);

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
                    <div>
                        <Tabs className="flex gap-10" selectedIndex={tabNumber} onSelect={handleTab}>
                            <TabList className="flex flex-col w-2/12 gap-10 border-r">
                                <Tab className="border-none cursor-pointer">Title 1</Tab>
                                <Tab className="border-none cursor-pointer">Title 2</Tab>
                            </TabList>

                            <div>
                                <TabPanel>
                                    <h2>Any content 1</h2>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Any content 2</h2>
                                </TabPanel>
                            </div>
                        </Tabs>

                        <div className='mt-20 flex gap-10'>
                            <button onClick={handlePrev}>prev</button>
                            <button onClick={handleNext}>next</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default TermsOfService