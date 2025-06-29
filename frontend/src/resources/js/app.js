import './bootstrap';
import { createApp } from 'vue'; // или React, в зависимости от вашего фреймворка
import Echo from 'laravel-echo';

// Инициализация Pusher/Reverb
window.Echo = new Echo({
    broadcaster: 'reverb', // или 'pusher' если используете Pusher
    key: import.meta.env.VITE_REVERB_APP_KEY,
    wsHost: window.location.hostname,
    wsPort: import.meta.env.VITE_REVERB_PORT || 8080,
    forceTLS: false,
    enabledTransports: ['ws', 'wss'],
    auth: {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        }
    }
});

// Для React-приложения
const app = createApp({});
app.mount('#app');