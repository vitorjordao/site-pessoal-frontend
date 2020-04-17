import React, { useState } from 'react';
import { Delete, GetAll, Article as TypeArticles } from '../../../articles/ArticlesRequest';
import './List.css';
import { useHistory } from "react-router-dom";
import { setArticle } from '../update/Update';

function List() {
  const history = useHistory();
  const [articles, setArticles] = useState<TypeArticles[]>();

  (async () => {
    if (!articles) {
      const response = await GetAll();
      setArticles(response);
    }
  })();

  async function del(url: string) {
    if (await Delete(url)) {
      const response = await GetAll();
      setArticles(response);
    }
  }

  function edit(article: TypeArticles) {
    setArticle(article);
    history.push('/admin/article/update');
  }

  function goTo(url: string) {
    history.push(`/article/${url}`);
  }

  return (
    <main className="articles">
      <button onClick={() => history.goBack()}>Voltar</button>
      <section className="display">
        {articles?.map((article) =>
          <article className="display__article" key={article.url}>
            <h2>{article?.name}</h2>
            <figure style={{maxHeight: "80%"}}>
              <img srcSet={`${article?.image}`} src={`/images/blog.png`} alt={article?.imgDescription} />
              <figcaption>{article?.description}</figcaption>
            </figure>
            <button onClick={() => edit(article)}>Editing</button>
            <button onClick={() => del(article.url)}>Delete</button>
            <button onClick={() => goTo(article.url)}>View</button>
          </article>
        )}

      </section>
    </main>
  );
}

export default List;
