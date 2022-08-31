import React from 'react'
import './cursor.css'

function Cursor() {
    const cursor = document.querySelector('.Cursor');

    addEventListener('mousemove', e => {
        cursor.style.top = `${e.pageY - cursor.clientHeight / 2}px`
        cursor.style.left = `${e.pageX - cursor.clientWidth / 2}px`

        console.log(e.pageX, e.pageY);
    })

    return (
        <div className="Cursor">
        </div>
    )
}

export default Cursor