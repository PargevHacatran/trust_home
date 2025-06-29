import { TopBar } from "../../public/TopBar";

import styles from "../../../styles/developer.module.css";
import { ContactsList } from "./ContactsList";
import { useState } from "react";
import { ModalWindow } from "../../public/ModalWindow";
import axios from "axios";

export const DeveloperContacts = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [company, setCompany] = useState();

    const inputs = [
        {
            placeholder: "Введите имя",
            setState: (e) => setName(e.target.value)
        },
        {
            placeholder: "Введите почту",
            setState: (e) => setEmail(e.target.value)
        },
        {
            placeholder: "Введите номер телефона",
            setState: (e) => setPhone(e.target.value)
        },
        {
            placeholder: "Введите компания",
            setState: (e) => setCompany(e.target.value)
        }
    ];

    const sendData = () => {
        axios.post("http://127.0.0.1:8000/create-contact", {
            "username": name,
            "email": email,
            "phone": phone,
            "company": company,
            "user_id": 1
        })
    }

    return (
        <div className={styles.deveoper_content_wrapper}>
            <TopBar
                title="Контакты"
                btnText="+ Добавить контакт"
                btnOnClick={() => setIsOpen(true)}
            />

            <div className={styles.developer_content_struct}>
                <ContactsList />
            </div>

            <div>
                {
                    isOpen ?
                        <ModalWindow 
                            inputs={inputs}
                            title="Создать контакт"
                            onClick={() => sendData()}
                            closeWindowState={() => setIsOpen(false)}
                        />
                        : null
                }
            </div>
        </div>
    );
}