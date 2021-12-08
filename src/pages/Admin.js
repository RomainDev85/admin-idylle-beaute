import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import ListCategories from '../components/ListCategories';
import ModalDeleteService from '../components/ModalDeleteService';
import Sidebar from '../components/Sidebar';
import { setMenu } from '../redux/actions/menu.action';
import { setScreen } from '../redux/actions/screen.action';

export default function Admin() {
    const user = useSelector(state => state.userReducer);
    const screen = useSelector(state => state.screenReducer);
    const menu = useSelector(state => state.menuReducer);
    const modalDeleteService = useSelector(state => state.modalDeleteServiceReducer);
    const dispatch = useDispatch();

    useEffect(() => {

        if(window.innerWidth < 1200) dispatch(setScreen({little: true}));
        else dispatch(setScreen({little: false}));

            
        if(screen.little) dispatch(setMenu({open: false}));
        else dispatch(setMenu({open: true}));
        
        
        const resize = (e) => {
            e.preventDefault();
            if(window.innerWidth < 1200) dispatch(setScreen({little: true}))
            else dispatch(setScreen({little: false}));
        }

        window.addEventListener("resize", resize, { passive: true });

        return () => window.removeEventListener("resize", resize);
        
    }, [dispatch, screen.little]);

    if(user.user === null) return <Navigate to="/login" />;
    else {
        return (
            <div className="admin-page">
                <Sidebar/>
                <main className="admin-content" style={menu.open && !screen.little ? {marginLeft: "300px"} : {marginLeft: "70px"}}>
                    <h2>Administration Idylle Beauté</h2>
                    <ListCategories/>
                    {modalDeleteService.open && <ModalDeleteService />}
                </main>
            </div>
        )
    };
    
}
