import React, { useContext } from 'react';
import { useAuth } from '../contexts/auth';
import AppRoute from './app.routes';
import AuthRoute from './auth.routes';
import { BounceLoader } from 'react-spinners';
import { CenteredContainer } from '../globalStyles';

const Routes: React.FC = () => {
    const { logged, loading } = useAuth();

    if (loading) {
        return (
            <CenteredContainer>
                <BounceLoader size="150" />
            </CenteredContainer>
        );
    }

    return logged ? <AppRoute /> : <AuthRoute />;
};

export default Routes;