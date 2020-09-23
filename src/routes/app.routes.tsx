import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/layout';

const AppRoutes: React.FC = () => ( 
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
);

export default AppRoutes;