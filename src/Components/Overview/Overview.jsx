import React from 'react'
import './Overview.css'
import dashboard from '../Assets/dashboard.webp'

const Overview = () => {
    return (
        <div className="overview-container" id='overview'>
            <div className='overview' >
                <div className='overview-name'>
                    <h1>Brainiark360 Software</h1>
                </div>
                <img src={dashboard} alt="" />
            </div>
        </div>
    )
}

export default Overview