import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.css';
import { Verify as LoginVerify } from './LoginRequest';

function Login() {
    const [errorMessage, setErrorMessage] = useState<string>();
    const history = useHistory();

    async function login(event: any) {
        event.preventDefault();

        const login: string = event.target.form[0].value;
        const password: string = event.target.form[1].value;

        const response = await LoginVerify(login, password);

        if (!response || response === 400) {
            setErrorMessage("Login ou senha errados");
            return;
        }

        setErrorMessage("");
        history.push("/admin");

    };

    return (
        <main className="login">
            <form id="login-form">
                <div>
                    <label htmlFor="login">Login</label>
                    <input type="text" name="login" id="login" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="login-button">
                    <button onClick={login}>Login</button>
                </div>
                <span>{errorMessage}</span>
            </form>
        </main>
    );
}

export default Login;