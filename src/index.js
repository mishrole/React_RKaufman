import React from 'react';
import ReactDOM from 'react-dom';

import './global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Badge from './components/Badge'

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);
