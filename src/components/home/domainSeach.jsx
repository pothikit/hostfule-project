import React, { useState } from 'react'
import data from '../../data.json'

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
    let DomainNameWithExtension = domainInput + select;

    return (
        <section className='py-20'>
            <div className="container mx-auto">
                <div className="domain bg-gradient-to-tr from-primary to-secondary rounded-lg">
                    <div className='p-20 px-40'>
                        <h2 className='text-center text-white mb-4'>Do Your Want Your Premium Domain?</h2>
                        <div className='search-bar flex flex-col'>
                            <form method="post" action="https://my.hostflu.com/cart.php?a=add&domain=register" className='bg-white flex justify-between items-center px-3 py-2 rounded-xl md:mx-52'>
                                <input type="text" defaultValue={DomainNameWithExtension} className='text-black hidden' name='query' />

                                <input type="text" placeholder='Type your domain adreaddress' className='p-4 flex-1 outline-none font-semibold' name="" id='domainName' required onChange={handleDoaminInput} />

                                <div className='px-2 space-x-3'>
                                    <select name="extension" id="extensionSelect" className='outline-0 text-lg px-4 text-gray-500 font-semibold cursor-pointer' onChange={handleSelect}>
                                        <option value="All" defaultValue>All</option>
                                        {alldomain.map((domain) => (
                                            <option key={domain.id} className='text-lg' value={domain.extension}>{domain.extension}</option>
                                        ))}
                                    </select>
                                    <input type="submit" value="SEARCH DOMAIN" className='cursor-pointer py-5 bg-primary rounded-xl text-white px-10' />
                                </div>
                            </form>
                            <div className="extensions mt-8">
                                <ul className='flex justify-center gap-5'>
                                    {
                                        extensions.map((exetension) => (
                                            <li key={exetension.id} className='text-lg font-semibold gap-4 items-start flex'><span>{exetension.extension}</span><span className='text-xs font-semibold text-white'>{exetension.price}</span></li>
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