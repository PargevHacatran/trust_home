import { TopBar } from "../../public/TopBar";

import styles from "../../../styles/developer.module.css";
import { ContactsList } from "./ContactsList";

export const DeveloperContacts = () => {
    return (
        <div className={styles.deveoper_content_wrapper}>
            <TopBar
                title="Контакты"
                btnText="+ Добавить контакт"
                btnOnClick={() => {}}
            />

            <div className={styles.developer_content_struct}>
                <ContactsList />
            </div>
        </div>
    );
}