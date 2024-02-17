import React from 'react'
import '../home.css'
import { BsFillCheckSquareFill } from 'react-icons/bs'
import Swal from 'sweetalert2'
function PricingCard({ cardData }) {
    const handlePopup = () => {
        Swal.fire({
            title: "Please Attention",
            text: "Are you interested in buying a monthly package ? Please contact the administrator for further assistance.",
            html: `
           <div>
           <h4>Interested in buying a monthly package? Please contact the administrator for further assistance.</h4>
           <div class="flex flex-col gap-3 font-semibold mt-5">
           <a href="https://wa.me/message/FG6M47PVSBBOF1" rel='noreferrer' target='_blank' class=' hover:text-slate-800 flex gap-2 duration-300'>
           <span><FaWhatsapp size={20} /></span>Whats App </a>
           <a href="https://m.me/198137493375467" rel='noreferrer' target='_blank' class=' hover:text-slate-800 flex gap-2 duration-300'>
           <span><FaFacebookMessenger size={20} /></span>Messanger
       </a>
       <a href="tel:+8801719375526" class=' hover:text-slate-800 flex gap-2 duration-300'>
       <span><FaPhone size={20} /></span>+8801719375526
   </a>
           </div>
           </div>
                `,
            icon: "question"
        });
    }
    return (
        <>
            {
                <div className="card shadow-lg pb-12 rounded-xl text-center hover:shadow-xl duration-300" id='mini'>
                    <div className="card-head p-7 rounded-t-xl rounded-b-[40px] shadow-xl ">
                        <div className='text-white'>
                            <span className="type text-xl uppercase">{cardData.type}</span>
                            <h2 className='text-4xl font-semibold my-4'>{cardData.price}</h2>
                            <span className='md:text-lg'>{cardData?.condition}</span>
                        </div>
                    </div>
                    <div className="card-body text-center p-8">
                        <h3 className='text-2xl font-semibold my-3 card-service-name'>{cardData.serviceName}</h3>
                        <p className='text-sm'>{cardData.description}</p>
                        <ul className='max-w-fit mx-auto space-y-4 mt-5'>
                            {
                                cardData.features.map((feature) => <li className='flex items-center gap-3' key={feature}><span className='text-lg'><BsFillCheckSquareFill className='text-primary' /></span><span>{feature}</span></li>)
                            }
                        </ul>
                    </div>
                    {cardData.action_link === "popup" ?
                        <button onClick={handlePopup} className='px-10 py-3 buyNowBtn bg-gradient-to-t from-primary to-secondary hover:bg-slate-400 rounded-lg shadow-lg mt-5 text-white'>Buy Now</button>
                        : <a href={cardData?.action_link} className='px-10 py-3 buyNowBtn bg-gradient-to-t from-primary to-secondary hover:bg-slate-400 rounded-lg shadow-lg mt-5 text-white'>Buy Now</a>
                    }
                </div >
            }
        </>

    )
}

export default PricingCard