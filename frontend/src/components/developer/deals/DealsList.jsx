import { ColumnTotalStat } from "./ColumnTotalStat";
import { DealsListItem } from "./DealsListItem";

import styles from "../../../styles/developer.module.css";

const dealsList = {
    leads: {
        totalPrice: 4245,
        columnName: "Лиды",
        columnColor: "#7662EA",
        list: [
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
        ]
    },
    proposal: {
        totalPrice: 16900,
        columnName: "Предложение",
        columnColor: "#429482",
        list: [
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
        ]
    },
    negotiation: {
        totalPrice: 20345,
        columnName: "Переговоры",
        columnColor: "#EF746D",
        list: [
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
        ]
    },
    contractSend: {
        totalPrice: 2700,
        columnName: "Контраты",
        columnColor: "#D377F3",
        list: [
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
        ]
    },
    deal: {
        totalPrice: 36534,
        columnName: "Сделки",
        columnColor: "#459CED",
        list: [
            {
                title: "Ремонт помещения",
                subject: {
                    role: "customer",
                    name: "Павлова Екатерина"
                },
                date: "Окт. 12, 2022",
                price: 3245
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
            {
                title: "Запрос на подбор жилья",
                subject: {
                    role: "manager",
                    name: "Ворошилова Анастасия"
                },
                date: "Окт. 17, 2022",
                price: 1000
            },
        ]
    }
};

const colsList = ["leads", "proposal", "negotiation", "contractSend", "deal"]

export const DealsList = () => {
    return (
        <div className={styles.deals_list_wrapper}>
            {
                colsList.map((item) => {
                    const currentColData = dealsList[item];

                    return (
                        <div 
                            key={item}
                            className={styles.deal_wrapper}
                        >
                            <ColumnTotalStat
                                columnName={currentColData.columnName}
                                totalPrice={currentColData.totalPrice}
                                columnColor={currentColData.columnColor}
                            />

                            <div className={styles.deal_wrapper}>
                                {
                                    currentColData.list.map((listItem, index) => (
                                        <DealsListItem 
                                            key={index}
                                            title={listItem.title}
                                            subjectName={listItem.subject.name}
                                            subjectRole={listItem.subject.role}
                                            date={listItem.date}
                                            price={listItem.price}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}