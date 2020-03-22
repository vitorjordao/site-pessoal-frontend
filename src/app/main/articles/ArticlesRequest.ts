export let page = 0;

export interface Articles {
    url: string;
    name: string;
    imgDescription: string;
    description: string;
    image: string;
}

async function Get(type: string): Promise<[Articles]> {
    const response = await fetch(`https://vitorjordao.herokuapp.com/portifolio/articles?page=${page}&type=${type}`, { mode: 'no-cors' });
    page += 1;
    return response?.json();
}

export { Get };