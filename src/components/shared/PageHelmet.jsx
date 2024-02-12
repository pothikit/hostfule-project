import React from 'react'
import { Helmet } from 'react-helmet-async'

const PageHelmet = ({ pageTitle }) => {
    return (
        <Helmet>
            <title>{pageTitle} || Hostflu </title>
        </Helmet>
    )
}

export default PageHelmet