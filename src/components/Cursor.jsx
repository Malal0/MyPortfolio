import React from 'react'
import './cursor.css'

function Cursor() {
    const cursor = document.querySelector('.Cursor');

    addEventListener('mousemove', e => {
        // console.log(e.clientX, e.clientY);
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
        // console.log(cursor.clientLeft, cursor.clientTop);
    })

    return (
        <div className="Cursor">
        </div>
    )
}

export default Cursor