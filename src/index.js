import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './ContexProduct/ContextProduct';
import MainRoutes from './Routes/MainRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <ProductProvider>

    <App />
    <MainRoutes/>
    </ProductProvider>
    </BrowserRouter>
    
);
