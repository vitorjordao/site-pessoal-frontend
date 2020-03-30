import React from 'react';
import './Main.css';
import { useDispatch } from "react-redux";
import { selectTitle } from '../../store/ducks/title/actions';
import Articles from './articles/Articles';
import Article from './articles/article/Article';
import Login from './login/Login';
import Admin from './admin/Admin';
import About from './about/About';
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './login/ProtectedRoute';

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={
                (props: any) => <Prepare title="Sobre mim" component={<About />} params={props} />
            } />
            <Route exact path="/articles" component={
                (props: any) => <Prepare title="Artigos" component={<Articles />} params={props} />
            } />
            <Route exact path="/article/:url" component={
                (props: any) => <Prepare title="" component={<Article />} params={props} />
            } />
            <Route exact path="/login" component={
                (props: any) => <Prepare title="Login" component={<Login />} params={props} />
            } />
            <ProtectedRoute exact path="/admin" component={
                (props: any) => <Prepare title="Admin" component={<Admin />} params={props} />
            } />
            <Route path="*" component={
                (props: any) => <Prepare title="Not Found" component={<></>} params={props} />
            } />
        </Switch>
    );
}

function Prepare(props: { title: string, component: JSX.Element, params: any }) {
    const dispatch = useDispatch();
    const Component = props.component;
    if (props.title)
        dispatch(selectTitle({ data: props.title }));

    return (
        { ...Component, props: props.params }
    );
}

export default Main;