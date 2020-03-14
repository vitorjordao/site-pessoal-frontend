import React from 'react';
import './Main.css';
import Articles from './articles/Articles'
import Login from './login/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route exact path="/articles" component={Articles} />
                <Route exact path="/login" component={Login} />
                {/* <ProtectedRoute exact path="/flux-control-front/" component={LandingPage} /> */}
                <Route path="*" component={() => <></>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;