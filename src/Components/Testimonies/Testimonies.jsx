import React from 'react'
import './Testimonies.css'
import { FaQuoteRight } from "react-icons/fa";

const Testimonies = (props) => {
    return (
        <div className='testimonies'>
            <figure>
                <img src={props.image} alt="" />
            </figure>
            <div className="testimonies-content">
                <div className="testimonies-testimony">
                    <p>"{props.testimony}"</p>
                </div>
                <div className="testimonies-footer">
                    <div className="testimonies-info">
                        <p>{props.name}</p>
                        <p>{props.profession}</p>
                    </div>
                    <FaQuoteRight className='commas' />
                </div>
            </div>
        </div>
    )
}

export default Testimonies