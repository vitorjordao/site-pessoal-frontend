import React from 'react';
import './Login.css';
import { Verify as LoginVerify } from './LoginRequest';

function Login() {

    async function login() {
        const login = "";
        const password = "";

        const response = await LoginVerify(login, password);

        if (!response) return;

        console.log(response);

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
            </form>
        </main>
    );
}

export default Login;