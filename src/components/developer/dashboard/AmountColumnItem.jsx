import { useEffect, useRef } from "react";
import styles from "../../../styles/developer.module.css";

export const AmountColumnItem = ({ title, value, maxValue }) => {
    const colRef = useRef();

    useEffect(() => {
        colRef.current.style.setProperty('--h', `${(value / maxValue) * 100}%`)
    }, []);

    return (
        <div className={styles.amount_chart_col_container}>
            <div 
                className={styles.amount_chart_col}
                ref={colRef}
                style={{
                    height: `${(value / maxValue) * 100}%`,
                }}
            ></div>
            <p className={styles.amount_chart_col_text}>{title}</p>
        </div>
    );
};