import React from 'react';

import Navbar from '../components/Navbar';

function Layout(props) {
    // const children = props.children;
    return (
    <div>
        <Navbar/>
        {props.children}
    </div>
     
    )
}

export default Layout;