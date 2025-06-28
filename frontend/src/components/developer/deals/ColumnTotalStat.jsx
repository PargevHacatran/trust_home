import { useFormatPrice } from "../../../hooks/useFormatPrice"

import styles from "../../../styles/developer.module.css";

export const ColumnTotalStat = ({ columnName, totalPrice, columnColor }) => {
    const formatedTotalPrice = useFormatPrice(totalPrice)
    
    return (
        <div className={styles.col_total_stat_wrapper}>
            <div className={styles.col_stat_info_wrapper}>
                <div>
                    <p className={styles.col_stat_title}>{ columnName }</p>
                </div>
                <div>
                    <p className={styles.col_stat_revenue}>Общая сумма: 
                        <span className={styles.col_stat_revenue_sub}> ₽{ formatedTotalPrice }</span>
                    </p>
                </div>
            </div>
            <div 
                className={styles.col_stat_border}
                style={{
                    background: columnColor
                }}
            ></div>
        </div>
    )
}