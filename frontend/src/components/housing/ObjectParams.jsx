import styles from "../../styles/housing.module.css";

export const ObjectParams = ({ icon, title }) => {
    return (
        <div className={styles.object_param}>
            <div className={styles.object_param_icon_wrapper}>
                { icon }
            </div>
            <div>
                <p className={styles.object_param_title}>{ title }</p>
            </div>
        </div>
    )
}