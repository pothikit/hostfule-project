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
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container mx-auto -mt-20">
                <div className='bg-slate-50 z-10 relative bottom-[-120px] p-2 sm:p-6 rounded-2xl border border-[#cccccc61]'>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-10 items-center">
                        <div className='flex items-center justify-center'>
                            {/* <img src={supportImg} alt="Our Support" className='w-full mx-auto' /> */}
                            <Player
                                autoplay
                                loop
                                src={supportAnimation}
                            >
                                <Controls buttons={['play', 'repeat', 'frame', 'debug']} />
                            </Player>
                        </div>
                        <div className='md:col-span-2'>
                            <h2 className='text-2xl md:text-4xl font-medium mb-8 capitalize'>We are here to help you </h2>
                            <p className='text-justify text-base md:text-xl'>Customer satisfaction is our main goal with sincerity. Our skilled team is ready 24 hours 365 days to provide any help regarding service, you feel free to report the problem to us. You can take service by message email, or phone call, or you can open a ticket by reporting your problem in your customer portal. If you want, you can come to our office and get new service directly or get support regarding your running service. In addition to taking our services, we invite you for a cup of coffee in our office.</p>
                            <div className="butttons flex flex-col sm:flex-row gap-3 md:gap-5 lg:gap-12 mt-10">
                                <button className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 p-1 rounded-full bg-slate-200 group-hover:bg-slate-400 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Client Protal</span>
                                </button>
                                <a href='https://my.hostflu.com/index.php/store/shared-hosting' target='_blank' rel='noreferrer' className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 bg-slate-200 p-1 rounded-full group-hover:bg-slate-400 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Know More Service</span>
                                </a>
                                {/* <button className='flex items-center gap-1 p-2 border rounded-md hover:bg-slate-400 duration-300 group bg-slate-200'>
                                    <span className='text-gray-600 p-1 rounded-full group-hover:bg-slate-400 bg-slate-200 duration-300 group-hover:text-white text-2xl'><RxAvatar /></span><span className='group-hover:text-white duration-300'>Dashboard Login</span>
                                </button> */}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-20 gap-20 lg:gap-20">
                        {/* col maind div */}
                        <div>
                            <div className="col-title mb-8">
                                <img src={logo} alt="Hostflu" className='pb-5' />
                                <hr className='w-[55%] -m-1' />
                            </div>
                            <p className='text-gray-100 leading-7 font-extralight'>
                                HostFlu and Fluresta are sister concerns. We have been providing mail server deployment services, Wordpress Customization along with domain hosting services for a long time. We are happy to serve the customers in the country and outside the country.
                            </p>
                        </div>
                        {/* col maind div */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Web Hosting</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Web Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Wordpress Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Managed VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Dedicated Hosting</Link></li>
                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Cloud Server</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Web Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Wordpress Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Managed VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Dedicated Hosting</Link></li>

                            </ul>
                        </div>
                        {/* col main div end */}
                        {/* col main div start */}
                        <div>
                            <div className="col-title mb-8">
                                <h3 className='text-xl border-b pb-4 text-white'>Domain</h3>
                            </div>
                            <ul className='list-disc list-inside space-y-4 text-white'>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Web Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Wordpress Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Managed VPS Hosting</Link></li>
                                <li><Link to="#" className='hover:text-slate-800 duration-300'>Dedicated Hosting</Link></li>

                            </ul>
                        </div>
                        {/* col main div end */}
                    </div>
                    <div className="footer-bottom py-20">
                        <div className="grid gird-cols-1 md:grid-cols-3  gap-20">
                            <div className="payment-gatway">
                                <div className='s-title text-white flex items-center gap-3 mb-5'>
                                    <span className='text-xl'><MdOutlineVerifiedUser /></span>
                                    <h3 className='font-semibold'>Follow Our Social Media</h3>
                                </div>
                                <div className='payment-option grid grid-cols-2 lg:grid-cols-4 gap-3'>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={bkash} alt="bkash" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={nagad} alt="nagad" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={rocket} alt="rocket" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={wise} alt="wise" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={brac} alt="brac" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={dutch} alt="dutch" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={city} alt="city" /></div>
                                    <div className="gatway bg-white flex border items-center justify-center py-2 px-4 rounded-lg"><img className='' src={estern} alt="estern" /></div>
                                </div>
                            </div>
                            <div className="newsletter">
                                <h2 className='text-white text-xl font-semibold'>Subscribe Our Newsletter</h2>
                                <p className='text-white leading-7 w-[70%] my-5'>By subscribing with your mail, you will accept our privacy policy.</p>
                                <form action="" className='flex bg-white p-2 justify-between items-center rounded-lg'>
                                    <input required type="text" className='flex-1 text-gray-400 outline-none p-2' placeholder='Enter Your Email Address' />
                                    <input type="submit" value="SUBSCRIBE" className='px-1 sm:px-4 py-2 bg-gradient-to-r from-primary to-secondary hover:bg-primary md:ml-4 rounded-lg text-white cursor-pointer' />
                                </form>
                            </div>
                            <div className="social space-y-5">
                                <div className='s-title text-white flex items-center gap-3'>
                                    <span className='text-xl rotate-45'><MdNetworkWifi /></span>
                                    <h3>Follow Our Social Media</h3>
                                </div>
                                <ul className='flex items-center gap-5 flex-wrap'>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><FaFacebookF /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><AiFillInstagram /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><TbWorld /></li>
                                    <li className='text-2xl text-primary rounded-xl bg-white p-3 mr-2 hover:scale-110 cursor-pointer duration-200'><AiFillYoutube /></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                {/* container */}
                <div className="copyright py-2 text-white bg-primary">
                    <div className="container mx-auto px-2">
                        <div className="flex items-center justify-between">
                            <span>Copyright © HostFlu 2023</span>
                            <ul className='flex items-center'>
                                <li className='border-r border-gray-300 px-1 md:px-3 text-sm md:text-base'><Link to="/termsOfService">Terms of Service</Link></li>
                                <li className='px-2 md:px-4 text-sm md:text-base'>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer