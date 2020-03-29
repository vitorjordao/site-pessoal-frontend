import baseUrl from '../../../../url-base';
import { Article } from '../ArticlesRequest';

async function Get(url: string): Promise<Article | null> {
    const response = await fetch(`${baseUrl}article?url=${url}`);
    return response.status === 200?
        response?.json():
        null;
}

export { Get };