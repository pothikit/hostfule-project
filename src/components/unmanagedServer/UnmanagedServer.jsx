import React from 'react';
import unManagedAnimation from "../../asstes/unmanageserver.json";
import PageBanner from '../shared/pageBanner/PageBanner';

const UnmanagedServer = () => {
    return (
        <main>
            <PageBanner animationfile={unManagedAnimation} pageTitle={["Shared", <span className='text-primary'> H</span>, "osting With Premium Speed"]}></PageBanner>
        </main>
    );
};

export default UnmanagedServer;