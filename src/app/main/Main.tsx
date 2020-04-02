import React from 'react';
import './Main.css';
import { useDispatch } from "react-redux";
import { selectTitle } from '../../store/ducks/title/actions';
import Articles from './articles/Articles';
import Article from './articles/article/Article';
import Login from './login/Login';
import About from './about/About';
import Admin from './admin/Admin';
import Create from './admin/article/create/Create';
import Update from './admin/article/update/Update';
import List from './admin/article/list/List';
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
            <ProtectedRoute exact path="/admin/article/create" component={
                (props: any) => <Prepare title="Article create" component={<Create />} params={props} />
            } />
            <ProtectedRoute exact path="/admin/article/list" component={
                (props: any) => <Prepare title="Article list" component={<List />} params={props} />
            } />
            <ProtectedRoute exact path="/admin/article/update" component={
                (props: any) => <Prepare title="Article update" component={<Update />} params={props} />
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