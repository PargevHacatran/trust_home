import { icons } from "../../../utils/developer/icons";
import { Button } from "../../public/Button";

import styles from "../../../styles/developer.module.css";

export const ContactsListItem = ({ name, email, phoneNumber, company }) => {
    return (
        <div className={styles.contacts_list_wrapper}>
            <div className={styles.contacts_subject_info}>
                <div className={styles.contacts_subject_block}>
                    <div className={styles.contacts_subject_avatar}>
                        { icons.avatar }
                    </div>
                    <div className={styles.contacts_subject_personal_info}>
                        <p className={styles.contacts_subject_name}>{ name }</p>
                        <p className={styles.contacts_subject_email}>{ email }</p>
                    </div>
                </div>
            </div>
        
            <div className={styles.contacts_info_group}>
                <p>{ phoneNumber }</p>
            </div>
        
            <div className={styles.contacts_info_group}>
                <p>{ company }</p>                                
            </div>
            
            <div className={styles.contacts_action_group}>
                <Button
                    className={styles.contacts_action_icon}
                    onClick={() => {}}
                >
                    { icons.actionDots }
                </Button>
            </div>
                                        
        </div>
    );
}