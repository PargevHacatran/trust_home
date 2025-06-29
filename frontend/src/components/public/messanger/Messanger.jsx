import { TopBar } from "../TopBar";
import { ChatsList } from "./ChatsList";
import { DiologWindow } from "./DiologWindow";

import styles from "../../../styles/messanger.module.css";

export const Messanger = () => {
    return (
        <div className={styles.messanger}>
            <TopBar 
                title="Мессенджер"
                btnText="+ Добавить чат"
                btnOnClick={() => {}}
            />

            <div className={styles.messanger_wrapper}>
                <ChatsList />
                <DiologWindow 
                    companionName="Samuel Reza"
                />
            </div>
        </div>
    );
}