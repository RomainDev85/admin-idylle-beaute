import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from '../utils/Utils';
import Service from './Service';

export default function Category({idCategory, nameCategory, urlCategory}) {

    const [showServices, setShowServices] = useState(false);
    const services = useSelector(state => state.servicesReducer);

    
    return (
        <div className="category-content" key={idCategory}>
            <div className="category">
                <h4>{nameCategory}</h4>
                <div className="btn-category">
                    {!showServices ? 
                        <i className="far fa-arrow-alt-circle-down" onClick={(e) => {e.preventDefault(); setShowServices(true);}}></i> :
                        <i className="far fa-arrow-alt-circle-up" onClick={(e) => {e.preventDefault(); setShowServices(false);}}></i>
                    }
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
            <ul className={showServices ? "list-open" : "list-close"} id={urlCategory}>
                {!isEmpty(services) && services.map((element) => {
                    if(element.category_id === idCategory){
                        return (
                            <Service
                                key={element.service_id}
                                id={element.service_id}
                                name={element.name}
                                description={element.description}
                                price={element.price}
                                time={element.time}
                            />
                        )
                    }
                    else return null;
                })}
            </ul>
        </div>
    )
}
