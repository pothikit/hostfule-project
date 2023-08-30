// import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        if (props) {
            let { top } = props;
            window.scrollTo(0, top)
        }
        else {
            window.scrollTo(0, 0)
        }
    }, [pathname, props])
    return null
}

export default ScrollToTop