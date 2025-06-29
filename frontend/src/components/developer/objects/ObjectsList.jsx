import { Object } from "../../housing/Object";

import styles from "../../../styles/developer.module.css";

const objects = [
    {
        imgsList: ["/img/cash/flat1/image1.png", "/img/cash/flat1/image2.png", "/img/cash/flat1/image3.png", "/img/cash/flat1/image4.png", "/img/cash/flat1/image5.png"],
        price: 8500000,
        roomsCount: 2,
        squareMetrs: 65,
        address: "ул. Тверская, 15, Центральный район",
        currentFloor: 8,
        floorsCount: 12,
        buildedYear: 2019,
        hasParking: true,
        hasLift: true,
        hasGym: false,
        description: "Продается отличная двухкомнатная квартира в центре города. Квартира в хорошем состоянии, с современным ремонтом. Рядом метро, школы, магазины.",
        developerInfo: {
            developerName: "Михайил В.",
            developerStars: 4.9,
            dealsCount: 15,
            imgURL: "/img/cash/flat1/developer.png"
        },
        verificatedStatus: "verificated"
    },
    {
        imgsList: ["/img/cash/flat2/image1.png", "/img/cash/flat2/image2.png", "/img/cash/flat2/image3.png"],
        price: 12800000,
        roomsCount: 3,
        squareMetrs: 89,
        address: "ул. Арбат, 42, ЖК \"Премиум Класс\"",
        currentFloor: 15,
        floorsCount: 22,
        buildedYear: 2023,
        hasParking: true,
        hasLift: false,
        hasGym: true,
        description: "Элитная квартира в новом жилом комплексе премиум-класса. Панорамные окна, дизайнерский ремонт, консьерж-сервис. Закрытая территория с охраной.",
        developerInfo: {
            developerName: "Екатерина Л.",
            developerStars: 4.8,
            dealsCount: 8,
            imgURL: "/img/cash/flat2/developer.png"
        },
        verificatedStatus: "checked-by-notary"
    },
];

export const ObjectsList = () => {
    return (
        <div className={styles.objects_list_wrapper}>
            {
                objects.map((item, index) => (
                    <Object
                        key={index}
                        imgsList={item.imgsList}
                        price={item.price}
                        roomsCount={item.roomsCount}
                        squareMetrs={item.squareMetrs}
                        address={item.address}
                        currentFloor={item.currentFloor}
                        floorsCount={item.floorsCount}
                        buildedYear={item.buildedYear}
                        hasParking={item.hasParking}
                        hasLift={item.hasLift}
                        hasGym={item.hasGym}
                        description={item.description}
                        verificatedStatus={item.verificatedStatus}
                    />
                ))
            }
        </div>
    );
}