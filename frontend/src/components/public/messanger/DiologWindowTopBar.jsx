import { icons } from "../../../utils/developer/icons";

import styles from "../../../styles/messanger.module.css";

export const DiologWindowTopBar = ({ companionName, companionRole }) => {
    return (
        <div className={styles.diolog_window_topbar}>
            <div className={styles.diolog_window_companion_wrapper}>
                <p className={styles.diolog_window_companion_name}>{ companionName }</p>
                <p className={styles.diolog_window_companion_role}>{ companionRole }</p>
            </div>
            <div className={styles.diolog_window_information_icon_wrapper}>
                { icons.informationIcon }
            </div>
        </div>
    ); 
}