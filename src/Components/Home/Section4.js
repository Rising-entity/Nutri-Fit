import React from 'react'
import '../CSS/Section4.css'
import sec4img1 from '../images/basicpreve.png'
import sec4img2 from '../images/timesaving.png'
import sec4img3 from '../images/newsimg.png'

export default function Section4() {
    return (
        <div className='row Section4  '>

            <div className='col-md-3 bx'>
                <div >
                    <img className='s4img1 img-fluid' src={sec4img1} alt="" />

                </div>
                <div >
                    <h6>Unlock the Secrets: Discover the Nutritional Composition of Our Delightful Cuisine </h6>


                </div>
            </div>
            <div className='col-md-3 bx'>
                <div>
                    <img className='s4img2 img-fluid' src={sec4img2} alt="" />
                    <h6>More accuracy and Time Saving</h6>
                </div>
            </div>

            <div className='col-md-3 bx'>
                <div>
                    <img className='s4img3 img-fluid' src={sec4img3} alt="" />
                    <h6>Stay Informed and Thrive: Delve into the Latest Health News and Insights</h6>

                </div>
            </div>
        </div>
    )
}
