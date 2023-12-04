import React from 'react';
import unManagedAnimation from "../../asstes/unmanageserver.json";
import PageBanner from '../shared/pageBanner/PageBanner';
import Construction from '../shared/underConstructionpage/Construction';

const UnmanagedServer = () => {
    return (
        <main className=''>
            <section>
                <div className="container mx-auto">
                    <PageBanner animationfile={unManagedAnimation} pageTitle={["Shared", <span className='text-primary'> H</span>, "osting With Premium Speed"]}></PageBanner>
                    <div className='py-20'>
                        <h1 className="mt-20 text-2xl md:text-4xl lg:text-7xl font-bold text-center">Under Construction</h1>
                        <Construction></Construction>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default UnmanagedServer;