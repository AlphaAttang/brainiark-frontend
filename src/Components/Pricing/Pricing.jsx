import React, { useState } from 'react'
import './Pricing.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MonthlyBilling from '../Billing/MonthlyBilling';
import YearlyBilling from '../Billing/YearlyBilling';

const Pricing = () => {
    const [menu, setMenu] = useState("monthly_billing");
    return (
        <BrowserRouter>
            <div className="pricing-container section" id='pricing'>
                <div className='pricing' >
                    <div className="pricing-head">
                        <h1>Pricing for <span>Everyone</span></h1>
                        <p>Affordable for every business that wants to grow.</p>
                    </div>
                    <div className='pricing-menu'>
                        <Link to='/'><button className={menu === "monthly_billing" ? 'active' : <></>} onClick={() => { setMenu("monthly_billing") }}>Bill Monthly</button></Link>
                        <Link to='/yearly_billing'><button className={menu === "yearly_billing" ? 'active' : <></>} onClick={() => { setMenu("yearly_billing") }}>Bill Yearly <span>-15%</span></button></Link>
                    </div>
                    <Routes>
                        <Route path='/' element={<MonthlyBilling />} />
                        <Route path='/yearly_billing' element={<YearlyBilling />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Pricing