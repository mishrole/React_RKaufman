import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badge
    firstName="Mitchell"
    lastName="Rodríguez"
    avatarUrl="https://avatars.githubusercontent.com/u/25912465?s=460&u=bd07abdf80ad067024ad07500a8ff2109cb186b5&v=4"
    jobTitle="Front-End Developer"
    twitter="mishrole"/>
    , container);
