import CryptoJS from 'crypto-js';

// Ключ должен совпадать с ключом на сервере (APP_KEY в .env Laravel)
const SECRET_KEY = import.meta.env.VITE_APP_KEY || 'fallback_key_32_chars_long_1234';

export const decrypt = (encryptedData) => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error('Decryption error:', error);
        return '🔒 Не удалось расшифровать сообщение';
    }
};

// Опционально: функция шифрования для тестов
export const encrypt = (data) => {
    return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};