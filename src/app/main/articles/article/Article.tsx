import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './Article.css';
import { useDispatch } from "react-redux";
import { selectTitle } from '../../../../store/ducks/title/actions';
import { Article as TypeArticle } from '../ArticlesRequest';
import { Get } from './ArticleRequest';

function Article(props: any) {
    const dispatch = useDispatch();

    const [article, setArticle] = useState<TypeArticle>();

    dispatch(selectTitle({ data: article?.name || "..." }));

    (async () => {
        if (!article) {
            const article = await Get(props?.match?.params?.url || "");
            if (article)
                setArticle(article);
            else
                dispatch(selectTitle({ data: "Artigo não encontrado" }));
        }
    })();

    if (!article)
        return <></>;

    return (
        <main className="article">
            <meta name="author" content="Vitor Jordão" />
            <meta name="description" content={article?.description} />
            <section className="details">
                <div className="datails__separator">
                    <time dateTime={article?.publicationDate}>
                        Data de publicação - {article?.publicationDate}
                    </time>
                    <span className="author">Feito por - Vitor Jordão</span>
                </div>
                <div className="datails__separator">
                    <span className="language">{article?.language}</span>
                    <span className="type">{article?.type}</span>
                    <span>Tags: <span className="tags">{article?.tags.reduce(tag => tag + " ")}</span></span>
                </div>
            </section>
            <section className="article-main">
                <blockquote className="description">{article?.description}</blockquote>
                <figure className="article-main__image">
                    <img srcSet={`${article?.image}`} src={`/images/blog.png`} alt={article?.imgDescription} />
                    <figcaption>{article?.imgDescription}</figcaption>
                </figure>
                <article className="article-text">
                    <ReactMarkdown escapeHtml={false} source={article?.article} />
                </article>
            </section>
        </main>
    );
}

export default Article;