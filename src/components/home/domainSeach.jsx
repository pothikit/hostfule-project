import React, { useState } from 'react'
import data from '../../data.json'
import { BiSolidDownArrow } from "react-icons/bi"
function DomainSeach() {
    let alldomain = data.domainExtention;
    let extensions = data.domainExtention.slice(0, 6);
    const [domainInput, setDomainInput] = useState("");
    const [isSelectDisable, setIsSelectDisable] = useState(false)
    // const [extension, setExtansion] = useState(false)
    const [select, setSelect] = useState("");
    const handleDoaminInput = (e) => {
        e.preventDefault();
        if (e.target.value.includes(".")) {
            setIsSelectDisable(true)
        }
        else setIsSelectDisable(false)
        setDomainInput(e.target.value);
    }
    const handleSelect = (e) => {
        e.preventDefault();
        setSelect(e.target.value)
    }
    let DomainNameWithExtension = domainInput + select;
    // handlesubmit 
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (DomainNameWithExtension.indexOf(".") === -1) {
    //         setExtansion(true)
    //     }
    //     else {
    //         setExtansion(false)
    //     }
    // }
    return (
        <section className='py-20 bg-slate-200 md:bg-none mb-20'>
            <div className="container mx-auto">
                <div className="domain md:bg-slate-200 rounded-lg px-1">
                    <div className='md:py-20 xl:max-w-[80%] mx-auto'>
                        <h2 className='text-center mb-4'>Do Your Want Your Premium Domain?</h2>
                        <div className='search-bar flex flex-col px-3 sm:px-0'>
                            <form method="post" action="https://my.hostflu.com/cart.php?a=add&domain=register" className='bg-white flex justify-between items-center pl-1 md:pl-3 md:py-2 rounded-xl mx-0 lg:mx-52'>
                                <input type="text" defaultValue={DomainNameWithExtension} className='text-black hidden' name='query' />
                                <input type="text" placeholder='Type your domain adreaddress' className='p-4 sm:flex-1 w-1/2 sm:w-auto text-sm sm:text-base outline-none font-semibold focus:border rounded-lg' name="" id='domainName' required onChange={handleDoaminInput} />
                                <div className='px-2 space-x-3 flex items-center'>
                                    <div className='cursor-pointer flex items-center mr-4'>
                                        <select name="extension" id="extensionSelect" className='outline-0 md:text-lg px-2 md:px-5 text-gray-600 font-semibold cursor-pointer bg-transparent appearance-none' disabled={isSelectDisable} onChange={handleSelect}>
                                            <option value="All" defaultValue>All</option>
                                            {alldomain.map((domain) => (
                                                <option key={domain.id} className='text-lg' value={domain.extension}>{domain.extension}</option>
                                            ))}
                                        </select><span className='text-gray-400 cursor-pointer text-sm -ml-5 pointer-events-none'><BiSolidDownArrow /></span>
                                    </div>
                                    <input type="submit" value="SEARCH DOMAIN" className='cursor-pointer py-2 md:py-5 bg-slate-500 hover:bg-slate-700 border-transparent rounded-lg text-white px-2 md:px-10 text-sm md:text-base' />
                                </div>
                            </form>
                            {
                                // extension ? <span className='text-xl text-black text-center mt-10'>You should provide a valid extansion</span> : <span></span>
                            }
                            <div className="extensions mt-8 md:max-w-[80%] mx-auto">
                                <ul className='grid grid-cols-3 sm:grid-cols-6 gap-4'>
                                    {
                                        extensions.map((exetension) => (
                                            <li key={exetension.id} className='text-lg font-semibold gap-4 items-start flex justify-center'><span>{exetension.extension}</span><span className='text-xs font-semibold'>{exetension.price}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default DomainSeach