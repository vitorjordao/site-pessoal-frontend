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
    publishable: boolean;
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

async function Delete(id: string) {
    const response = await fetch(`${url}article?url=${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: auth,
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

async function Edit(article: Article) {

    const response = await fetch(`${url}article`, {
        body: JSON.stringify(article),
        method: "PUT",
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

async function GetAll(): Promise<[Article]> {
    const response = await fetch(`${url}articles/all`, {
        headers: {
            Authorization: auth,
        }
    });

    if (response.status === 403) {
        alert("Deslogou");
    } else if (response.status === 500) {
        alert("Ocorreu um erro");
    }

    return response?.json();
}

export { Delete, Edit, GetAll, Get, Set, changePage };