import url from '../../../url-base';

let auth = "";

interface Bearer {
    type: string;
    token: string;
}

async function Verify(login: string, password: string) {
    const response = await fetch(`${url}auth`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });

    if (response.ok) {
        const bearer: Bearer = await response.json();
        auth = bearer.type + " " + bearer.token;
    } else auth = "";

    return response.status;
}

export { Verify, auth };