import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideModalCreateService } from '../redux/actions/modalCreateService';
import { isEmpty } from '../utils/Utils';

export default function ModalCreateService() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer);

    return (
        <div className="modal-create-service">
            <form className="modal">
                <h3>Crée une nouvelle prestation</h3>
                <i className="fas fa-times" onClick={() => { dispatch(hideModalCreateService()) }}></i>

                <div className="title-and-category">
                    <div className="title">
                        <label htmlFor="title">Titre</label>
                        <input type="text" name="title" id="title" placeholder="Entrez un titre de prestation"/>
                    </div>
                    <div className="select-category">
                        <label htmlFor="category-select">Choisir une catégorie</label>
                        <select name="category" id="category-select">
                            <option value="">Selectionner une catégorie</option>
                            {!isEmpty(categories) && categories.map(category => ( <option key={category.id} value={category.id}>{category.nom}</option> ))}
                        </select>
                    </div>
                </div>

                <div className="description">
                    <label htmlFor="description">Description ( facultatif )</label>
                    <textarea name="" id="description" rows="3" placeholder="Entrez une description"></textarea>
                </div>

                <div className="time-and-price">
                    <div className="price">
                        <label htmlFor="price">Prix</label>
                        <input type="text" name="price" id="price" placeholder="Ajoutez un prix a la prestation (€)"/>
                    </div>
                    <div className="time">
                        <label htmlFor="time">Durée ( facultatif )</label>
                        <input type="text" name="time" id="time" placeholder="Ajoutez une durée a la prestation"/>
                    </div>
                </div>

                <div className="action">
                    <input type="submit" value="Crée prestation" />
                </div>
            </form>
        </div>
    )
}
