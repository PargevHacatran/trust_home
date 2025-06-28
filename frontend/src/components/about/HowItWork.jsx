import { BlockTitle } from "../public/BlockTitle";
import styles from "../../styles/about.module.css";
import { AboutWorkStep } from "./AboutWorkStep";

const workSteps = [
    {
        title: "Регистрация и верификация",
        description: "Создайте профиль и пройдите верификацию личности для доступа к проверенным объектам"
    },
    {
        title: "Поиск и просмотр",
        description: "Найдите подходящий объект через умный поиск и изучите его полную историю"
    },
    {
        title: "Прямое общение",
        description: "Свяжитесь с продавцом напрямую через защищенный чат или видеосвязь"
    },
    {
        title: "Безопасная сделка",
        description: "Используйте нашу систему эскроу и юридическое сопровождение для безопасного оформления"
    },
    {
        title: "Пост-гарантия",
        description: "Получите 30-дневную гарантию отсутствия скрытых проблем после сделки"
    },
];

export const HowItWork = () => {
    return (
        <div className={styles.about_howitwork}>
            <BlockTitle 
                title="Как работает ТрастДом"
                description="Простой и безопасный процесс от поиска до завершения сделки"
                theme="light"
            />

            <div className={styles.about_howitwork_list}>
                {
                    workSteps.map((item, index) => (
                        <AboutWorkStep 
                            key={index}
                            title={item.title}
                            description={item.description}
                            count={++index}
                            isLast={index === workSteps.length}
                        />
                    ))
                }
            </div>
        </div>
    );
}