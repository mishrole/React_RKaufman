import React from 'react';
import ReactDOM from 'react-dom';

const element = (
    <div>
        <h1>Hola, soy Mitch</h1>
        <p>Soy desarrollador Front-End</p>
    </div>
);

const container = document.getElementById('app');

ReactDOM.render(element, container);
