import React from 'react'
import ToTopIcon from '../assets/images/toppagebtn.svg'


function TopOfPageBtn() {
    return (
        <div className='BackToTop'>
            <a href='#'><img src={ToTopIcon} className="logo" alt="Top of page" /></a>
        </div>
    )
}

export default TopOfPageBtn