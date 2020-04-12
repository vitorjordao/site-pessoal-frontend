import React, { useState } from 'react';
import './Articles.css';
import { Get as ArticlesGet, Article as TypeArticles } from './ArticlesRequest';
import { useHistory } from "react-router-dom";

function Articles() {

    const [allArticles, setAllArticles] = useState<TypeArticles[]>();
    const [articles, setArticles] = useState<TypeArticles[]>();
    const history = useHistory();

    (async () => {
        if (!articles) {
            const response = await ArticlesGet("ARTICLES");
            setArticles(response);
            setAllArticles(response);
        }
    })();

    function goTo(url: string) {
        history.push(`/article/${url}`);
    }

    function loadMore() {
        console.log("Precisa implementar!");
    }

    // TODO - Não está corretamente implementado
    function find(event: any) {
        event.preventDefault();
        const value = event.currentTarget.form[0].value;

        //eu não desejo que essa página seja invisível, até por que o código é open source
        if (value === "meulogin") {
            history.push("/login");
            return;
        }

        if (allArticles) {
            const filtered = allArticles.filter(article => article.name.includes(value));
            setArticles(filtered);
        }
    }

    return (
        <main className="articles">
            <section className="search">
                <form>
                    <input type="text" placeholder="Pesquisar" className="text_find" /><button type="submit" className="button_find" onClick={find}><i className="fas fa-search"></i></button>
                </form>
            </section>
            <section className="display">
                {articles?.map((article) =>
                    <article className="display__article" key={article.url} onClick={() => goTo(article.url)}>
                        <h2>{article?.name}</h2>
                        <figure>
                            <img srcSet={`${article?.image}`} src={`/images/blog.png`} alt={article?.imgDescription} />
                            <figcaption>{article?.description}</figcaption>
                        </figure>
                        <div />
                    </article>
                )}

            </section>
            <div><button onClick={loadMore} className="load-articles">Carregar mais</button></div>
        </main>
    );
}

export default Articles;