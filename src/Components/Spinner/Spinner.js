import React from 'react'
import spinner from '../images/Eclipse-1s-200px (1).gif'
import "../Spinner/Spinner.css"

export default function Spinner() {
    return (
        <>
            <div className='Spinner'>
                <img src={spinner} alt="" />
            </div>

        </>
    )
}
