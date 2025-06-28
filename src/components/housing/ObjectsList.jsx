import { Object } from "./Object";

import styles from "../../styles/housing.module.css";
import { useEffect, useState } from "react";

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

const sortOptions = [
    {
        title: "Цена (по возрастанию)",
        value: "ascending"
    },
    {
        title: "Цена (по убыванию)",
        value: "descending"
    },
]

export const ObjectsList = () => {
    const [iteratedObjectsList, setIteratedObjectsList] = useState(objects);

    const handleSort = (value) => {
        const sortedObject = [...objects].sort((a, b) => value === "descending" ? b.price - a.price : a.price - b.price)
        
        setIteratedObjectsList(sortedObject);
    }

    useEffect(() => {}, [iteratedObjectsList])
    
    return (
        <div className={styles.objects_list}>
            <div className={styles.object_topbar}>
                <div className={styles.objects_count_group}>
                    <p className={styles.objects_count}>Найдено { objects.length } объектов</p>
                    <p className={styles.objects_location}>в Краснодаре</p>
                </div>
                <div className={styles.objects_sort_wrapper}>
                    <p>Сортировать по:</p>

                    <select
                        onChange={(e) => handleSort(e.target.value)}
                        className={styles.price_select}
                    >
                        {
                            sortOptions.map((item, index) => (
                                <option 
                                    key={index}
                                    value={item.value}
                                >
                                    { item.title }
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {
                iteratedObjectsList.map((item, index) => (
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
                        developerInfo={item.developerInfo}
                        verificatedStatus={item.verificatedStatus}
                    />
                ))
            }
        </div>
    );
}