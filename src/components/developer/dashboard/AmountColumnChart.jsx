import { useFormatPrice } from "../../../hooks/useFormatPrice";
import { AmountColumnItem } from "./AmountColumnItem";
import { StatBlockTitle } from "./StatBlockTitle";

import styles from "../../../styles/developer.module.css";

const totalAmountCols = [
    {
        title: "Лиды",
        value: 10420
    },
    {
        title: "Предложения",
        value: 16725
    },
    {
        title: "Переговоры",
        value: 21480
    },
    {
        title: "Контракты",
        value: 13276
    },
    {
        title: "Сделки",
        value: 24854
    },
]

export const AmountColumnChart = () => {
    const totalAmount = 37431.20;

    const formatedCount = useFormatPrice(totalAmount);

    const findMaxValue = (arr) => {
        if (!arr || arr.length === 0) {
            return 0;
        }

        let maxValue = arr[0]["value"];

        for (let i = 1; i < arr.length; i++) {
            const currentValue = arr[i]["value"];
            if (typeof currentValue === "number") {
                if (currentValue > maxValue) {
                    maxValue = arr[i]["value"];
                }
            }
        }
        return maxValue ?? 0;
    }

    const roundToNearestWithZeroes = (number) => {
        if (number === 0) {
            return 0;
        }

        const absNumber = Math.abs(number);
        const magnitude = Math.pow(10, Math.floor(Math.log10(absNumber)));
        const rounded = Math.ceil(absNumber / magnitude) * magnitude;

        return {rounded, magnitude};
    }

    const [roundedMaxValue, magnitude] = Object.values(roundToNearestWithZeroes(findMaxValue(totalAmountCols)));
    const maxValue = (roundedMaxValue / 10) * 10;

    const boundaryStep = Math.floor(maxValue / 3);

    return (
        <div className={styles.amount_column_chart_wrapper}>
            <div className={styles.amount_chart_topbar}>
                <StatBlockTitle
                    title="Общая сумма"
                />
                <div>
                    <p className={styles.amount_chart_topbar_link}>Подробнее <span className={styles.amount_chart_topbar_link_sub}>&#8594;</span></p>
                </div>
            </div>
            <div>
                <div className={styles.amount_chart_revenue_wrapper}>
                    <p className={styles.amount_chart_revenue}>
                        <span className={styles.amount_chart_revenue_sub}>₽</span>
                        { formatedCount }
                    </p>
                </div>
            </div>
            <div className={styles.amount_chart_diogram_wrapper}>
                {
                    Array(4).fill(null).map((_, index) => (
                        <div
                            key={index}
                            className={styles.amount_chart_diogram_lines}
                            style={{ top: `${(index * 33.33) + '%'}`, transform: 'translateY(-50%)' }}
                        >
                            <div className={styles.amount_chart_diogram_lines_value}>
                                <p className={styles.amount_chart_diogram_lines_value_count}>{ (maxValue - index * boundaryStep) / (magnitude / 10) }K</p>
                            </div>
                        </div>
                    ))
                }
    
                <div className={styles.amount_chart_cols_wrapper}>
                    {
                        totalAmountCols.map((item, index) => (
                            <AmountColumnItem
                                key={index}
                                title={item.title}
                                value={item.value}
                                maxValue={maxValue}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
}