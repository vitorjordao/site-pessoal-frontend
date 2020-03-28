import React from 'react';
import './Admin.css';
import { Set } from '../articles/ArticlesRequest';

function Admin() {
    async function cadastra(event: any) {
        event.preventDefault();
        const form = event.target;

        let post: any = {};
        for (var i = 0; i < form.length - 1; i++) {
            const target: any = event.target[i];
            post[target.id] = target.value;
        }
        post.tags = post.tags.split(";");

        if (await Set(post)) {
            form.reset();
        }
    }
    return (
        <main className="admin">
            <form onSubmit={cadastra} className="create-article">
                <div className="field">
                    <label htmlFor="url">Url</label>
                    <input name="url" type="text" id="url"></input>
                </div>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" id="name"></input>
                </div>
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <input name="description" type="text" id="description"></input>
                </div>
                <div className="field">
                    <label htmlFor="image">Image</label>
                    <input name="image" type="text" id="image"></input>
                </div>
                <div className="field">
                    <label htmlFor="imgDescription">Image description</label>
                    <input name="imgDescription" type="text" id="imgDescription"></input>
                </div>
                <div className="field">
                    <label htmlFor="article">Article</label>
                    <textarea name="article" id="article"></textarea>
                </div>
                <div className="field">
                    <label htmlFor="tags">Tags - (Separa por ";")</label>
                    <input name="tags" type="text" id="tags"></input>
                </div>
                <div className="field">
                    <label htmlFor="type">Type</label>
                    <input name="type" type="text" id="type"></input>
                </div>
                <div className="field">
                    <label htmlFor="publicationDate">Publication date</label>
                    <input name="publicationDate" type="datetime-local" id="publicationDate" defaultValue="2020-06-12T19:30"></input>
                </div>
                <div className="field">
                    <label htmlFor="language">Language</label>
                    <input name="language" type="text" id="language"></input>
                </div>
                <button>Invite</button>
            </form>
        </main>
    );
}

export default Admin;