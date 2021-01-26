import React from 'react';

import '../assets/styles/pages/BadgeNew.css';

import header from '../assets/images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="img-fluid"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName="Mitchell" lastName="Rodríguez" avatarUrl="https://avatars.githubusercontent.com/u/25912465?s=460&u=bd07abdf80ad067024ad07500a8ff2109cb186b5&v=4" twitter="mishrole" jobTitle="Front-End Developer"/>
                        </div>
                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;