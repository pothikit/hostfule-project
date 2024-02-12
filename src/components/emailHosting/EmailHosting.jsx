import React from 'react';
import emailHostingAnimation from "../../asstes/emailAnimation.json"
import PageBanner from '../shared/pageBanner/PageBanner';
import PageHelmet from '../shared/PageHelmet';

const EmailHosting = () => {
    return (
        <>
            <PageHelmet pageTitle="Email Hosting"></PageHelmet>
            <main>
                <PageBanner animationfile={emailHostingAnimation} animationHeight="sm:h-[600px]" animationPadding="p-14" className="bg-slate-200" pageTitle={["Secure, Reliable Email", <span key={1} className='text-primary'> H</span>, "osting for Business"]}></PageBanner>
            </main>
        </>
    );
};

export default EmailHosting;

