import url from '../../../url-base';
import { auth } from '../login/LoginRequest';

export let page = 0;

export interface Articles {
    url: string;
    name: string;
    imgDescription: string;
    description: string;
    image: string;
}

async function Get(type: string): Promise<[Articles]> {
    const response = await fetch(`${url}portifolio/articles?page=${page}&type=${type}`, { mode: 'no-cors' });
    page += 1;
    return response?.json();
}

async function Set(article: Articles): Promise<boolean> {
    const response = await fetch(`${url}portifolio/article`,
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
    }else if(response.status) {
        alert("Ocorreu um erro");
    }

    return response.status === 202;
}

export { Get, Set };