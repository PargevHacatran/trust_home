import { Select } from "../../public/Select";
import { useState } from "react";

import styles from "../../../styles/developer.module.css";

const optionsList = [
    {
        text: "Менеджеры",
        value: "manager"
    },
    {
        text: "Риелторы",
        value: "realtor",
    },
    {
        text: "Покупатели",
        value: "customer"
    }
]

export const ContactsListTopBar = ({ contactsCount }) => {
    const [searchValue, setSearchValue] = useState("");
    const [currentContactsType, setCurrentContactsType] = useState(optionsList[0].text);
    
    const conjugationsConatctCountPrefix = (contactsCount) => {
        const divisionRemainder = contactsCount % 10;

        if ((contactsCount - divisionRemainder) === 10) {
            return "Контаков"
        } 

        switch (divisionRemainder) {
            case 1:
                return "Контакт";
            case 2:
            case 3:
            case 4:
                return "Контакта"
            default: 
                return "Контактов"
        }
    }

    return (
        <div className={styles.contacts_topbar_wrapper}>
            <div>
                <p className={styles.contacts_topbar_count}>{ contactsCount } { conjugationsConatctCountPrefix(contactsCount) }</p>
            </div>
            <div className={styles.contacts_select_wrapper}>
                <div className="group">
                    <Select 
                        selectClassName={styles.contacts_select}
                        optionClassName={styles.contacts_options}
                        optionsList={optionsList}
                        onChangeOptions={(e) => setCurrentContactsType(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}