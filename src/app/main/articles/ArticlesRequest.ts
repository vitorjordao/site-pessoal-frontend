export let page = 0;

export interface Articles {
    url: string;
    name: string;
    imgDescription: string;
    description: string;
    image: string;
}

async function Get(type: string): Promise<[Articles]> {
    const response = await fetch(`#my-url/articles?page=${page}&type=${type}`);
    page += 1;
    return await response?.json();
}

export { Get };