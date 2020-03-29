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
                        <ul>
                            <Link to="/"><li>Quem eu sou</li></Link>
                            <Link to="/"><li>Portifólio</li></Link>
                            <Link to="/articles"><li>Artigos</li></Link>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    );
}

export default Header;