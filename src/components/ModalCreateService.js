import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalCreateService } from '../redux/actions/modalCreateService';
import { addService } from '../redux/actions/services.action';
import { isEmpty } from '../utils/Utils';

export default function ModalCreateService() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('');
    const [time, setTime] = useState('');


    const handleForm = async (e) => {
        e.preventDefault();

        const data = {
            title: title,
            category: category,
            description: description,
            price: price,
            time: time
        };

        await dispatch(addService(data));
        dispatch(hideModalCreateService());

    }

    return (
        <div className="modal-create-service">
            <form className="modal" onSubmit={handleForm}>
                <h3>Crée une nouvelle prestation</h3>
                <i className="fas fa-times" onClick={() => { dispatch(hideModalCreateService()) }}></i>

                <div className="title-and-category">
                    <div className="title">
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" id="title" placeholder="Entrez un titre de prestation" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="select-category">
                        <label htmlFor="category-select">Choisir une catégorie</label>
                        <select name="category" id="category-select" onChange={(e) => setCategory(e.target.value)}>
                            <option value="">Selectionner une catégorie</option>
                            {!isEmpty(categories) && categories.map(category => ( <option key={category.id} value={category.id}>{category.nom}</option> ))}
                        </select>
                    </div>
                </div>

                <div className="description">
                    <label htmlFor="description">Description ( facultatif )</label>
                    <textarea name="description" id="description" rows="3" placeholder="Entrez une description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

                <div className="time-and-price">
                    <div className="price">
                        <label htmlFor="price">Prix</label>
                        <input type="text" name="price" id="price" placeholder="Ajoutez un prix a la prestation (€)" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="time">
                        <label htmlFor="time">Durée ( facultatif )</label>
                        <input type="text" name="time" id="time" placeholder="Ajoutez une durée a la prestation" value={time} onChange={(e) => setTime(e.target.value)}/>
                    </div>
                </div>

                <div className="action">
                    <input type="submit" value="Crée prestation" />
                </div>
            </form>
        </div>
    )
}
