import React from 'react';

import Navbar from '../components/Navbar';

function Layout(props) {
    // const children = props.children;
    return (
        // Debemos retornar un solo elemento, por eso lo encapsulamos
        // Ya sea en un div o un Fragment
        <React.Fragment>
            <Navbar/>
            {props.children}
        </React.Fragment>
     
    )
}

export default Layout;