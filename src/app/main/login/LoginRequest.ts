async function Verify(login: string, password: string) {
    const response = await fetch(`#my-url/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login, password })
    });
    return await response.ok ? response.json() : "";
}

export { Verify };