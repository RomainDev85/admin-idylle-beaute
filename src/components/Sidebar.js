import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetCategories } from '../redux/actions/categories.action';
import { setMenu } from '../redux/actions/menu.action';
import { showModalCreateCategory } from '../redux/actions/modalCreateCategory';
import { showModalCreateService } from '../redux/actions/modalCreateService';
import { resetServices } from '../redux/actions/services.action';
import { logoutUser } from '../redux/actions/user.action';


export default function Sidebar() {
    const menu = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();


    const handleClick = () => {
        if(menu.open) dispatch(setMenu({open: false}));
        else dispatch(setMenu({open: true}));
    };

    const Logout = () => {
        dispatch(logoutUser());
        dispatch(resetCategories());
        dispatch(resetServices());
    };

    return (
        <nav className={menu.open ? "sidebar-open" : "sidebar-close"}>
            <div className={menu.open ? 'menu-btn open' : 'menu-btn'} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
            <h1>Idylle Beauté</h1>
            <div className="btn-group">
                <button className={menu.open ? "btn-open btn-classic" : "btn-close btn-classic"}><span>Information<br/> entreprise</span><i className="far fa-user-circle"></i></button>
                <button className={menu.open ? "btn-open btn-classic" : "btn-close btn-classic"} onClick={() => { dispatch(showModalCreateCategory()) }}><span>Ajouter catégorie</span> <i className="far fa-plus-square"></i></button>
                <button className={menu.open ? "btn-open btn-classic" : "btn-close btn-classic"} onClick={() => { dispatch(showModalCreateService()) }}><span>Ajouter prestation</span> <i className="far fa-plus-square"></i></button>
                <button onClick={Logout} className={menu.open ? "btn-open btn-danger" : "btn-close btn-danger"} ><span>Déconnexion</span> <i className="fas fa-sign-out-alt"></i></button>
            </div>
        </nav>
    )
}
