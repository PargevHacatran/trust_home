import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../../styles/housing.module.css";

import 'swiper/css';
import { icons } from "../../utils/housing/icons";
import { ObjectParams } from "./ObjectParams";
import { Button } from "../public/Button";

export const Object = ({ imgsList, price, roomsCount, squareMetrs, address, currentFloor, floorsCount, buildedYear, hasParking, hasLift, hasGym, description, developerInfo, verificatedStatus }) => {
    const isVerified = verificatedStatus === "verificated";
    
    return (
        <div className={styles.object_wrapper}>
            <div className={styles.object_images_container}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                >
                    {
                        imgsList.map((item, index) => (
                            <SwiperSlide
                                key={index}
                            >
                                <img src={item} alt="" />
                            </SwiperSlide>
                        ))  
                    }
                </Swiper>

                <div className={styles.object_image_content}>
                    <div 
                        style={{
                            background: isVerified ? "#22C55E" : "#2563EB"
                        }}
                        className={styles.object_verificated_status}
                    >
                        <div className={styles.object_status_icon_wrapper}>
                            { isVerified ? icons.verified : icons.checkedByNotary }
                        </div>
                        <div>
                            <p className={styles.object_verificated_status_text}>{ isVerified ? "Верифицировано" : "Проверено натариусом" }</p>
                        </div>
                    </div>
                    <div className={styles.objext_photos_count_wrapper}>
                        <p className={styles.objext_photos_count}>{ imgsList.length } фото</p>
                    </div>
                </div>
            </div>
            <div className={styles.object_content}>
                <div>
                    <div>
                        <h3 className={styles.object_price}>{ price.toLocaleString("ru-RU", { useGrouping: true }) } ₽</h3>
                    </div>
                    <div>
                        <p className={styles.object_personal_info}>{ roomsCount }-комн. квартира, { squareMetrs }м<sup>2</sup></p>
                    </div>
                    <div>
                        <p className={styles.object_address}>{ address }</p>
                    </div>
                    <div className={styles.object_params_list}>
                        <ObjectParams 
                            icon={icons.floorsCount}
                            title={`${ currentFloor }/${ floorsCount } этаж`}
                        />

                        <ObjectParams 
                            icon={icons.buildedYear}
                            title={`${ buildedYear } г.п.`}
                        />

                        {
                            hasParking ? 
                                <ObjectParams 
                                    icon={icons.parking}
                                    title="Парковка"
                                />
                                : null
                        }

                        {
                            hasLift ? 
                                <ObjectParams 
                                    icon={icons.lift}
                                    title="Лифт"
                                />
                                : null
                        }

                        {
                            hasGym ? 
                                <ObjectParams 
                                    icon={icons.gym}
                                    title="Спортзал"
                                />
                                : null
                        }
                    </div>
                </div>
                <div>
                    <p className={styles.object_description}>{ description }</p>
                </div>
                <div className={styles.object_developer_wrapper}>
                    <div className={styles.object_developer_group}>
                        <div className={styles.object_developer_img_wrapper}>
                            <img src={developerInfo.imgURL} alt="" />
                        </div>
                        <div className={styles.object_developer_main_info}>
                            <div>
                                <p className={styles.object_developer_name}>{ developerInfo.developerName }</p>
                            </div>
                            <div className={styles.object_developer_star}>
                                <div className={styles.object_developer_star_icon_wrapper}>
                                    { icons.star }
                                </div>
                                <p className={styles.object_developer_star_count}>{ developerInfo.developerStars } · { developerInfo.dealsCount } сделок</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button
                            className={styles.object_write_developer}
                            onClick={() => {}}
                        >
                            Написать
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}