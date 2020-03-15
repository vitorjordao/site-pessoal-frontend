import React from 'react';
import './Header.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Header() {
    return (
        <header>
            <div>
                <section className="title">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={() => <h1>Artigos</h1>} />
                            <Route exact path="/site-pessoal-frontend/" component={() => <h1>Artigos</h1>} />
                            <Route exact path="/site-pessoal-frontend/articles" component={() => <h1>Artigos</h1>} />
                            <Route exact path="/site-pessoal-frontend/login" component={() => <h1>Login</h1>} />
                            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
                        </Switch>
                    </BrowserRouter>
                </section>
                <section className="central-links">
                    <nav>
                        <ul>
                            <a href="/site-pessoal-frontend/"><li>Quem eu sou</li></a>
                            <a href="/site-pessoal-frontend/"><li>Portifólio</li></a>
                            <a href="/site-pessoal-frontend/articles"><li>Artigos</li></a>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Header;