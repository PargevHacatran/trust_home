import { TopBar } from "../../public/TopBar";

import styles from "../../../styles/developer.module.css";
import { Revenue } from "./Revenue";
import { AmountColumnChart } from "./AmountColumnChart";
import { DealsOverview } from "./DealsOverview";

export const DeveloperDashboard = () => {
    return (
        <div className={styles.deveoper_content_wrapper}>
            <TopBar
                title="Dashboard"
                btnText="Перейти в телеграм"
                btnOnClick={() => {}}
            />

            <div className={styles.developer_content_struct}>
                <DealsOverview />
                <div className={styles.developer_main_stats}>
                    <AmountColumnChart />
                    <Revenue />
                </div>
            </div>
        </div>
    );
}