import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesByCategory } from '../redux/actions/services.action';
import { isEmpty } from '../utils/Utils';

export default function Category({idCategory, nameCategory, urlCategory}) {

    const [showServices, setShowServices] = useState(false);
    const services = useSelector(state => state.servicesReducer)
    const dispatch = useDispatch();

    const GetServices = (urlCategory) => {
        if(!showServices) dispatch(getServicesByCategory(urlCategory, idCategory));
        else return null;
    }

    
    return (
        <div className="category-content" key={idCategory}>
            <div className="category">
                <h4>{nameCategory}</h4>
                <div className="btn-category">
                    {!showServices ? 
                        <i className="far fa-arrow-alt-circle-down" onClick={(e) => {e.preventDefault(); GetServices(urlCategory); setShowServices(true);}}></i> :
                        <i className="far fa-arrow-alt-circle-up" onClick={(e) => {e.preventDefault(); setShowServices(false);}}></i>
                    }
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
            <ul className={showServices ? "list-open" : "list-close"} id={urlCategory}>
                {!isEmpty(services) && services.map((element) => {
                    if(element.name === urlCategory){
                        return element.services.map(service => (
                            <li key={service.prestation_id}>
                                <div className="service-content">
                                    <div className="left">
                                        <h5>{service.nom_prestation}</h5>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="right">
                                        <h5>{service.price} €</h5>
                                        <p>{service.duree}</p>
                                    </div>
                                    <div className="action">
                                        <i className="far fa-edit"></i>
                                        <i className="far fa-trash-alt"></i>
                                    </div>
                                </div>
                            </li>
                        ));
                    }
                    else return null;
                })}
            </ul>
        </div>
    )
}
