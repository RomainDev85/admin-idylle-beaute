import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../redux/actions/categories.action';
import { isEmpty } from '../utils/Utils';

export default function ListCategories() {
    const [ loading, setLoading ] = useState(true);
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categoriesReducer);

    useEffect(() => {
        if(loading){
            dispatch(getCategories());
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

    return (
        <>
            <h3>Liste catégories</h3>
            {!isEmpty(categories) && categories.map((category) => (
                <div className="category-content" key={category.id}>
                    <div className="category">
                        <h4>{category.nom}</h4>
                        <div className="btn-category">
                            <i class="far fa-arrow-alt-circle-down"></i>
                            <i class="far fa-times-circle"></i>
                        </div>
                    </div>
                    <ul className={category.nom}></ul>
                </div>
            ))}
        </>
    )


}
