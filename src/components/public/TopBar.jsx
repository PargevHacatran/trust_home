import { Select } from "./Select"
import styles from "../../styles/topbar.module.css";
import { icons } from "../../utils/public/icons";

const optionsList = [
    {
        text: "Месяц",
        value: "month"
    },
    {
        text: "День",
        value: "day"
    },
    {
        text: "Год",
        value: "year"
    },
]

export const TopBar = ({ title }) => {
    return (
        <div className={styles.topbar_wrapper}>
            <div>
                <h1 className={styles.topbar_title}>{ title }</h1>
            </div>
            <div className={styles.topbar_right_section}>
                <div className={styles.topbar_icon_wrapper}>
                    { icons.notification }
                </div>
                <div>
                    <Select
                        selectClassName={styles.select}
                        optionsList={optionsList}
                    />
                </div>
            </div>
        </div>
    )
}