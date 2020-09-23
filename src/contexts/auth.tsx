import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from '../services/auth';


interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    logged: boolean;
    user: User | null;
    login(): Promise<void>;
    logout(): void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData() {
            const storedUser = localStorage.getItem('@CHATTEAuth:user');
            const storedToken = localStorage.getItem('@CHATTEAuth:token');
            if (storedToken && storedUser) {
                setUser(JSON.parse(storedUser));
                setLoading(false);
            } else {
                setLoading(false);
            }
        }
        loadStoragedData();
    }, [])

    async function login () {
        const response = await auth.login();
        setUser(response.user);
        localStorage.setItem('@CHATTEAuth:user', JSON.stringify(response.user));
        localStorage.setItem('@CHATTEAuth:token', response.token);
    }

    async function logout () {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{logged: !!user, user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}