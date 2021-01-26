// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// const name = 'Mitch';

// // Para usar JSX es requisito importar React
// // JSX Es mucho más legible y expresivo

// // Si pasamos {null} {undefined} no se presenta nada
// const jsx = <h1>Hello, I'm {name}</h1>;

// const element = React.createElement('h1', {}, `Hola, soy ${name}`);

const jsx = <div>
    <h1>Hola, soy Mitch</h1>
    <p>Soy un desarrollador Front-End</p>
</div>

/* Versus React.createElement
const element = React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'Hola, soy Mitch'),
    React.createContext('p', {}, 'Soy un desarrollador Front-End')
);
*/

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
