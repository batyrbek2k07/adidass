import React from 'react';
import { Route, Routes } from 'react-router';
import AdminProduct from '../Admin/Admin';
import Pages from '../pages/Pages';


const MainRoutes = () => {
    const PUBLIC = [
        { link: "/admin", element: <AdminProduct/>, id: 1 },
        { link: "/", element: <Pages/>, id: 2 },


    ];

    
    return (
        <Routes>
            {PUBLIC.map((el) => (
                <Route path={el.link} element={el.element} key={el.id}/> 
            ))}
        </Routes>
    );
};

export default MainRoutes;