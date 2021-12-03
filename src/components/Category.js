import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getServicesByCategory } from '../redux/actions/services.action';
import { isEmpty } from '../utils/Utils';

export default function Category({idCategory, nameCategory, urlCategory}) {

    const [showServices, setShowServices] = useState(false);
    const services = useSelector(state => state.servicesReducer)
    const dispatch = useDispatch();

    const GetServices = (urlCategory) => {
        dispatch(getServicesByCategory(urlCategory));
    }

    const ShowList = () => {
        const element = document.getElementById(urlCategory);
        if(showServices) element.style.display = "none";
        else element.style.display = "block";
    }

    return (
        <div className="category-content" key={idCategory}>
            <div className="category">
                <h4>{nameCategory}</h4>
                <div className="btn-category">
                    {!showServices ? 
                        <i className="far fa-arrow-alt-circle-down" onClick={(e) => {e.preventDefault(); GetServices(urlCategory); setShowServices(true); ShowList();}}></i> :
                        <i className="far fa-arrow-alt-circle-up" onClick={(e) => {e.preventDefault(); GetServices(urlCategory); setShowServices(false); ShowList();}}></i>
                    }
                    {/* <i className="far fa-arrow-alt-circle-down" onClick={(e) => {e.preventDefault(); GetServices(urlCategory)}}></i> */}
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
            <ul className={nameCategory} id={urlCategory} style={{display: "none"}}>
                {!isEmpty(services) && services.map((element) => {
                    if(element.name === urlCategory){
                        return element.services.map(service => <li key={service.prestation_id}>{service.nom_prestation}</li>);
                    }
                    else return null;
                })}
            </ul>
        </div>
    )
}
