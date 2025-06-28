import { useEffect, useState } from "react";
import { useFormatPrice } from "../../../hooks/useFormatPrice";
import { StatProgressIndicator } from "./StatProgressIndicator"; 
import { LastMonthStat } from "./LastMonthStat";

import styles from "../../../styles/developer.module.css";

export const DealsOverviewCart = ({ title, count, progressProcent, progressState, lastMonthStat, icon }) => {
    const isPositive = progressState === "up";
    const [formatedCount, setFormatedCount] = useState(count);

    const formatedCountValue = useFormatPrice(count, true);

    useEffect(() => {
        setFormatedCount(formatedCountValue);
    }, [isPositive]); 

    return (
        <div className={styles.deal_cart_wrapper}>
            <div className={styles.deal_cart_icon_wrapper}>
                { icon }
            </div>
            <div className={styles.deal_cart_main_info}>
                <div className={styles.deal_cart_count_wrapper}>
                    <p className={styles.deal_cart_count}>{ formatedCount }</p>
                    <StatProgressIndicator
                        isPositive={isPositive}
                        progressProcent={progressProcent}
                    />
                </div>
            </div>
            <div className={styles.deal_cart_title_wrapper}>
                <p className={styles.deal_cart_title}>{ title }</p>
            </div>
            <LastMonthStat
                lastMonthStat={lastMonthStat}
            />
        </div>
    )
}