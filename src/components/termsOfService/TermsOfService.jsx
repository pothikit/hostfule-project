import React, { useState } from 'react'
import termsAnimation from "../../asstes/termsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
function TermsOfService() {
    const [tabNumber, setTabNumber] = useState("0")
    return (
        <main>
            <section className=''>
                <div className='bg-slate-300'>
                    <PageBanner animationfile={termsAnimation} animationPadding={"p-2 lg:p-10"} pageTitle={["Terms Of ", <span key={500} className='text-primary'>S</span>, "ervices ", "And Conditions"]}></PageBanner>
                </div>
            </section>
            <section className='py-20'>
                <div className="container mx-auto">
                    <Tabs tabIndex={tabNumber}>
                        <TabList>
                            <Tab>Title 1</Tab>
                            <Tab>Title 2</Tab>
                            <Tab>Title 3</Tab>
                            <Tab>Title 4</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 4</h2>
                        </TabPanel>
                    </Tabs>
                    <button onClick={() => setTabNumber(tabNumber + 1)}>next</button>
                </div>
            </section>
        </main>
    )
}

export default TermsOfService