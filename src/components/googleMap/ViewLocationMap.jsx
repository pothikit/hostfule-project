import React from 'react'

const ViewLocationMap = () => {
    return (
        <main>
            <section className='py-20 bg-slate-200'>
                <div className="container mx-auto">
                    <iframe title='hostflue' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3129126945873!2d90.4021576759498!3d24.750458249649387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f23290440cb%3A0xe8727d3558b38af6!2sFluresta!5e0!3m2!1sen!2sbd!4v1707905462476!5m2!1sen!2sbd" width="100%" height="600" style={{ border: 0, borderRadius: "20px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
            </section>
        </main>
    )
}

export default ViewLocationMap