import React from 'react';
import './Header.css';
import { useSelector, shallowEqual } from "react-redux";
import { Link } from "react-router-dom";
import { TitleState } from '../../store/ducks/title/types';

function Header() {
    const { title } = useSelector((state: { title: TitleState }) => ({
        title: state?.title?.data,
    }), shallowEqual);

    return (
        <header>
            <div>
                <section className="title">
                    <h1>{title}</h1>
                </section>
                <section className="central-links">
                    <nav>
                        <Link to="/">Quem eu sou</Link>
                        <Link to="/articles">Artigos</Link>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Header;