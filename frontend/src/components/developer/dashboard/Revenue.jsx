import { BezieLine } from "./BezieLine";
import { StatProgressIndicator } from "./StatProgressIndicator";
import { useFormatPrice } from "../../../hooks/useFormatPrice";
import { StatBlockTitle } from "./StatBlockTitle";
import styles from "../../../styles/developer.module.css";
import { LastMonthStat } from "./LastMonthStat";

export const Revenue = () => {
    const revenue = 42736.13;
    const lastMonthStat = 40034.01;

    const isPositive = revenue > lastMonthStat;
    const progressProcent = Math.round((lastMonthStat / revenue) * 100)

    const formatedCount = useFormatPrice(revenue);
    const formatedLastMonth = useFormatPrice(lastMonthStat);

    return (
        <div className={styles.revenue_wrapper}>
            <StatBlockTitle
                title="Доход"
            />
            <div>
                <div className={styles.revenue_count_wrapper}>
                    <p className={styles.revenue_count}>
                        <span className={styles.revenue_count_rub_symbol}>₽</span>
                        { formatedCount }
                    </p>
                    <StatProgressIndicator
                        isPositive={isPositive}
                        progressProcent={progressProcent}
                    />
                </div>
                <LastMonthStat
                    lastMonthStat={formatedLastMonth}
                />
            </div>
            <BezieLine />
        </div>
    );
}