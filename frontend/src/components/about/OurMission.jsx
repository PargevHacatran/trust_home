import { BlockTitle } from "../public/BlockTitle";
import styles from "../../styles/about.module.css";
import { icons } from "../../utils/about/icons";
import { AboutMission } from "./AboutMission";

const missions = [
    {
        title: "Прозрачность",
        description: "Полная информация о каждом объекте, истории сделок и участниках. Никаких скрытых комиссий или условий.",
        icon: icons.missions.opacity,
    },
    {
        title: "Безопасность",
        description: "Многоуровневая система проверкиобъектов, документов и участников. Защита от мошенничества на каждом этапе.",
        icon: icons.missions.security,
    },
    {
        title: "Доступность",
        description: "Прямое взаимодействие между покупателями и продавцами без лишних посредников и переплат.",
        icon: icons.missions.availability,
    },
]

export const OurMission = () => {
    return (
        <div className={styles.about_missions_wrapper}>
            <BlockTitle 
                title="Наша миссия"
                description="Сделать рынок недвижимости прозрачным, безопасным и доступным для каждого"
                theme="light"
            />

            <div className={styles.about_missions_list_wrapper}>
                {
                    missions.map((item, index) => (
                        <AboutMission
                            key={index}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    );
}