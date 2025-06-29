import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true, // Обязательно для Sanctum
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

// Interceptor для обработки CSRF и авторизации
api.interceptors.request.use(async (config) => {
  // Добавляем токен авторизации, если есть
  const token = localStorage.getItem('auth_token'); // Убедитесь, что используете правильный ключ
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  // Для модифицирующих запросов получаем CSRF-токен
  if (['post', 'put', 'patch'].includes(config.method?.toLowerCase())) {
    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
        withCredentials: true,
      });
    } catch (err) {
      console.error('CSRF token error:', err);
      // Не прерываем запрос, если не удалось получить CSRF
    }
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor для обработки ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    
    // Обработка 401 Unauthorized
    if (status === 401) {
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    
    // Обработка 419 CSRF Token Mismatch
    if (status === 419) {
      console.warn('CSRF token mismatch, retrying...');
      return api(error.config); // Повторяем запрос
    }
    
    // Обработка 422 Validation Error
    if (status === 422) {
      return Promise.reject({
        ...error,
        validationErrors: error.response?.data?.errors
      });
    }

    return Promise.reject(error);
  }
);

export default api;