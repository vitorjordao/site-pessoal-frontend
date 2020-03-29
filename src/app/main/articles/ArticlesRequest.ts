import url from '../../../url-base';
import { auth } from '../login/LoginRequest';

export let page = 0;

export interface Article {
    url: string;
    name: string;
    imgDescription: string;
    description: string;
    image: string;
    article: string;
    tags: string[];
    type: string;
    language: string;
    publicationDate: string;
}

function changePage(newPage: number) {
    page = newPage;
}

async function Get(type: string): Promise<[Article]> {
    const response = await fetch(`${url}articles?page=${page}&type=${type}`, {});
    return response?.json();
}

async function Set(article: Article): Promise<boolean> {
    const response = await fetch(`${url}article`,
        {
            body: JSON.stringify(article),
            method: "POST",
            headers: {
                Authorization: auth,
                'Content-Type': 'application/json',
            }
        }
    );

    if (response.status === 403) {
        alert("Deslogou");
    } else if (response.status === 500) {
        alert("Ocorreu um erro");
    }

    return response.status === 202;
}

export { Get, Set, changePage };