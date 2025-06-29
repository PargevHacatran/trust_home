import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';
import axios from '../api/axios';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        login: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const auth = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            // Получаем CSRF-куки
            await axios.get('/sanctum/csrf-cookie', {
                withCredentials: true,
            });

            //  Отправляем запрос на вход
            const response = await axios.post(
                '/api/login',
                {
                    login: formData.login,
                    password: formData.password
                },
                {
                    withCredentials: true,
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            );

            // Проверяем ответ сервера
            if (!response.data?.token) {
                throw new Error('Server returned invalid data');
            }

            //  Вызываем auth.login
            await auth.login(
                {
                    id: response.data.user?.id,
                    login: formData.login,
                    ...response.data.user
                },
                response.data.token
            );

        } catch (error) {
            console.error('Login error:', {
                error: error.message,
                response: error.response?.data
            });
            
            setErrors({ 
                general: error.response?.data?.message || 
                        error.response?.data?.error || 
                        'Неверный логин или пароль'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="wrapper">
            <div className="center">
                <div className="container">
                    <h1>Авторизация</h1>
                    
                    {errors.general && (
                        <div className="error-message">
                            {errors.general}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input 
                                type="text" 
                                name="login"
                                value={formData.login}
                                onChange={handleChange}
                                required 
                                disabled={isSubmitting}
                            />
                            <label>Логин</label>
                        </div>

                        <div className="form-control">
                            <input 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required 
                                disabled={isSubmitting}
                            />
                            <label>Пароль</label>
                        </div>

                        <button 
                            type="submit" 
                            className="btn" 
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Вход...' : 'Вход'}
                        </button>
                    </form>
                    
                    <p className="text">
                        Нет аккаунта? <NavLink to="/registration">Регистрация</NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
}