import { useFormatPrice } from "../../../hooks/useFormatPrice";

import styles from "../../../styles/developer.module.css";
import { icons } from "../../../utils/developer/icons";

export const DealsListItem = ({ title, subjectName, date, price }) => {
    const formatedPrice = useFormatPrice(price);
    
    return (
        <div className={styles.deal_item}>    
            <div className={styles.deal_main_info}>
                <div className={styles.deal_topbar}>
                    <p className={styles.deal_title}>{ title }</p>

                    <div className={styles.deal_icon_wrapper}>
                        { icons.actionDots }
                    </div>
                </div>
                <div className={styles.deal_subject_info}>
                    <p className={styles.deal_subject_param}>{ subjectName }</p>
                    <p className={styles.deal_subject_param}>{ date }</p>
                </div>
            </div>

            <div className={styles.deal_price_wrapper}>
                <p className={styles.deal_price}>
                    <span className={styles.deal_price_sub}>₽</span>
                    { formatedPrice }
                </p>
            </div>
        </div>
    );
}