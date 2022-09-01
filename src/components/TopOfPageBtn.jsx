import React from 'react'
import ToTopIcon from '../assets/images/toppagebtn.svg'


function TopOfPageBtn({ handleMouseEnter, handleMouseLeave }) {
    return (
        <div className='BackToTop' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <a href='#'><img src={ToTopIcon} className="logo" alt="Top of page" /></a>
        </div>
    )
}

export default TopOfPageBtn