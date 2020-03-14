import React, { useState } from 'react';
import './Articles.css';
import { Get as ArticlesGet, Articles as TypeArticles } from './ArticlesRequest';

function Articles() {

    const [articles, setArticles] = useState<[TypeArticles]>();

    (async () => {
        const response = await ArticlesGet("PORTIFOLIO");
        setArticles(response);
    })();

    function goTo(url: string) {

    }

    function loadMore() {

    }

    return (
        <main className="articles">
            <section className="search">
                <form>
                    <input type="text" placeholder="Pesquisar" className="text_find" /><button type="submit" className="button_find"><i className="fas fa-search"></i></button>
                </form>
            </section>
            <section className="display">
                {articles?.map((article) =>
                    <article onClick={() => goTo(article.url)}>
                        <h2>${article.name}</h2>
                        <figure>
                            <img src={`../static/imagens/${article.image}`} alt={article.imgDescription} />
                            <figcaption>${article.imgDescription}</figcaption>
                        </figure>
                        <p>${article.description}</p>
                    </article>
                )}

            </section>
            <div><button onClick={loadMore} className="load-articles">Carregar mais</button></div>
        </main>
    );
}

export default Articles;