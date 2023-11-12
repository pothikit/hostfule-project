import React from 'react'
import logo from "../../asstes/footer-logo.png"
import "./footer.css"
import { MdNetworkWifi } from "react-icons/md"
import { FaFacebookF, } from "react-icons/fa"
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { TbWorld } from "react-icons/tb"
import bkash from "../../asstes/bkash.png"
import nagad from "../../asstes/nagad.png"
import rocket from "../../asstes/rocket.png"
import wise from "../../asstes/wise.png"
import brac from "../../asstes/brac.png"
import dutch from "../../asstes/dutch.png"
import city from "../../asstes/city.png"
import estern from "../../asstes/estern.png";
// import supportImg from "../../asstes/our-support.jpg";
import { RxAvatar } from "react-icons/rx"
import { Controls, Player } from '@lottiefiles/react-lottie-player'
// import mouthSpech from "../../asstes/mouthspech.png"
import supportAnimation from "../../asstes/support.json"

function Footer() {
    return (
        <>
            <div className="container mx-auto -mt-20">
                <div className='bg-white z-10 relative bottom-[-120px] p-6 rounded-2xl border border-[#cccccc61]'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-20 items-center">
                        <div className='flex items-center justify-center'>
                            {/* <img src={supportImg} alt="Our Support" className='w-full mx-auto' /> */}
                            <Player
                                autoplay
                                loop
                                src={supportAnimation}
                            >
                                <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                        <div className='md:col-span-2'>
                            <h2 className='text-2xl md:text-4xl font-medium mb-8 capitalize'>We are here to help you </h2>
                            <p className='text-justify text-base md:text-xl'>Thank you for your interest in our hosting company support. We are committed to providing our customers with the highest quality service and support. Our team of experienced professionals is here to answer any questions you may have and assist you with setting up your hosting account. Our team is available 24 hours a day, seven days a week, to provide you with the best possible experience. We strive to make sure your hosting experience is stress-free and hassle-free. We understand that sometimes hosting can be a bit complicated, so we offer a variety of tutorials and resources to help you get up and running quickly. We also have a knowledgeable support staff that is here to help you when you need it. We know that your time is valuable, so we strive to</p>
                            <div className="butttons flex flex-col sm:flex-row gap-3 md:gap-5 lg:gap-12 mt-10">
                                <button className='flex items-center gap-3 p-2 border rounded-md hover:bg-gray-200 duration-300 group'>
                                    <span className='text-gray-600 p-1 rounded-full bg-white text-2xl'><RxAvatar /></span><span>Dashboard Login</span>
                                </button>
                                <button className='flex items-center gap-3 p-2 border rounded-md hover:bg-gray-200 duration-300 group'>
                                    <span className='text-gray-600 bg-white p-1 rounded-full group-hover:bg-white text-2xl'><RxAvatar /></span><span>Dashboard Login</span>
                                </button>
                                <button className='flex items-center gap-3 p-2 border rounded-md hover:bg-gray-200 duration-300 group'>
                                    <span className='text-gray-600 p-1 rounded-full group-hover:bg-white bg-white text-2xl'><RxAvatar /></span><span>Dashboard Login</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tab and mobile device */}
            {/* <div className='font-bold text-2xl flex justify-evenly md:hidden bg-black text-white py-10 items-center'>
                <div className='flex gap-3'>
                    <p>We are Here to Help you :</p> <strong className='text-primary'>01719-375526</strong>
                </div>
                <img src={mouthSpech} className='w-16' alt="Mouth speech" />
            </div> */}

            {/* footer top our support section */}
            <footer className='pt-52'>
                <div className="container mx-auto px-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-20 lg:gap-32">
                        {/* col maind div */}
                        <div>
                            <div className="col-title mb-8">
                                <img src={logo} alt="Hostflu" className='pb-5' />
                                <hr className='w-[55%] -m-1' />
                            </div>
                            <p className='text-gray-100 leading-7 font-extralight text-justify'>Namecheap exists to help EVERYONE get, make, and achieve more online with less cost, hassle, and head
                                aches. We offer everything you need to get online and thrive, from domains to. e online with less cost, hassle, ane online with less cost, hassle, an   </p>
                        </div>
                        {/* col maind div */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Web Hosting</h3>
                            </div>
                            <ul className='list-disc space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Cloud Server</h3>
                            </div>
                            <ul className='list-disc space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Domain</h3>
                            </div>
                            <ul className='list-disc space-y-4 text-white'>
                                <li>Web Hosting</li>
                                <li>Wordpress Hosting</li>
                                <li>VPS Hosting</li>
                                <li>Managed VPS Hosting</li>
                                <li>Dedicated Hosting</li>
                            </ul>
                        </div>
                        {/* col main div end */}
                    </div>
                    <div className="footer-bottom py-20">
                        <div className="grid gird-cols-1 md:grid-cols-3 gap-20">
                            <div className="payment-gatway">
                                <div className='s-title text-white flex items-center gap-3 mb-5'>
                                    <span className='text-xl'><MdOutlineVerifiedUser /></span>
                                    <h3 className='font-semibold'>Follow Our Social Media</h3>
                                </div>
                                <div className='payment-option grid grid-cols-4 gap-3'>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={bkash} alt="bkash" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={nagad} alt="nagad" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={rocket} alt="rocket" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={wise} alt="wise" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={brac} alt="brac" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={dutch} alt="dutch" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={city} alt="city" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img src={estern} alt="estern" /></div>
                                </div>
                            </div>
                            <div className="newsletter">
                                <h2 className='text-white text-xl font-semibold'>Subscribe Our Newsletter</h2>
                                <p className='text-white leading-7 w-[70%] my-5'>By subscribing with your mail, you will accept our privacy policy.</p>
                                <form action="" className='flex bg-white p-2 justify-between items-center rounded-lg'>
                                    <input required type="text" className='flex-1 text-gray-400 outline-none p-2' placeholder='Enter Your Email Address' />
                                    <input type="submit" value="SUBSCRIBE" className='px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:bg-primary md:ml-4 rounded-lg text-white cursor-pointer' />
                                </form>
                            </div>
                            <div className="social space-y-5">
                                <div className='s-title text-white flex items-center gap-3'>
                                    <span className='text-xl rotate-45'><MdNetworkWifi /></span>
                                    <h3>Follow Our Social Media</h3>
                                </div>
                                <ul className='flex items-center gap-5 flex-wrap'>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2'><FaFacebookF /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2'><AiFillInstagram /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2'><TbWorld /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2'><AiFillYoutube /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* container */}
                <div className="copyright py-4 text-white bg-primary">
                    <div className="container mx-auto px-2">
                        <div className="flex items-center justify-between">
                            <span>Copyright © HostFlu 2023</span>
                            <ul className='flex items-center'>
                                <li className='border-r border-gray-300 px-1 md:px-3 text-sm md:text-base'>Terms of Service</li>
                                <li className='px-2 md:px-4 text-sm md:text-base'>Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer