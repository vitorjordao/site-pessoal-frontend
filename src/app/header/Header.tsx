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
                            <Route exact path="/articles" component={() => <h1>Artigos</h1>} />
                            <Route exact path="/login" component={() => <h1>Login</h1>} />
                            <Route path="*" component={() => <h1>Página não encontrada</h1>} />
                        </Switch>
                    </BrowserRouter>
                </section>
                <section className="central-links">
                    <nav>
                        <ul>
                            <a href="/"><li>Quem eu sou</li></a>
                            <a href="/"><li>Portifólio</li></a>
                            <a href="/articles"><li>Artigos</li></a>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Header;