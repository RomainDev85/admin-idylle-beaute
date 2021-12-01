import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/actions/user.action';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer);

    useEffect(() => {
        if(user.error){
            setErrorEmail(user.error.email);
            setErrorPassword(user.error.password);
        }
        if(user.id){
            setErrorEmail('');
            setErrorPassword('');
            setEmail('');
            setPassword('');
            window.location.href = "/admin";
        }
    }, [user])

    const handleForm = async (e) => {
        e.preventDefault();

            
        const data = {
            email: email,
            password: password
        };

        await dispatch(setUser(data));
    }


    return (
        <main className="login-page" style={{background: "url('./img/background-login.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
            <form onSubmit={(e) => handleForm(e)}>
                <img src="./img/user.jpg" alt="utilisateur"/>

                <h1>Idylle Beauté</h1>

                <label htmlFor="email">Email</label>
                <input type="text" id="email" value={email} placeholder="Entrez votre email" onChange={(e) => setEmail(e.target.value)}/>
                {errorEmail && <p>{errorEmail}</p>}

                <label htmlFor="password">Mot de passe</label>
                <input type="password" id="password" value={password} placeholder="Entrez votre mot de passe" onChange={(e) => setPassword(e.target.value)}/>
                {errorPassword && <p>{errorPassword}</p>}

                <input type="submit" value="Connection" />
            </form>
        </main>
    )
}
