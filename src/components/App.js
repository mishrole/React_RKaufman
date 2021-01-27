import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';

function App() {
    return (
    <BrowserRouter>
        <Layout>
            <Switch>
                // Si no le especificamos que es exacta
                // Asume que buscas el primero porque ambos empiezan igual
                <Route exact path="/" component={Home} />
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
    )
}

export default App;