import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('auth_token');
                if (token) {
                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    const response = await api.get('/api/user');
                    setUser(response.data);
                }
            } catch (error) {
                console.error('Auth check error:', error);
                localStorage.removeItem('auth_token');
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (userData, token) => {
        try {
            if (!userData?.id || !token) {
                throw new Error('Invalid user data or token');
            }

            localStorage.setItem('auth_token', token);
            localStorage.setItem('user_id', userData.id);
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
            setUser({
                id: userData.id,
                login: userData.login,
                name: userData.name || '',
                email: userData.email || ''
            });

            navigate('/');
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post('/api/logout');
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_id');
            delete api.defaults.headers.common['Authorization'];
            setUser(null);
            navigate('/login');
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            login, 
            logout, 
            loading 
        }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return context;
};
