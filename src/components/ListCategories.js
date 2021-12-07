import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../redux/actions/categories.action';
import { getServices } from '../redux/actions/services.action';
import { isEmpty } from '../utils/Utils';
import Category from './Category';

export default function ListCategories() {
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer);


    useEffect(() => {
        if(loading){
            dispatch(getCategories());
            dispatch(getServices());
            setLoading(false);
        }
    }, [loading, dispatch])


    if(loading) {
        return (
            <div>
                <span className="loader" style={{margin: "20px"}}></span>
            </div>
        )
    }
    else return (
        <>
            <h3>Liste catégories</h3>
            {!isEmpty(categories) && categories.map((category) => (
                <Category key={category.id} idCategory={category.id} nameCategory={category.nom} urlCategory={category.url_categorie}/> 
            ))}
        </>
    )


}
