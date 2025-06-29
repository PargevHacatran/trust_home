import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
// import api from '../api/axios'; // Импортируем настроенный axios-клиент

export default function RegistrationPage() {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
        name: '',
        surname: '',
        second_name: '',
        phone_number: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            // Отправка данных через наш api-клиент
            const response = await api.post('/api/register', {
                login: formData.login,
                password: formData.password,
                name: formData.name,
                surname: formData.surname,
                second_name: formData.second_name,
                phone_number: formData.phone_number,
                email: formData.email
            });

            console.log('Успешная регистрация:', response.data);
            navigate('/login');
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error('Ошибка регистрации:', error);
                setErrors({ 
                    general: error.response?.data?.message || 
                    'Произошла ошибка при регистрации. Пожалуйста, попробуйте позже.' 
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = Object.values(formData).every(field => field.trim() !== '');

    return (
        <div className="wrapper">
            <div className="center">
                <div className="container">
                    <h1>Регистрация</h1>
                    {errors.general && <div className="alert alert-danger">{errors.general}</div>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <input 
                                type="text" 
                                name="login"
                                value={formData.login}
                                onChange={handleChange}
                                required 
                            />
                            <label>Логин</label>
                            {errors.login && <span className="error-text">{errors.login[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="password" 
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required 
                            />
                            <label>Пароль</label>
                            {errors.password && <span className="error-text">{errors.password[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required 
                            />
                            <label>Имя</label>
                            {errors.name && <span className="error-text">{errors.name[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="text" 
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required 
                            />
                            <label>Фамилия</label>
                            {errors.surname && <span className="error-text">{errors.surname[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="text" 
                                name="second_name"
                                value={formData.second_name}
                                onChange={handleChange}
                            />
                            <label>Отчество</label>
                            {errors.second_name && <span className="error-text">{errors.second_name[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="text" 
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                required 
                            />
                            <label>Телефон</label>
                            {errors.phone_number && <span className="error-text">{errors.phone_number[0]}</span>}
                        </div>

                        <div className="form-control">
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                            <label>Email</label>
                            {errors.email && <span className="error-text">{errors.email[0]}</span>}
                        </div>

                        <button 
                            type="submit" 
                            className="btn" 
                            disabled={!isFormValid || isSubmitting}
                        >
                            {isSubmitting ? 'Регистрация...' : 'Зарегистрироваться'}
                        </button>

                        <p className="text">
                            Уже есть аккаунт? <NavLink to="/login">Войти</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}