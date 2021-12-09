import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/actions/categories.action';
import { hideModalCreateCategory } from '../redux/actions/modalCreateCategory';

export default function ModalCreateCategory() {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const handleForm = async (e) => {
        e.preventDefault();

            
        const data = {
            name: name
        };
        

        await dispatch(addCategory(data));
        setName("");
        dispatch(hideModalCreateCategory());


    }

    return (
        <div className="modal-create-category">
            <form className="modal" onSubmit={handleForm}>
                <h3>Crée une nouvelle catégorie</h3>
                <i className="fas fa-times" onClick={() => { dispatch(hideModalCreateCategory()) }}></i>

                <label htmlFor="name">Nom de la catégorie</label>
                <input type="text" name="name" id="name" placeholder="Entrez un nom de catégorie"  value={name} onChange={(e) => setName(e.target.value)}/>

                <div className="action">
                    <button type="submit" className="create">Valider</button>
                </div>
            </form>
        </div>
    )
}