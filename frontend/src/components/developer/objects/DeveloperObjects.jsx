import { TopBar } from "../../public/TopBar";

import styles from "../../../styles/developer.module.css";
import { ObjectsList } from "./ObjectsList";

export const DeveloperObjects = () => {
    return (
        <div className={styles.developer_content_wrapper}>
            <TopBar
                title="Объекты"
            />

            <div className={styles.developer_content_struct}>
                <ObjectsList />
            </div>
        </div>
    );
}