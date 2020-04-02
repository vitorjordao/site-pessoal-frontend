import React from 'react';
import './Admin.css';
import { useHistory } from "react-router-dom";

function Admin() {
    const history = useHistory();

    return (
        <main className="admin">
            <div>
                <h2>Articles</h2>
                <button onClick={() => history.push("/admin/article/create")}>Create</button>
                <button onClick={() => history.push("/admin/article/list")}>List</button>
            </div>
        </main>
    );
}

export default Admin;