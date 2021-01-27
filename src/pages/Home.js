import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages/Home.css'

import logo from '../assets/images/platziconf-logo.svg';
import space from '../assets/images/space.svg'

function Home() {
    return (
        <div className="Home">
            <div className="Home__container container">
                <div className="Home_Start">
                    <img className="img-fluid" src={logo} alt="Logo"/>
                    <h1 className="Home__Title">Badge Management System</h1>
                    <Link to="/badges" className="btn btn-primary">Start</Link>
                </div>
                <div className="Home__Space">
                    <img className="Home__Space-img img-fluid" src={space} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home;