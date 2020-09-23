import React from 'react';
import Auth from '../components/auth';

import { BrowserRouter, Route } from 'react-router-dom';

const AuthRoutes: React.FC = () => (
    <BrowserRouter>
        <Route component={Auth} path='/' />
    </BrowserRouter>
);

export default AuthRoutes;