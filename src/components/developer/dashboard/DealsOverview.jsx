import { dealsIcon } from "../../../utils/developer/dealsIcons";
import { DealsOverviewCart } from "./DealsOverviewCart";

import styles from "../../../styles/developer.module.css";

const dealsOverviewList = [
    {
        title: "Сделок Создано",
        count: 172,
        progressProcent: 2.8,
        progressState: "up",
        lastMonthStat: 143,
        icon: dealsIcon.createdDeals,
    },
    {
        title: "Сделок Открыто",
        count: 243,
        progressProcent: 3.2,
        progressState: "up",
        lastMonthStat: 212,
        icon: dealsIcon.openedDeals,
    },
    {
        title: "Активных Сделок",
        count: 13246,
        progressProcent: 1.8,
        progressState: "up",
        lastMonthStat: 10324,
        icon: dealsIcon.activeDeals,
    },
    {
        title: "Лиды",
        count: 130,
        progressProcent: 1.8,
        progressState: "down",
        lastMonthStat: 133,
        icon: dealsIcon.leads,
    }
] 

export const DealsOverview = () => {
    return (
        <div className={styles.deals_overview_wrapper}>
            {
                dealsOverviewList.map((item, index) => (
                    <DealsOverviewCart
                        key={index}
                        title={item.title}
                        count={item.count}
                        progressProcent={item.progressProcent}
                        progressState={item.progressState}
                        lastMonthStat={item.lastMonthStat}
                        icon={item.icon}
                    />
                ))
            }
        </div>
    );
}