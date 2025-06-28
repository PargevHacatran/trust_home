import styles from "../../../styles/developer.module.css";

export const LastMonthStat = ({ lastMonthStat }) => {
    return (
        <div className={styles.last_month_stat}>
            <p className={styles.last_month_stat_count}>
                В прошлый месяц: 
                <span className={styles.last_month_stat_count_sub}> { lastMonthStat }</span>
            </p>
        </div>
    );
}