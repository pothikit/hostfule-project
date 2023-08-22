import React from 'react'
import logo from "../../asstes/footer-logo.png"
import "./footer.css"

function Footer() {
    return (
        <footer className='pt-20'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-20 gap-32">
                    <div className="col-title">
                        <img src={logo} alt="Hostflu" width="200" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer