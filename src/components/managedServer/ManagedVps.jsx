import React from 'react';
import managedvpsAnimation from "../../asstes/managedvpsAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';

const ManagedServer = () => {
    return (
        <main>
            <PageBanner animationfile={managedvpsAnimation} pageTitle={["Hassle-Free ", <span className='text-primary'>M</span>, "anaged VPS Hosting"]} animationName=""></PageBanner>
        </main>
    );
};
export default ManagedServer;