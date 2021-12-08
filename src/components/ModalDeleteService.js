import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModalDeleteService } from '../redux/actions/modalDeleteService.action';
import { deleteService } from '../redux/actions/services.action';

export default function ModalDeleteService() {

    const dispatch = useDispatch();
    const modalDeleteService = useSelector(state => state.modalDeleteServiceReducer);
    console.log(modalDeleteService.id_service);

    return (
        <div className="modal-delete-service">
            <div className="modal">
                <h3>Suppression de la prestation</h3>
                <p>Etes vous sur de vouloir supprimer la prestation ?</p>
                <i className="fas fa-times" onClick={() => { dispatch(hideModalDeleteService()) }}></i>
                <div className="action">
                    <button type="submit" className="delete" onClick={async () => { await dispatch(deleteService(modalDeleteService.id_service)); dispatch(hideModalDeleteService())}}>Supprimer</button>
                    <button type="submit" className="cancel" onClick={() => { dispatch(hideModalDeleteService()) }}>Annuler</button>
                </div>
            </div>
        </div>
    )
}
