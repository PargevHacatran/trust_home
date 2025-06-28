import { TopBar } from "../../public/TopBar";

import styles from "../../../styles/developer.module.css";
import { DealsList } from "./DealsList";
import { Button } from "../../public/Button";

export const DeveloperDeals = () => {
    return (
        <div className={styles.developer_content_wrapper}>
            <TopBar
                title="Dashboard"
            />

            <div className={styles.developer_content_struct}>
                <DealsList />
            </div>
        </div>
    );
}