import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showModalDeleteService } from '../redux/actions/modalDeleteService.action';
import { editService } from '../redux/actions/services.action';

export default function Service({ id, name, description, time, price}) {

    const dispatch = useDispatch();
    const [formEditService, setFormEditService] = useState(false);
    const [editName, setEditName] = useState(name);
    const [editPrice, setEditPrice] = useState(price);
    const [editTime, setEditTime] = useState(time);
    const [editDescription, setEditDescription] = useState(description);

    useEffect(() => {
        if(description === null) setEditDescription("")
        if(time === null) setEditTime("");
    }, [description, time])

    const handleEdit = async (e) => {
        e.preventDefault();

        const data = {
            id: id,
            name: editName,
            description: editDescription,
            price: editPrice,
            time: editTime
        };

        await dispatch(editService(data));
        setFormEditService(false);

    }
    

    return (
        <li key={name}>
            <div className="service-content">
                {!formEditService ? 
                    <>
                        <div className="left">
                            <h5>{name}</h5>
                            {description !== null && <p>{description}</p>}
                        </div>
                        <div className="right">
                            <h5>{price} €</h5>
                            {time !== null && <p>{time}</p>}
                        </div>
                    </>
                    :
                    <form onSubmit={(e) => {handleEdit(e)}}>
                        <div className="left">
                            <label htmlFor="name">Nom</label>
                            <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} id="name"/>
                            <label htmlFor="description">Description</label>
                            <input type="text" id="description" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                        </div>
                        <div className="right" style={formEditService ? {alignItems: "flex-start", marginLeft: "40px"} : {alignItems: "flex-end"}}>
                            <label htmlFor="price">Prix ( € )</label>
                            <input type="text" id="price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
                            <label htmlFor="description">Temps</label>
                            <input type="text" value={editTime} onChange={(e) => setEditTime(e.target.value)}/>
                            <input type="submit" value="Modifier" />
                        </div>
                    </form>
                }
                <div className="action">
                    <i className="far fa-edit" onClick={() => setFormEditService(!formEditService)}></i>
                    {/* <i className="far fa-trash-alt" onClick={async () => { await dispatch(deleteService(id)); dispatch(getServices()); }}></i> */}
                    <i className="far fa-trash-alt" onClick={() => dispatch(showModalDeleteService(id))}></i>
                </div>
            </div>
        </li>
    )
}
