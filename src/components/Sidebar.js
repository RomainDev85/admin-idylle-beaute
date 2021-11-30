import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenu } from '../redux/actions/menu.action';
import { logoutUser } from '../redux/actions/user.action';
import ButtonSidebar from './ButtonSidebar';

export default function Sidebar() {

    const user = useSelector(state => state.userReducer);
    const menu = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();

    const handleClick = () => {
        if(menu.open) dispatch(setMenu({open: false}));
        else dispatch(setMenu({open: true}));
    };

    const Logout = () => {
        dispatch(logoutUser());
    };

    return (
        <nav className={menu.open ? "sidebar-open" : "sidebar-close"}>
            <div className={menu.open ? 'menu-btn open' : 'menu-btn'} onClick={handleClick}>
                <div className="menu-btn__burger"></div>
            </div>
            <h1>Idylle Beauté</h1>
            <h2>{user.firstname} {user.lastname}</h2>
            <ButtonSidebar action={Logout} text="Déconnexion"/>
        </nav>
    )
}
