import React from 'react'
import '../CSS/Section2.css';
import API from '../images/Application programming interface.gif'

export default function Section2() {
    return (
        <>
            <div className="Section2 container my-5 ">
                <div className="row my-2">
                    <div className="col-md-7 mb-3 mb-sm-0 order-2">
                        {/* <div className="card"> */}
                        <div className="box1 ">
                            <h1>Accurate and reliable information</h1>
                            <p>
                                At NUTRI-FIT, we understand the importance of providing our users with trustworthy data, which is why we rely on authenticated APIs to gather information from reputable sources. Our commitment to excellence drives us to integrate top-tier APIs like the news API, recipe API, and nutrition API, ensuring that the information we deliver is always up-to-date and accurate.
                            </p>

                        </div>
                        {/* </div> */}
                    </div>
                    <div className="col-md-5 order-1">
                        {/* <div className="card"> */}
                        <div className="border2">
                            <img className="img-fluid" src={API} alt="" />

                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}
