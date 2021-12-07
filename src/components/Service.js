import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteService, getServices } from '../redux/actions/services.action';

export default function Service({ name, description, price, time, id }) {

    const dispatch = useDispatch();

    return (
        <li key={name}>
            <div className="service-content">
                <div className="left">
                    <h5>{name}</h5>
                    <p>{description}</p>
                </div>
                <div className="right">
                    <h5>{price} €</h5>
                    <p>{time}</p>
                </div>
                <div className="action">
                    <i className="far fa-edit"></i>
                    <i className="far fa-trash-alt" onClick={async () => { await dispatch(deleteService(id)); dispatch(getServices()); }}></i>
                </div>
            </div>
        </li>
    )
}
