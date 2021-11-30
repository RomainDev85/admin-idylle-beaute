import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Home() {

    const user = useSelector((state) => state.userReducer);

    return (
        <main className="home-page" style={{background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('./img/background-home.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="content">
                <h1>Administration</h1>
                <h2>Idylle Beauté</h2>
            </div>
            <div className="button">
                <a href="http://localhost:8080" rel="noreferrer" target="_blank">Site web</a>
                {user.error ? <Link to="/login">Connection</Link> : <Link to="/admin">Administration</Link>}
            </div>
        </main>
    )
}
