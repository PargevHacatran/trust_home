import { icons } from "../../../utils/developer/icons";

import styles from "../../../styles/messanger.module.css";

export const ChatItem = ({ name }) => {
    return (
        <div className={styles.chat_item}>
            <div className={styles.chat_item_icon_wrapper}>
                { icons.avatar }
            </div>
        
            <div className={styles.chat_item_username_wrapper}>
                <p className={styles.chat_item_username}>{ name }</p>
            </div>
        </div>
    );
}