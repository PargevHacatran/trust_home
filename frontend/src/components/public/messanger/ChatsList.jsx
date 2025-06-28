import { ChatItem } from "./ChatItem";

import styles from "../../../styles/messanger.module.css"

const chats = [
    {
        role: "developer",
        name: "Samuel Reza"
    },
    {
        role: "manager",
        name: "Daniel Crag"
    },
    {
        role: "manager",
        name: "Rezza"
    },
    {
        role: "developer",
        name: "Mark Wazauiski"
    },
    {
        role: "realtor",
        name: "Dani Malik"
    },
    {
        role: "manager",
        name: "Firo Jamal"
    },
    {
        role: "realtor",
        name: "Putri Lestari"
    },
    {
        role: "developer",
        name: "Samuel Reza"
    },
];

export const ChatsList = () => {
    return (
        <div className={styles.chat_list_wrapper}>
            <div>
                <p className={styles.chat_list_title}>Чаты</p>
            </div>

            <div className={styles.chat_list_warning}>
                <p className={styles.chat_list_warning_text}>
                    Во время разговора не забывайте о правилах сообщества. 
                    <a
                        href="" 
                        className={styles.chat_list_warning_text_link}
                    >
                        Посмотреть правила сообщества
                    </a>
                </p>
            </div>

            <div className={styles.chat_list_items_wrapper}>
                {
                    chats.map((item, index) => (
                        <ChatItem 
                            key={index}
                            name={item.name}
                        />
                    ))
                }
            </div>
        </div>
    );
}