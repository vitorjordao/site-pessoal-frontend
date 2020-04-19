import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Article.css";
import { useDispatch } from "react-redux";
import { selectTitle } from "../../../../store/ducks/title/actions";
import { Article as TypeArticle } from "../ArticlesRequest";
import { Get } from "./ArticleRequest";
import { DiscussionEmbed } from "disqus-react";

function Article(props: any) {
  const dispatch = useDispatch();

  const [article, setArticle] = useState<TypeArticle>();

  dispatch(selectTitle({ data: article?.name || "..." }));

  (async () => {
    if (!article) {
      const theArticle = await Get(props?.match?.params?.url || "");
      if (theArticle) {
        let metaList: any = document.getElementsByTagName("meta");
        metaList.description.content = theArticle.description;
        setArticle(theArticle);
      } else dispatch(selectTitle({ data: "Artigo não encontrado" }));
    }
  })();

  if (!article) return <></>;

  return (
    <main className="article">
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
          <span>
            Tags:
            <span className="tags">
              {article?.tags.reduce((tag) => tag + ", ")}
            </span>
          </span>
        </div>
      </section>
      <section className="article-main">
        <blockquote className="description">{article?.description}</blockquote>
        <figure className="article-main__image">
          <img
            srcSet={`${article?.image}`}
            src={`/images/blog.png`}
            alt={article?.imgDescription}
          />
          <figcaption>{article?.imgDescription}</figcaption>
        </figure>
        <article className="article-text">
          <ReactMarkdown escapeHtml={false} source={article?.article} />
        </article>
      </section>
      <section className="article-comments">
        <DiscussionEmbed
          shortname="vitorjordao"
          config={{
            url: "https://www.vitorjordao.dev/#" + article.url,
            identifier: article.url,
            title: article.name,
          }}
        />
      </section>
      {/**
             <script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "TechArticle",
  "@id": "Vitor Jordão",
  "author": "Vitor Jordão",
  "datePublished": "2020-04-15",
  "dateModified": "2020-04-15",
  "headline": "bla",
  "image": "https://i.ytimg.com/vi/aONytVVREd8/maxresdefault.jpg",
  "publisher": {
  	"name": "Vitor Jordão",
    "@type": "Organization",
    "logo": {
      "@type": "imageObject",
      "url": "http://example.com/images/logo.png"
    }
  },
  "mainEntityOfPage": "True"
}
</script>
             */}
    </main>
  );
}

export default Article;
