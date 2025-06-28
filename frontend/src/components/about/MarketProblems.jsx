import { BlockTitle } from "../public/BlockTitle";
import styles from "../../styles/about.module.css";
import { icons } from "../../utils/about/icons";
import { AboutMarketProblem } from "./AboutMarketProblem";

const marketProblems = [
    {
        icon: icons.problems.fraud,
        title: "Мошенничество и фейки",
        description: "Поддельные документы, несуществующие объекты, обман покупателей",
        solution: "Система верификации и проверки сообществом",
        color: "#EF4444",
    },
    {
        icon: icons.problems.commisions,
        title: "Высокие комиссии",
        description: "Агентские комиссии до 5-7% от стоимости объекта",
        solution: "Прямое взаимодействие без посредников",
        color: "#F97316"
    },
    {
        icon: icons.problems.notTransparency,
        title: "Непрозрачность",
        description: "Скрытые дефекты, неполная информация об объекте",
        solution: "Полная история объекта и открытые отзывы",
        color: "#EAB308"
    },
    {
        icon: icons.problems.longTernDeals,
        title: "Долгие сделки",
        description: "Месяцы на поиск, проверку и оформление документов",
        solution: "Цифровая дорожная карта сделки",
        color: "#A855F7"
    },
];

export const MarketProblems = () => {
    return (
        <div className={styles.about_market_problems_wrapper}>
            <BlockTitle 
                title="Проблемы рынка недвижимости"
                description="Которые мы решаем с помощью технологий и сообщества"
                theme="light"
            />

            <div className={styles.about_marketproblems_list}>
                {
                    marketProblems.map((item, index) => (
                        <AboutMarketProblem 
                            key={index}
                            title={item.title}
                            description={item.description}
                            solution={item.solution}
                            color={item.color}
                            icon={item.icon}
                        />
                    ))
                }
            </div>
        </div>
    );
}