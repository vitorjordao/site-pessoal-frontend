import React from 'react';
import './Main.css';
import Articles from './articles/Articles';
import Login from './login/Login';
import Admin from './admin/Admin';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './login/ProtectedRoute';

function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Articles} />
                <Route exact path="/articles" component={Articles} />
                <Route exact path="/login" component={Login} />
                <ProtectedRoute exact path="/admin" component={Admin} />
                <Route path="*" component={() => <></>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Main;