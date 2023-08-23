import React from 'react'
import { Collapse } from 'react-collapse'

function AccordionItem({ open, toggle, title, desc }) {
    return (
        <div className='py-3'>
            <div onClick={toggle} className='cursor-pointer'>
                <h2 className='text-xl font-medium pb-3 border-b border-gray-400 cursor-pointer'>{title}</h2>
            </div>
            <Collapse isOpened={open} className={`mt-3 p-1`}>{desc}</Collapse>
        </div>
    )
}

export default AccordionItem