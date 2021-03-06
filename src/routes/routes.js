import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

//Paginas
import Home from '../components/pages/index'
import Adicionar from '../components/pages/adicionar'
import Editar from '../components/pages/editar'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/adicionar" component={ Adicionar } />
            <Route exact path="/editar/:id" component={ Editar } />
        </Switch>
    </BrowserRouter>
)

export default Routes