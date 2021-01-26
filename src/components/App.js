import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App() {
    return (
    <BrowserRouter>
        <Switch>
        // Si no le especificamos que es exacta
        // Asume que buscas el primero porque ambos empiezan igual
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        </Switch>
        
    </BrowserRouter>
    )
}

export default App;