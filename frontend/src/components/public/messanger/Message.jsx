import { icons } from "../../../utils/developer/icons";

import styles from "../../../styles/messanger.module.css";

export const Message = ({ name, time, message }) => {
    return (
        <div className={styles.message_item}>  
            <div className={styles.message_info}>
                <div className={styles.message_user_icon_wrapper}>
                    { icons.avatar }
                </div>
        
                <div>
                    <div className={styles.message_topbar}>
                        <p className={styles.message_username}>{ name }</p>
                        <p className={styles.messgae_time}>{ time }</p>
                    </div>
        
                    <div>
                        <p className={styles.message_text}>{ message }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}