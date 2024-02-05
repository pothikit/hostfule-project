import { } from '@lottiefiles/react-lottie-player'
import React from 'react'
import sslAnimation from "../../../asstes/ssl-certificate.json"
import PageBanner from './../../shared/pageBanner/PageBanner';
import ssl from '../../../asstes/ssl-certificate.png'
import SslPrice from './SslPrice';
import CheapSslShop from './CheapSslShop';
function SslCertificate() {
    return (
        <main className="px-2 md:px-0">
            <PageBanner animationfile={sslAnimation} pageTitle={[<span className="text-primary">SSL</span>, " Certificate"]} animationHeight="h-[400px]"></PageBanner>
            <section className="py-20">
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-7 items-center">
                        <div>
                            <img src={ssl} alt="ssl certificate" className="w-full rounded-md border p-2 sm:p-5 md:p-8 lg:p-10" />
                        </div>
                        <div>
                            <div>
                                <p className="md:text-xl md:leading-normal">Sectigo SSL (formerly Comodo CA) is the largest commercial trust provider in the World. Experiences and well-trained employees helping individuals and corporate customers to protect websites, online applications, and emails.

                                    Sectigo SSL certificates are popular all around the World and they are well-presented in all segment of market and type of SSL certificates like Domain vetted, Business and Extended Validation, Multi-Domain, Wildcard, SMIME and Code Signing certs.

                                    SSL is the cheapest SSL certificate which is fast and of a high quality. It is a 256-bit certificate and has great browser compatibility. It is possible to get it working within just fine minutes and easy to set up.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SslPrice></SslPrice>
            <CheapSslShop></CheapSslShop>
        </main>
    )
}

export default SslCertificate