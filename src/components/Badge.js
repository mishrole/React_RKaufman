import React from 'react';

import confLogo from '../images/badge-header.svg';
import astronauts from '../images/astronauts.svg';

class Badge extends React.Component {
    render() {
        return <div>
                <div>
                    <img src={confLogo} alt="Logo de la conferencia" />
                </div>
                <div>
                    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
                    <h1>Mitchell <br /> Rodríguez</h1>
                </div>
                <div>
                    <p>Desarrollador Front-End en camino a Full-Stack</p>
                    <p>@mishrole</p>
                </div>

                <div>
                    <p>#PlantziConf</p>
                </div>
            </div> 
            
    }
}

export default Badge;