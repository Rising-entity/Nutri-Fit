import React from 'react'
import '../CSS/Section1.css';
import intro from '../images/intro.png'

export default function Section1() {
    return (
        <>
            <div className="Section1 container my-5 ">
                <div className="row my-2">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        {/* <div className="card"> */}
                        <div className="box1 ">
                            <h2><span>NUTRI-FIT</span> Empowering Your Health Journey</h2>
                            <p>Introducing NUTRI-FIT: Your Ultimate Guide to Nutritional Content and Health News. At NUTRI-FIT, we believe that proper nutrition is the foundation of a healthy lifestyle. We are dedicated to providing you with comprehensive resources that empower you to make informed choices about your diet and overall wellbeing.</p>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="col-sm-6">
                        {/* <div className="card"> */}
                        <div className="border2">
                            <img className="img-fluid" src={intro} alt="" />
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>


        </>
    )
}
