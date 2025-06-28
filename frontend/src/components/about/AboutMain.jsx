import styles from "../../styles/about.module.css"; 
import { icons } from "../../utils/about/icons";
import { AboutAdvanture } from "./AboutAdvanture";

const advantures = [
    {
        title: "Проверенные объекты",
        icon: icons.advantures.checkedObjects,
    },
    {
        title: "Прямые сделки",
        icon: icons.advantures.frontDeals,
    },
    {
        title: "Сообзество экспертов",
        icon: icons.advantures.expertCommunity,
    },
]

export const AboutMain = () => {
    return (
        <div className={styles.about_main_wrapper}>
            <div className={styles.about_main_conntact}>
                <div className={styles.about_main_info_block}>
                    <h1 className={styles.about_main_title}>О платформе ТрастДом</h1>
                    <p className={styles.about_main_description}>Революционная платформа для безопасной покупки и продажи недвижимости без посредников</p>
                </div>
                <div className={styles.about_main_advantures_wrapper}>
                    {
                        advantures.map((item, index) => (
                            <AboutAdvanture 
                                key={index}
                                icon={item.icon}
                                title={item.title}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}