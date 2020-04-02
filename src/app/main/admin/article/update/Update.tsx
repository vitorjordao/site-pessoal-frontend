import React from 'react';
import './Update.css';
import { Edit, Article as TypeArticles } from '../../../articles/ArticlesRequest';
import { useHistory } from "react-router-dom";

let article: TypeArticles;

export function setArticle(newArticle: TypeArticles) {
  article = newArticle;
}

function Update() {
  const history = useHistory();

  async function edit(event: any) {
    event.preventDefault();
    const form = event.target;

    let post: any = {};
    for (var i = 0; i < form.length - 1; i++) {
      const target: any = event.target[i];

      if (target.type === "checkbox") {
        post[target.id] = target.checked;
      } else
        post[target.id] = target.value;
    }
    post.tags = post.tags.split(";");

    if (await Edit(post)) {
      history.goBack();
    }
  }

  return (
    <main className="create">
      <button onClick={() => history.goBack()}>Voltar</button>
      <form onSubmit={edit} className="create-article">
        <div className="field">
          <label htmlFor="url">Url</label>
          <input disabled name="url" type="text" id="url" defaultValue={article.url} />
        </div>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input name="name" type="text" id="name" defaultValue={article.name} />
        </div>
        <div className="field">
          <label htmlFor="description">Description</label>
          <input name="description" type="text" id="description" defaultValue={article.description} />
        </div>
        <div className="field">
          <label htmlFor="image">Image</label>
          <input name="image" type="text" id="image" defaultValue={article.image} />
        </div>
        <div className="field">
          <label htmlFor="imgDescription">Image description</label>
          <input name="imgDescription" type="text" id="imgDescription" defaultValue={article.imgDescription} />
        </div>
        <div className="field">
          <label htmlFor="article">Article</label>
          <textarea name="article" id="article" defaultValue={article.article} />
        </div>
        <div className="field">
          <label htmlFor="tags">Tags - (Separa por ";")</label>
          <input name="tags" type="text" id="tags" defaultValue={article.tags} />
        </div>
        <div className="field">
          <label htmlFor="type">Type</label>
          <input name="type" type="text" id="type" defaultValue={article.type} />
        </div>
        <div>
          <input name="publishable" type="checkbox" id="publishable" defaultChecked={article.publishable} />
          <label htmlFor="publishable">É publicável?</label>
        </div>
        <div className="field">
          <label htmlFor="publicationDate">Publication date</label>
          <input name="publicationDate" type="datetime-local" id="publicationDate" defaultValue={article.publicationDate} />
        </div>
        <div className="field">
          <label htmlFor="language">Language</label>
          <input name="language" type="text" id="language" defaultValue={article.language} />
        </div>
        <button>Invite</button>
      </form>
    </main>
  );
}

export default Update;
