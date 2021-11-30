import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Sidebar from '../components/Sidebar';
import { setMenu } from '../redux/actions/menu.action';
import { setScreen } from '../redux/actions/screen.action';

export default function Admin() {
    const user = useSelector(state => state.userReducer);
    const screen = useSelector(state => state.screenReducer);
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
                <main className="admin-content">
                    Admin
                </main>
            </div>
        )
    };
    
}
