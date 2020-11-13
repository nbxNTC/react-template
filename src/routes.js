import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Forms from './views/Forms'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/forms" component={Forms} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes