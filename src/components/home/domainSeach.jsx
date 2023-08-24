import React, { useState } from 'react'
import data from '../../data.json'
import { BiSolidDownArrow } from "react-icons/bi"

function DomainSeach() {
    let alldomain = data.domainExtention;
    let extensions = data.domainExtention.slice(0, 6);
    const [domainInput, setDomainInput] = useState("")
    const [select, setSelect] = useState("")
    const handleDoaminInput = (e) => {
        e.preventDefault();
        setDomainInput(e.target.value)
    }
    const handleSelect = (e) => {
        e.preventDefault(); setSelect(e.target.value)
    }
    // console.log(typeof domainInput)
    let DomainNameWithExtension
    if (domainInput.includes(".")) {
        alert("You Should Select Domain Extension")
    } else {
        DomainNameWithExtension = domainInput + select;
    }

    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="domain bg-gradient-to-tr from-primary to-secondary rounded-lg">
                    <div className='py-20 xl:max-w-[80%] mx-auto'>
                        <h2 className='text-center text-white mb-4'>Do Your Want Your Premium Domain?</h2>
                        <div className='search-bar flex flex-col'>
                            <form method="post" action="https://my.hostflu.com/cart.php?a=add&domain=register" className='bg-white flex lg:justify-between items-center pl-3 py-2 rounded-xl mx-0 lg:mx-52'>
                                <input type="text" defaultValue={DomainNameWithExtension} className='text-black hidden' name='query' />
                                <input type="text" placeholder='Type your domain adreaddress' className='p-4 flex-1 outline-none font-semibold focus:border rounded-lg' name="" id='domainName' required onChange={handleDoaminInput} />

                                <div className='px-2 space-x-3 flex items-center'>
                                    <div className='cursor-pointer flex items-center mr-4'>
                                        <select name="extension" id="extensionSelect" className='outline-0 text-lg px-5 text-gray-500 font-semibold cursor-pointer bg-transparent appearance-none' onChange={handleSelect}>
                                            <option value="All" defaultValue>All</option>
                                            {alldomain.map((domain) => (
                                                <option key={domain.id} className='text-lg' value={domain.extension}>{domain.extension}</option>
                                            ))}
                                        </select><span className='text-gray-400 cursor-pointer text-sm -ml-5 pointer-events-none'><BiSolidDownArrow /></span>
                                    </div>
                                    <input type="submit" value="SEARCH DOMAIN" className='cursor-pointer py-5 bg-gradient-to-r from-primary to-secondary to-100% rounded-xl text-white px-10' />
                                </div>
                            </form>
                            <div className="extensions mt-8">
                                <ul className='grid grid-cols-3 md:grid-cols-6 gap-5'>
                                    {
                                        extensions.map((exetension) => (
                                            <li key={exetension.id} className='text-lg font-semibold gap-4 items-start flex justify-center'><span>{exetension.extension}</span><span className='text-xs font-semibold text-white'>{exetension.price}</span></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default DomainSeach