import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo_image.png'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'


const Navbar = () => {
    return (
        <BrowserRouter>
            <div className="nav">
                <div className="nav-container">
                    <div className="navbar">
                        <div className="nav-brand">
                            <Link smooth to='#home'>
                                <figure className="nav-logo">
                                    <img src={logo} alt="Brainiark Logo" />
                                </figure>
                            </Link>
                        </div>
                        <ul className="nav-menu">
                            <li><Link smooth to='#overview'>Overview</Link></li>
                            <li><Link smooth to='#features'>Features</Link></li>
                            <li><Link smooth to='#testimonials'>Testimonials</Link></li>
                            <li><Link smooth to='#pricing'>Pricing</Link></li>
                        </ul>
                        <div className="nav-login">
                            <button>LOG IN</button>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Navbar

