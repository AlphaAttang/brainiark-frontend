import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
    const [showScrollTop, setScrollTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.screenY > 300) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        })

    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='scroll-top'>
            {showScrollTop && <p onClick={scrollTop}>To the up</p>}
        </div>
    )
}

export default ScrollToTop