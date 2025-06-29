import { useState, useEffect } from 'react';
import { Button } from "../Button";
import { Input } from "../Input";
import { icons } from "../../../utils/developer/icons";
import styles from "../../../styles/messanger.module.css";
import axios from 'axios';
import { decrypt } from '../../../utils/encryption.js'; // Ваша функция дешифровки

export const SendMessageHolder = ({ currentUserId }) => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [onlineUsers, setOnlineUsers] = useState([]);

    const roomId = 1

    // Подключение к WebSocket и загрузка истории сообщений
    useEffect(() => {
        // Загрузка истории сообщений
        const loadMessages = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/chat/messages/${roomId}`);
                setMessages(response.data.reverse());
            } catch (error) {
                console.error('Error loading messages:', error);
            }
        };

        // Подписка на WebSocket канал
        if (window.Echo) {
            window.Echo.join(`room.${roomId}`)
                .here(users => setOnlineUsers(users))
                .listen('NewMessageSent', (data) => {
                    try {
                        const decrypted = decrypt(data.content);
                        setMessages(prev => [...prev, {
                            content: decrypted,
                            user_id: data.user_id,
                            created_at: new Date().toISOString()
                        }]);
                    } catch (error) {
                        console.error('Decryption failed:', error);
                    }
                });
        }

        loadMessages();

        return () => {
            if (window.Echo) {
                window.Echo.leave(`room.${roomId}`);
            }
        };
    }, [roomId]);

    // Отправка сообщения
    const sendMessage = async () => {
        if (!message.trim()) return;

        try {
            await axios.post('http://localhost:8000/chat/send', {
                room_id: roomId,
                content: message,
                user_id: 1
            });
            setMessage("");
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={styles.chat_container}>
            {/* Блок с сообщениями */}
            <div className={styles.messages_container}>
                {messages.map((msg, index) => (
                    <div 
                        key={index} 
                        className={`${styles.message} ${
                            msg.user_id === currentUserId ? styles.my_message : styles.other_message
                        }`}
                    >
                        <div className={styles.message_content}>{msg.content}</div>
                        <div className={styles.message_meta}>
                            {new Date(msg.created_at).toLocaleTimeString()}
                        </div>
                    </div>
                ))}
            </div>

            {/* Блок отправки сообщения */}
            <div className={styles.send_message_wrapper}>
                <Input
                    name="message"
                    areaClassName={styles.send_message_input_area}
                    className={styles.send_message_input}
                    placeholder="Сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />

                <Button
                    className={styles.send_message_button}
                    onClick={() => sendMessage()}
                >
                    <div className={styles.send_message_input_icon_wrapper}>
                        {icons.sendMessage}
                    </div>
                </Button>
            </div>
        </div>
    );
};