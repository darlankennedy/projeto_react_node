import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './pages/logon';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';

import Profile from './pages/Profile'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile} />
            <Route path="/NewIncident" component={NewIncident} />

        </Switch>
    </BrowserRouter>
)

