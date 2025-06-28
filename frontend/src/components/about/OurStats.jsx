import { BlockTitle } from "../public/BlockTitle";
import styles from "../../styles/about.module.css";
import { AboutStat } from "./AboutStat";

const stats = [
    {
        count: "15,000+",
        description: "Проверенных объектов"
    },
    {
        count: "8,500+",
        description: "Успешных сделок"
    },
    {
        count: "99.2%",
        description: "Довольных клиентов"
    },
    {
        count: "2.8 млрд ₽",
        description: "Сэкономлено на комиссиях"
    },
]

export const OurStats = () => {
    return (
        <div className={styles.about_ourstats}>
            <BlockTitle 
                title="ТрастДом в цифрах"
                description="Результаты нашей работы говорят сами за себя"
                theme="dark"
            />

            <div className={styles.about_stats_list}>
                {
                    stats.map((item, index) => (
                        <AboutStat 
                            key={index}
                            count={item.count}
                            description={item.description}
                        />
                    ))
                }
            </div>
        </div>
    );
}