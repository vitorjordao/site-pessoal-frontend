async function Verify(login: string, password: string) {
    const response = await fetch(`https://vitorjordao.herokuapp.com/auth`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });
    return await response.ok ? response.json() : "";
}

export { Verify };