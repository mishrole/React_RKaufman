// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

// Para usar JSX es requisito importar React
// JSX Es mucho más legible y expresivo
const jsx = <h1>Hello, Platzi Badges!</h1>;

const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a Platzi');

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
