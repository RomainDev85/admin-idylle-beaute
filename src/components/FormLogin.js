import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/user.action';

export default function FormLogin() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

        if(email && password){
            
            const data = {
                email: email,
                password: password
            };

            await dispatch(setUser(data));

            setEmail('');
            setPassword('');
        }
    }

    return (
        <form onSubmit={(e) => handleForm(e)}>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="password">Mot de passe</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <input type="submit" value="Connection" />
        </form>
    )
}
